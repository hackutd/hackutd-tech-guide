---
sidebar_label: 'Vibe Coding'
title: 'Vibe Coding'
sidebar_position: 5
---

# Vibe Coding

## What is Vibe Coding? 

**Definition:** Using AI to translate intent into working software through iterative collaboration.

* **AI accelerates implementation:** The bottleneck is no longer writing the syntax.
* **Human ownership:** The human still entirely owns the requirements, architecture, and final quality control.

## Why it Matters for Hackathons 
* **Faster iteration:** Spend less time fighting bugs and more time refining product-market fit and UX.
* **Smaller teams can build more:** One or two developers can launch a feature-complete product over a single weekend.

## The Vibe Coding Stack 
* **LLMs:** ChatGPT, Claude
* **AI IDEs & Tools:** Cursor, Copilot, Bolt, Lovable



# Key Concepts: Managing your Context 

## The Context Window 
> **Requirements + Code + Chat History + Files = Context Window**

Everything competes for attention inside an LLM's memory. Every new message carries previous context <br/>(**Message 1 → sends 1; Message 2 → sends 1 + 2**). As the chat history grows:
1. Focus decreases
2. Consistency drops
3. Quality decreases



## Context Rot 
### Why AI Starts Getting Weird
When an AI model starts losing its focus under a heavy context load, it isn't broken—it's experiencing **Context Rot**. 

**Watch out for these symptoms:**
* **✅ Good Context:** Consistent responses; references previous project requirements correctly.
* **❌ Context Rot:** Hallucinating features, reintroducing old bugs, changing unrelated code, forgetting architecture, or delivering massive, unexplained code changes.



## Tokens 
### What is a Token?
AI doesn't see words; it breaks down text into chunks called **tokens**. 
* `"hello"` ≈ `1 token`
* `"Build a React dashboard"` ≈ `4-5 tokens`

### Token Efficiency Best Practices
To keep costs low, focus sharp, and prevent early context rot:
* Give complete requirements upfront.
* Attach **only** relevant files.
* Avoid repeatedly pasting the exact same information.
* Use summaries and clear project documentation.

> 💡 **Tip:** If you are using Claude, type `/compact` in your chat. This prompts the AI to summarize your message history into fewer tokens, instantly freeing up memory workspace.



## Skills 
### What are Skills?
* **Definition:** A reusable instruction set that teaches an AI exactly how you want work done.
* **The Analogy:** A *Prompt* is like a direct function call; a *Skill* is the underlying system instruction file that the AI reads every single time.

### Why Skills Matter
* **Without Skills:** You have to manually explain your architectural preferences and rules every time you open a new chat.
* **With Skills:** You reuse custom instructions automatically, saving **tokens**, ensuring strict output **consistency**, and accelerating developer onboarding.

### Skill Examples
* **React Engineer Skill:** *"Always use TypeScript, use Tailwind CSS, add descriptive comments, and write automated tests."*
* **Hackathon Judge Skill:** *"Always evaluate submissions based on Novelty, Feasibility, and Demo quality."*

---