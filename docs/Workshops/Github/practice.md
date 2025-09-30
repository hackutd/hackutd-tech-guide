---
title: Git Hands-On Practice
sidebar_position: 3
---

# Git Hands-On Practice Exercise

This practice exercise will walk you through all the essential Git commands and workflows you'll need for hackathons and team projects. By the end, you'll have experience with repositories, branches, commits, merges, and collaboration workflows.

## Prerequisites
- Git installed on your computer ([installation guide](http://localhost:3000/Workshops/Webapp-Setup/installation-guide))
- GitHub account created
- Git configured with your name and email

---

## Part 1: Repository Setup

### Step 1: Create a Local Repository
```bash
# Create a new project folder
mkdir my-hackathon-project
cd my-hackathon-project

# Initialize Git repository
git init

# Check status
git status
```

**Expected result:** You should see "On branch main" and "No commits yet"

### Step 2: Create Your First Files
Create these files in your project folder:

**README.md:**
```markdown
# My Hackathon Project

A sample project for learning Git and GitHub.

## Features
- User authentication
- Dashboard
- Settings page
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Project</title>
</head>
<body>
    <h1>Welcome to My Project</h1>
    <nav>
        <a href="#home">Home</a>
    </nav>
</body>
</html>
```

**styles.css:**
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    color: blue;
}
```

### Step 3: Track and Commit Files
```bash
# Check what Git sees
git status

# Add all files to staging area
git add .

# Check status again
git status

# Make your first commit
git commit -m "Initial project setup with basic HTML and CSS"

# View your commit history
git log
```

**Remember:** Press `q` to exit the git log viewer!

---

## Part 2: Working with GitHub

### Step 4: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it `my-hackathon-project`
4. **Don't** initialize with README (you already have one)
5. Click "Create repository"

### Step 5: Connect Local to Remote
```bash
# Add GitHub as remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/my-hackathon-project.git

# Push your code to GitHub
git push -u origin main
```

**Checkpoint:** Refresh your GitHub page - you should see your files!

---

## Part 3: Branch Workflow

### Step 6: Create Feature Branches
```bash
# Create and switch to a new branch for navigation feature
git switch -c feature-navigation

# List all branches (current branch has *)
git branch
```

### Step 7: Work on Navigation Feature
Edit your `index.html` file to add more navigation:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to My Project</h1>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#login">Login</a>
    </nav>
    <main>
        <p>This is the main content area.</p>
    </main>
</body>
</html>
```

Update `styles.css` to style the navigation:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    color: blue;
}

nav {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 20px 0;
}

nav a {
    margin-right: 15px;
    text-decoration: none;
    color: #333;
}

nav a:hover {
    color: blue;
}

main {
    padding: 20px 0;
}
```

### Step 8: Commit Navigation Changes
```bash
# Check what changed
git status

# Add and commit changes
git add .
git commit -m "Add navigation menu with styling"

# View your commits
git log --oneline
```

---

## Part 4: More Branches and Collaboration Simulation

### Step 9: Create Another Feature Branch
```bash
# Switch back to main
git switch main

# Create branch for login feature
git switch -c feature-login

# Check that you're on the right branch
git branch
```

### Step 10: Add Login Form
Create a new file `login.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Login - My Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Login</h1>
    <form>
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
    <a href="index.html">Back to Home</a>
</body>
</html>
```

Add login form styles to `styles.css`:

```css
/* Add this to the end of your existing styles.css */

form {
    max-width: 300px;
    margin: 20px 0;
}

form div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}
```

### Step 11: Commit Login Feature
```bash
git add .
git commit -m "Add login form and styling"
```

---

## Part 5: Merging Branches

### Step 12: Merge Navigation Feature
```bash
# Switch to main branch
git switch main

# Merge the navigation feature
git merge feature-navigation

# Check the log to see the merge
git log --oneline

# Push changes to GitHub
git push
```

### Step 13: Create a Merge Conflict (Intentionally)
```bash
# While on main, edit index.html to change the h1 color in styles.css
```

Edit `styles.css` on main branch - change the h1 color:
```css
h1 {
    color: red;  /* Changed from blue to red */
}
```

```bash
# Commit this change
git add styles.css
git commit -m "Change heading color to red"

# Now switch to login branch
git switch feature-login
```

Edit `styles.css` on the login branch - change the h1 color differently:
```css
h1 {
    color: green;  /* Changed from blue to green */
}
```

```bash
# Commit this conflicting change
git add styles.css
git commit -m "Change heading color to green"
```

### Step 14: Resolve the Merge Conflict
```bash
# Switch back to main
git switch main

# Try to merge login branch (this will create a conflict)
git merge feature-login
```

**You should see a conflict message!** Open `styles.css` and you'll see:

```css
h1 {
<<<<<<< HEAD
    color: red;
=======
    color: green;
>>>>>>> feature-login
}
```

**Resolve the conflict** by choosing one color (or a different one):
```css
h1 {
    color: purple;  /* Choose a compromise color */
}
```

```bash
# Stage the resolved file
git add styles.css

# Complete the merge
git commit -m "Resolve merge conflict: set heading color to purple"

# View the history
git log --oneline --graph
```

---

## Part 6: Clean Up and Push

### Step 15: Clean Up Branches
```bash
# Delete the merged feature branches
git branch -d feature-navigation
git branch -d feature-login

# List remaining branches
git branch

# Push final changes to GitHub
git push
```

---

## Part 7: Simulate Team Collaboration

### Step 16: Make Changes on GitHub
1. Go to your GitHub repository
2. Click on `README.md`
3. Click the pencil icon to edit
4. Add this section to the bottom:

```markdown
## Team Members
- Your Name (Frontend Developer)
- Teammate 1 (Backend Developer)
- Teammate 2 (Designer)
```

5. Scroll down, add commit message "Add team members to README"
6. Click "Commit changes"

### Step 17: Pull Remote Changes
```bash
# Check status (your local is now behind)
git status

# Pull the changes from GitHub
git pull

# View the updated README
cat README.md
```

---

## Part 8: Practice Recovery Commands

### Step 18: Practice Undoing Changes
```bash
# Make a change you want to undo
echo "This is a mistake" >> index.html

# Check what changed
git status

# Undo the change
git restore index.html

# Verify it's gone
git status
```

### Step 19: Practice Unstaging
```bash
# Make a change and stage it
echo "<!-- Footer -->" >> index.html
git add index.html

# Check status (should show staged changes)
git status

# Unstage the file
git restore --staged index.html

# Check status again
git status

# Clean up
git restore index.html
```

---

## Congratulations!🎉

You've successfully practiced:
- Creating and initializing repositories
- Making commits with meaningful messages
- Working with remote repositories (GitHub)
- Creating and switching branches
- Merging branches
- Resolving merge conflicts
- Pushing and pulling changes
- Cleaning up branches
- Undoing changes safely

## Next Steps
- Practice these workflows with a teammate
- Try creating Pull Requests on GitHub instead of merging locally
- Experiment with `.gitignore` files
- Learn about rebasing for cleaner history

## Quick Reference Commands
```bash
# Repository setup
git init
git clone <url>

# Basic workflow
git status
git add .
git commit -m "message"
git push
git pull

# Branching
git branch                    # list branches
git switch -c <branch-name>   # create and switch
git switch <branch-name>      # switch branches
git merge <branch-name>       # merge branch

# Undo changes
git restore <file>            # undo working changes
git restore --staged <file>   # unstage file
git revert <commit-hash>      # undo a commit safely
```

Happy coding!
