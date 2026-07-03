---
title: Agents and Tools
sidebar_position: 7
---
# Agents and Tools


## 1. What is an Agent?
An agent is an LLM that has the ability to decide what actions to take, use "tools" to interface with other systems, and store relevant information from previous conversations. Instead of just chatting with a user, agents are built to automate tasks, like customer service, or save time, like coding assistants




## 2. How Agents Work
To achieve complex goals, an agent needs an advanced framework involving specific prompts and memory storage systems.


### ReAct Prompting
ReAct is a format for prompting that allows LLMs to use longer-term problem solving.
*   The LLM is asked to repeatedly perform actions and evaluate the results until they have accomplished their goal.
*   At each step, the LLM can decide what tool to use


### Memory Systems
An agent has two ways to track relevant information:
*   **Short-Term Memory:** This is stored in the LLM Context Window. It only lasts one session, the storage is often limited, and usually only useful for tracking the current conversation
*   **RAG (Retrieval-Augmented Generation):**
RAG allows an LLM to access a database and read relevant information. By reading facts before answering, it prevents hallucinations and makes responses more relevant.


## 3. Tools and MCP
A chatbot can only generate text, while an agent's tools allow it to actually carry out tasks. Tools give agents the ability to connect to APIs, other websites, or other services. The agent is given a list of available tools and independently decides when to use them.


There are four primary types of tools you can give an agent:
*   **Web search:** Searches on Google or another site for information
*   **Communication:** Sending emails/texts, making calls, or sending Discord messages
*   **Logic:** Executing code or calculating
*   **System tools:** File management, making payments, or sending information to other parts of the system


### The Model Context Protocol (MCP)
Writing separate integrations for each tool can be time-consuming, and typically only works for that specific tool and model. An MCP is a collection of standardized tools that an LLM can connect to. By connecting the agent to an MCP, it can immediately use all the tools stored in the MCP.


## 4. When to Use Agents
While agents are often a buzzword at hackathons, poor applications of agents could make your project worse. It's important to keep in mind an agent's strengths and weaknesses when incorporating them into your project.


### When to Use Agents
*   **Cleaning input:** An agent can turn human inputs into structured data. A phone call, email, or unclear request can be turned into structured data or a tool call
*   **Imitating humans:** Acting as customer support or filling a role a human would in a business.
*   **Dynamic problem solving:** Reading through a variety of data and making recommendations a simple program couldn’t


### When NOT to Use Agents
*   **Basic Logic:** If it can be done in basic code, it should be. LLMs can hallucinate or make mistakes for simple logic or math
*   **Time-sensitive tasks:** If it is time-sensitive or needs to be done many times, agents will often be too slow
*   **Deterministic tasks:** LLMs do not give the same answer every time. For important tasks, like filling out legal forms or making medical recommendations, it can be better to use other options


# Demo


This code demo is a tiny UTD course-planning assistant. It shows the core agent idea
without a giant framework: an LLM can ask Python to run tools, Python runs them,
and the results go back to the LLM.


The fun twist: we break the work into one extra layer. The top-level agent does
not do every task itself. It calls smaller specialist subagents.


## Start It Up


From the project root:


```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```


Create a `.env` file in the project root:


```env
GOOGLE_API_KEY= YOUR_GOOGLE_AI_STUDIO_KEY
GEMINI_MODEL= gemini-3.1-flash-lite
```


Run the app:


```powershell
uvicorn backend.main:app --reload
```


Then open:


```text
http://localhost:8000
```


FastAPI also gives you API docs at:


```text
http://localhost:8000/docs
```


## The Architecture


```text
User
-> FastAPI /chat
-> orchestrator_agent
   |-- EligibilityAgent
   |   |-- GetStudentHistory
   |   |-- GetCourseCatalog
   |   `-- GetCourseInfo
   `-- ReviewsAgent
       `-- GetRMPScore
