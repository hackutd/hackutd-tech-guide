---
title: Firebase
sidebar_position: 4
---
### [Slides](https://docs.google.com/presentation/d/1X05MfpE11YSfsP6AReTVZ_nVT2v5RsdvROtCgJFrCTE/edit?usp=sharing)
## Chapter 1 - Intro

### What is a Database?


It is an organized collection of information where you can store any type of data.
It is important to note that the data must have some sort of relationship to each other. Databases make it easy to manage, access, and update that data ensuring usability and reliability.

### SQL vs NoSQL


SQL stands for Structured Query Language, used to retrieve and edit data. Just like the name suggests it has predefined structured tables to store data.

NoSQL stands for "Not only SQL". Here data is not stored in a predefined structure allowing us to vary the structure of our data. 

Firebase's database firestore, which we will be using today, is a NoSQL database.

## Common Databases


For hackathons, Firebase and Supabase are common databases to use as they are pretty quick to implement. 

On the other hand, AWS databases and Oracle are industry standard.

### What is CRUD?


**C** : Creating a new user profile or adding a new document <br/> **R** : Reading / fetching data <br/>**U** : Updating / Editing data <br/>**D** : Deleting data


### What is Google Firebase?


A software operated by Google that supports several backend components such as analytics, authentication, databases, file storage, push messaging, and other features. All of these features are hosted in the cloud, and can be easily used by developers.


## Chapter 2 - Firebase Project Setup

To start, we need to set up firebase through Google before we can install it into our app.

**1.** Go to https://console.firebase.google.com/ <br/>
**2.** Sign in with your google account <br/>
**3.** Click `Create a Firebase Project` <br/>
**4.** Enter Project Name <br/>
**5.** Turn off Google Analytics <br/>
**6.** Click `Create Project` <br/>
**7.** You can turn off Gemini in Firebase, and click continue<br/>
**8.** You can turn off Google Analystics  <br/>
**9.** Click Create Project<br/>
**10.** Click on `+ Add App` <br/>
**11.** Click `</>` (web)  <br/>
<img src ="/img/firebase/firebaseWeb.png" width ="75%"/>

**12.** Enter your app name <br/>
**13.** Click `Register App` <br/>
**14.** Copy second text box, starts with `// Import the function you need from the SDKs you need`


We now have firebase set up!! Time to add it to our app!




## Chapter 3 - Firebase-Config

**1.** Follow this tiny url, https://tinyurl.com/f25firebase <br/>
**2.** Click on the green code button<br/>
**3.** Click on codespaces. <br/>
**4.** Then `Open in Codespace` This should bring you a screen like this<br/> 
<img src ="/img/firebase/codespaces.png" width ="75%"/>

**5.** In your *terminal* type, `npm install firebase` <br/>
**6.** Inside *src*, create a file `firebaseConfig.js` <br/>
**7.** Paste the code we copied from firebase. <br/> If you need to copy it again, follow these steps <br/>
> a. From the firebase console, click on your project <br/>
> b. Under your project name, click on 1 app <br/>
> c. Click on the setting icons on the right side of the popup <br/>
> d. Scroll down until you see the code <br/>

**8.** Add this text at the top of you `firebaseConfig.js`, import { getFirestore } from 'firebase/firestore' <br/>
**9.** At the bottom of your file add, `Export constant db = getFirestore(app)` <br/>

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

### Step 3: Read
Inside **getusers**, type <br/>
`const data = await getDocs(usersCollectionRef);` <br/>
`setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id })));` <br/>
- getDocs gets all documents from usersCollectionRef
- The we loop through each users and sets users array to the document data and id


![line5](/img/firebase/line5.png)


### Step 4: Update
Inside **updateUser**, type <br/>
`const userDoc = doc(db, "users", id)` <br/>
`const newFields = {age: age + 1}` <br/>
`await updateDoc(userDoc, newFields)`


This sends the document and updated data to firebase


![line3](/img/firebase/line3.png)


### Step 5: Delete
Inside **deleteUser**, type <br/>
`const userDoc = doc(db, "users", id)` <br/>
`await deleteDoc(userDoc);`


Sending that doc to Firestore to delete


![line4](/img/firebase/line4.png)







## FAQ / Common Mistakes


Firebase configuration:
- Ensure that the file is in the proper place. It should be inside the src folder
- The Firebase file should be called `firebaseConfig.js`
- Check that firebase is installed properly. Use `firebase --version` to check; if it displays a number you have it installed!
> Install firebase with `npm install firebase`

## Resources
Slides: https://docs.google.com/presentation/d/1X05MfpE11YSfsP6AReTVZ_nVT2v5RsdvROtCgJFrCTE/edit?usp=sharing

Firebase Console: https://console.firebase.google.com/u/0/

Demo Repository: https://tinyurl.com/f25firebase

