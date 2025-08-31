---
title: Firebase
sidebar_position: 3
---

## Chapter 1 - Intro


### What is CRUD?


**C** : Creating a new user profile or adding a new document <br/> **R** : Reading / fetching data <br/>**U** : Updating / Editing data <br/>**D** : Deleting data


### What is Google Firebase?


A software operated by Google that supports several backend components such as analytics, authentication, databases, file storage, push messaging, and other features. All of these features are hosted in the cloud, and can be easily used by developers.


## Chapter 2 - Firebase Project Setup

To start, we need to set up firebase through Google before we can install it into our app.

**1.** Go to https://firebase.google.com/ <br/>
**2.** Sign in with your google account <br/>
**3.** Click `Go to Console` <br/>
**4.** Click `Create a Firebase Project` <br/>
**5.** Enter Project Name <br/>
**6.** Turn off Google Analytics <br/>
**7.** Click `Create Project` <br/>
**8.** Click `</>` (web), under *get started by adding Firebase to your app*,  <br/>
<img src ="/img/firebase/firebaseWeb.png" width ="75%"/>

**9.** Enter your app name <br/>
**10.** Click `Register App` <br/>
**11.** Copy second text box, starts with `// Import the function you need from the SDKs you need`


We now have firebase set up!! Time to add it to our app!




## Chapter 3 - Firebase-Config

**1.** In your *terminal* type, `npm install firebase` <br/>
**2.** Inside *src*, create a file `firebaseConfig.js` <br/>
**3.** Paste the code we copied from firebase. <br/> If you need to copy it again, follow these steps <br/>
> a. From the firebase console, click on your project <br/>
> b. Under your project name, click on 1 app <br/>
> c. Click on the setting icons on the right side of the popup <br/>
> d. Scroll down until you see the code <br/>


## Chatper 4 - App.jsx


We have Firebase set up and connected! Let's learn how to implement CRUD!


### Step 1: Reference Database
Above createUser, type `const usersCollectionRef = collection(db, "users");`
This will create a reference to what database we are using.
![line1](/img/firebase/line1.png)




### Step 2: Create
Inside **createUser**, type
`await addDoc(usersCollectionRef, { name: newName, age: Number(newAge)});`


This will create a new doc inside usersCollectionRef <br/>


![line2](/img/firebase/line2.png)


*Note:* all code within a function should be before the reload statement. Otherwise your app will reload before completing the tasks


### Step 3: Update
Inside **updateUser**, type <br/>
`const userDoc = doc(db, "users", id)` <br/>
`const newFields = {age: age + 1}` <br/>
`await updateDoc(userDoc, newFields)`


This sends the document and updated data to firebase


![line3](/img/firebase/line3.png)


### Step 4: Delete
Inside **deleteUser**, type <br/>
`const userDoc = doc(db, "users", id)` <br/>
`await deleteDoc(userDoc);`


Sending that doc to Firestore to delete


![line4](/img/firebase/line4.png)


### Step 5: Read
Inside **getusers**, type <br/>
`const data = await getDocs(usersCollectionRef);` <br/>
`setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id })));` <br/>
- getDocs gets all documents from usersCollectionRef
- The we loop through each users and sets users array to the document data and id


![line5](/img/firebase/line5.png)




## FAQ / Common Mistakes


Firebase configuration:
- Ensure that the file is in the proper place. It should be inside the src folder
- The Firebase file should be called `firebaseConfig.js`
- Check that firebase is installed properly. Use `firebase --version` to check; if it displays a number you have it installed!
> Install firebase with `npm install firebase`
