# Git Command Reference

A quick reference guide for the most commonly used Git commands.

## Basic Commands

### `git status`
Check the status of your working directory and staging area.
```bash
git status
```
Shows:
- Modified files
- Staged changes
- Untracked files
- Current branch

### `git add`
Stage changes for commit.
```bash
# Stage a specific file
git add filename.txt

# Stage all changes
git add .

# Stage all files of a specific type
git add "*.js"
```

### `git commit`
Save staged changes to the repository.
```bash
# Commit with inline message
git commit -m "Your commit message"

# Commit and stage all modified files
git commit -am "Your commit message"

# Open editor for detailed commit message
git commit
```

### `git clone`
Create a local copy of a remote repository.
```bash
# Clone a repository
git clone https://github.com/username/repository.git

# Clone into a specific directory
git clone https://github.com/username/repository.git my-folder
```

### `git push`
Upload local commits to a remote repository.
```bash
# Push to current branch
git push

# Push to specific remote and branch
git push origin main

# Push and set upstream branch
git push -u origin feature-branch
```

### `git pull`
Download and merge changes from a remote repository.
```bash
# Pull changes from current branch
git pull

# Pull from specific remote and branch
git pull origin main
```

## Branch Management

### `git branch`
List, create, or delete branches.
```bash
# List all branches
git branch

# List all branches (including remote)
git branch -a

# Create a new branch
git branch new-branch-name

# Delete a branch
git branch -d branch-name

# Force delete a branch
git branch -D branch-name
```

### `git switch`
Switch between branches (modern alternative to `git checkout`).
```bash
# Switch to existing branch
git switch branch-name

# Create and switch to new branch
git switch -c new-branch-name

# Switch to previous branch
git switch -
```

## Quick Workflow Examples

### Starting a new feature
```bash
git switch main
git pull
git switch -c feature/new-feature
# Make your changes
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature
```

### Updating your branch
```bash
git switch main
git pull
git switch your-branch
git merge main  # or git rebase main
```

### Basic daily workflow
```bash
git status                    # Check what's changed
git add .                     # Stage your changes
git commit -m "Description"   # Commit changes
git push                      # Push to remote
```

## Tips

- Always check `git status` before committing
- Write clear, descriptive commit messages
- Pull before pushing to avoid conflicts
- Use `git switch` instead of `git checkout` for switching branches
- Create feature branches instead of working directly on main