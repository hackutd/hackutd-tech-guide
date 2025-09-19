---
title: Github
sidebar_position: 2
---

## What is Version Control?

**Version control** is a system that **records changes** to files over time so you can look back at **old versions** and recover if something goes wrong.  

**Why it’s necessary:**  
- Without it, people often make multiple copies of the same project:  
  `project_final.doc`, `project_final_v2.doc`, `project_final_really_final.doc`  
- **Mistakes happen** — code breaks, files get deleted — and without version control, it’s hard to go back.  
- Makes team projects easier by keeping everyone’s work in sync.  

**Google Docs analogy:**  
Think of Git as **Google Docs version history for code**:  
- Google Docs automatically **saves every change** and lets you **roll back** to any point in time.  
- You can see **who made each change**.  
- **Version control does the same thing, but for code projects.**  

**Takeaway:**  
**Version control = a time machine for your projects.**

---

## What is Git?

- **Git** is a **version control system** used by developers to **track changes** and **manage project history**.  
- Works **locally on your computer** (no internet required).  
- Stores everything in a hidden folder called `.git`.  
- Lets you create [**branches**](#branches) to experiment and [**merge**](#merging) changes when ready.

**Takeaway:**  
**Git = the tool that powers version control.**

---

## What is GitHub?

- **GitHub** is an online platform that **stores [Git](#what-is-git) repositories** in the cloud.  
- A **repository (repo)** is a **project folder** with your files and full history.  
- GitHub adds collaboration features:  
  - **Pull Requests** (propose changes)  
  - **Issues** (track bugs and tasks)  
  - **Project boards** (organize work)  
- Think of it as **Google Drive for Git projects**, built for developers.  

**Takeaway:**  
**GitHub = a place to host Git projects online and collaborate.**

## How to Install Git

## How to Setup Git

## How to Create a Repo
### git clone
- Use when you want to **download an existing repository** from GitHub (or another remote).  
- Example:  
  ```bash
  git clone https://github.com/user/repo.git

### git init

```bash
mkdir my-project    # Makes a new folder
cd my-project       # Changes directory (CD) to new folder
git init            # Creates a hidden .git folder that Git uses to track changes
```

### Cloning vs Forking

- **Cloning**: Makes a local copy of a repository. You can push changes if you have permission.  
- **Forking**: Creates a personal copy of a repository on GitHub under your account. Often used when contributing to someone else’s project.  

#### Typical workflow
- To contribute to an open-source project: fork → clone your fork → make changes → open a pull request.  
- To get a local copy for your own use: clone directly.


## Tracking Files
### git status
### git add
### git commit

### git restore

## Retrieving and Uploading Changes
### git push
### git fetch
### git pull

## Branches
### git branch
### git checkout
### git switch

## Merging
### git merge

## Hackathon Collaboration Best Practices

- **Commit Often**  
  Save your work frequently with meaningful commit messages.

- **Pull Before You Push**  
  Always update your local repo before pushing changes to avoid conflicts.

- **Use Feature Branches**  
  - Create a branch for each task or feature.  
  - Keep `main` or `master` stable.

- **Communicate Changes**  
  - Let your team know what you are working on.  
  - Use GitHub Issues, comments, or chat for updates.

- **Review Pull Requests Quickly**  
  - Check teammate code for mistakes or conflicts.  
  - Merge only after verifying it works.

- **Keep Branches Small**  
  - Focus on one feature or fix at a time.  
  - Smaller branches are easier to merge during the hackathon.

- **Use .gitignore**  
  - Avoid committing temporary files or dependencies.  
  - Keeps the repo clean and reduces conflicts.

- **Resolve Conflicts Carefully**  
  - Communicate with teammates when conflicts arise.  
  - Test after resolving to make sure everything works.