-> final answer
```


The big idea is simple: multi-agent systems break a bigger task into smaller
parts. The orchestrator coordinates. The subagents focus. The tools fetch real
data.


In this project:


- `backend/main.py` exposes the `/chat` endpoint.
- `backend/orchestrate.py` runs the top-level orchestrator agent.
- `backend/subagents.py` runs the specialist subagents.
- `backend/data_tools.py` contains the actual Python tools.
- `backend/data/*.json` is the mock database.
- `frontend/` is the small browser UI.


## The Agent Loop


The loop is the magic trick, except the rabbit is just JSON.


```text
1. Send the user question to Gemini.
2. Gemini either answers or asks to call a tool.
3. Python runs the requested tool.
4. Python sends the tool result back to Gemini.
5. Gemini uses that result to answer or ask for another tool.
```


The orchestrator loop lives in `backend/orchestrate.py`:


```python
response = client.models.generate_content(
    model=model_used,
    contents=contents,
    config=config,
)


function_calls = getattr(response, "function_calls", None) or []
if not function_calls:
    return response_text(response), used_tools, model_used
```


If Gemini asks for tools, we route those requests to Python:


```python
tool_result = call_orchestrator_tool(call.name, args, student_id, trace)
tool_results.append(
    types.Part.from_function_response(name=call.name, response=tool_result)
)
contents.append(types.Content(role="tool", parts=tool_results))
```


That last line is important: it gives Gemini the tool results so it can keep
reasoning with fresh information.


## Tools vs Subagents


A normal tool is a Python function. Example from `backend/data_tools.py`:


```python
def get_student_history(studentID: str) -> dict[str, Any]:
    students = load_json("students.json")
    student = students.get(studentID)


    if student is None:
        return {"status": "not_found", "studentID": studentID}


    return {"status": "success", "studentID": studentID, **student}
```


A subagent is also exposed like a tool, but instead of directly reading JSON, it
runs its own smaller agent loop.


The orchestrator only sees these two "tools":


```python
ORCHESTRATOR_TOOL_SCHEMAS = [
    {"name": "EligibilityAgent", ...},
    {"name": "ReviewsAgent", ...},
]
```


Then the Python router calls the right subagent:


```python
def call_orchestrator_tool(name, args, student_id, trace):
    if name == "EligibilityAgent":
        return run_eligibility_agent(args["question"], student_id, trace)
    if name == "ReviewsAgent":
        return run_reviews_agent(args["question"], trace)
```


So the orchestrator delegates:


- Eligibility questions go to `EligibilityAgent`.
- Professor review questions go to `ReviewsAgent`.


## The Subagents


The eligibility subagent has course-planning tools:


```text
GetStudentHistory
GetCourseCatalog
GetCourseInfo
```


The reviews subagent has review data:


```text
GetRMPScore
```


Both subagents use the same pattern as the orchestrator:


```python
config = types.GenerateContentConfig(
    system_instruction=instruction,
    tools=[types.Tool(function_declarations=tool_schemas)],
)
```


That means each agent gets:


- instructions for how to behave
- a list of tools it is allowed to call
- a conversation history called `contents`


## Trace


The frontend shows a trace after each response. This is there so you can see the
agent thinking path without guessing.


You will see events like:


```text
orchestrator - llm_request
orchestrator - tool_call_started
eligibility_agent - tool_calls_requested
eligibility_agent - tool_call_finished
reviews_agent - final_answer
orchestrator - final_answer
```


If something goes wrong, the trace tells you where:


- Did the orchestrator call the wrong subagent?
- Did a subagent call the wrong tool?
- Did a tool return `not_found`?
- Did Gemini return an API error?


Tiny debugger, big usefulness.


## How This Connects To MCP


Right now the tools read local JSON files. That keeps the workshop easy to run.


But the shape is already MCP-friendly:


```text
GetRMPScore today -> reads backend/data/rmp_reviews.json
GetRMPScore later -> calls a Brave Search MCP server
```


The agent does not need to know whether the tool reads JSON, calls an API, or
uses MCP. It just asks for `GetRMPScore`, and Python handles the implementation.


## Summary


What we created is an LLM orchestrator that can call specialized subagents, and those subagents can call Python functions as tools. By breaking the task into smaller parts, each subagent handles one focused job and passes its result back to the orchestrator. The orchestrator then combines those results to reason across multiple steps and produce the final answer. This lets the system gather information it knows how to access through tools instead of relying only on the model's memory.