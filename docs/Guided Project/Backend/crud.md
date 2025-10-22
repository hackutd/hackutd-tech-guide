---
title: CRUD using Firestore
slug: crud
sidebar_position: 4
---

In this page, we are going to add a voting system so our users can vote on an activity. Do note that this page requires [User Authentication (Firebase)](https://www.notion.so/User-Authentication-Firebase-a54030329ef447948a48b607cc48263c?pvs=21) to be completed prior. 

## What is CRUD?

To briefly explain, CRUD stands for Create, Read, Update, and Delete. They’re the four basic operations that any software application should be able to perform. To learn more, click [here](https://www.freecodecamp.org/news/crud-operations-explained/).

---

## Challenge 1: Creating the VoteComponent

In the previous steps, we created the WeatherComponent which helped us display the weather through an API. Now lets make a new file called VoteComponent.jsx in `\utils` .

Let’s start by importing some packages for firebase and ChartJS at the top of our file.
Don’t forget to install the following packages: `npm i chart.js` ``npm i react-chartjs-2`

  ```js
  import React, { useEffect, useState } from 'react';
import { getFirestore, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/authContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

function VoteComponent() {

    return (
    <div>
        VoteComponent
    </div>
    );
}

export default VoteComponent;
  ```
---
## Challenge 2: Connecting our Database

Pretty similar to some of the stuff we did when making `WeatherComponent.jsx`. Let’s connect this component to our database:
  ```js
  import React, { useEffect, useState } from 'react';
import { getFirestore, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/authContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function VoteComponent() {
    const db = getFirestore();
    const [votes, setVotes] = useState({ activity1: 0, activity2: 0, activity3: 0 });
    const [userVote, setUserVote] = useState(null);
    const { user } = useAuth();
    
		const fetchVotes = async () => {
            const docRef = doc(db, 'votes', 'picnicActivities');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setVotes(docSnap.data());
            } else {
                await setDoc(docRef, { activity1: 0, activity2: 0, activity3: 0 });
            }
        };

    const fetchUserVote = async () => {
        if (user) {
            const userVoteRef = doc(db, 'userVotes', user.uid);
            const userVoteSnap = await getDoc(userVoteRef);
            if (userVoteSnap.exists()) {
                setUserVote(userVoteSnap.data().vote);
            }
        }
    };
    useEffect(() => {
        fetchVotes();
        fetchUserVote();
    }, [user]);

    return (
       
    );
}

export default VoteComponent;
  ```
Here we made states for our activities, votes, and users auth. You may be asking why user auth? Well we are going to use the user auth object to ensure each user only gets one vote. Additionally, we added to our useEffect hook functions to fetch the data from our database.

So what changed by adding this code?

1. First off, we created states for votes and userVote. 
2. We also created a user by calling the useAuth method that we imported from Firebase.
3. The `user` object is used to ensure that each user only gets at most one vote. We also have some fetch functions that are called with useEffect as we’ve seen in previous components. These functions are somewhat intuitive but if you have questions, ChatGPT can clarify any of your questions.
4. You might have also noticed the `ChartJS.register` function. This line is essential in the setup process for using Chart.JS. The `register()` method is used to register the exact components such as plugins, elements, scales, etc. that we want to use in our program. You can learn more about Chart.JS [here](https://www.chartjs.org/docs/latest/getting-started/usage.html).

---

## Challenge 3: Adding Front-end to Visualize the Data
  ```js
  ...
function VoteComponent() {
    ...
    return (
        <div className="">
            <h2 className="mb-2">Vote for an Activity</h2>
            <div className="flex gap-2 mb-4">
                <button
                    disabled={!user}
                    className={`py-2 px-4 ${
                        userVote === 'activity1' ? '' : ''
                    } ${!user ? '' : ''}`}
                >
                    Activity 1
                </button>
                <button
                    disabled={!user}
                    className={`py-2 px-4 ${
                        userVote === 'activity2' ? '' : ''
                    } ${!user ? '' : ''}`}
                >
                    Activity 2
                </button>
                <button
                    disabled={!user}
                    className={`py-2 px-4 ${
                        userVote === 'activity3' ? '' : ''
                    } ${!user ? '' : ''}`}
                >
                    Activity 3
                </button>
            </div>
            <Bar data={data} />
            {userVote && <p className="mt-2">You have voted for {userVote.replace('activity', 'Activity ')}.</p>}
        </div>
    );
}
  ```
There’s a lot to take in when it comes to the HTML. The main take away is that we are creating 3 buttons for users to vote on either Activity 1, 2, or 3. We also have a **Bar chart display** of our vote information that we get from the database.

---

## Challenge 4: Adding Logic to our Voting System

We are now handling what happens upon a user clicking on the vote button. `onClick`  for any of the buttons will call the `handleVote` function while passing in the specific activity it’s voting for. The database is then updated to reflect that very change.
  ```js


function VoteComponent() {
		...    
    const handleVote = async (activity) => {
        if (!user || userVote === activity) return;

        const docRef = doc(db, 'votes', 'picnicActivities');
        const userVoteRef = doc(db, 'userVotes', user.uid);

        if (userVote) {
            await updateDoc(docRef, { [userVote]: votes[userVote] - 1 });
        }

        await updateDoc(docRef, { [activity]: votes[activity] + 1 });
        await setDoc(userVoteRef, { vote: activity });
        
        setUserVote(activity);
        setVotes((prevVotes) => ({
            ...prevVotes,
            [userVote]: userVote && userVote !== activity ? prevVotes[userVote] - 1 : prevVotes[userVote],
            [activity]: prevVotes[activity] + 1,
        }));
    };

    const data = {
        labels: ['Activity 1', 'Activity 2', 'Activity 3'],
        datasets: [
            {
                label: 'Votes',
                data: [votes.activity1, votes.activity2, votes.activity3],
            },
        ],
    };

    return (
        <div className="">
            <h2 className="mb-2">Vote for an Activity</h2>
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => handleVote('activity1')}
                    disabled={!user}
                    className={`py-2 px-4 ${
                        userVote === 'activity1' ? '' : ''
                    } ${!user ? '' : ''}`}
                >
                    Activity 1
                </button>
                <button
                    onClick={() => handleVote('activity2')}
                    disabled={!user}
                    className={`py-2 px-4 ${
                        userVote === 'activity2' ? '' : ''
                    } ${!user ? '' : ''}`}
                >
                    Activity 2
                </button>
                <button
                    onClick={() => handleVote('activity3')}
                    disabled={!user}
                    className={`py-2 px-4 ${
                        userVote === 'activity3' ? '' : ''
                    } ${!user ? '' : ''}`}
                >
                    Activity 3
                </button>
            </div>
            <Bar data={data} />
            {userVote && <p className="mt-2">You have voted for {userVote.replace('activity', 'Activity ')}.</p>}
        </div>
    );
}

export default VoteComponent;
  ```
We added a function called `handleVote` so our users can vote. The function checks if the user has already before. If they try to change their vote, it will delete their previous vote from the database. 

---

## Challenge 5: Updating ActivityPage.jsx

This should be something that you are comfortable and familiar with. We are rendering the vote component in our ActivityPage.jsx

  ```js
  import React from 'react';
import Navbar from '../components/Navbar';
import WeatherComponent from '../components/WeatherComponent';
import VoteComponent from '../components/VoteComponent';

function ActivityPage() {
    return (
        <div>
            <Navbar />
            <div className="relative my-12 flex flex-col items-center">
                {/* TITLE */}
                <h1 className="">Weather</h1>
                <hr className="mb-4 mt-2 w-1/3" />

                {/* Center Card for Vote and Weather */}
                <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col gap-6">
                   <WeatherComponent />
                   <VoteComponent />
                </div>
            </div>
        </div>
    );
}

export default ActivityPage;
  ```
# Congratulations!🥳

In this section, we’ve learned the valuable skill of adding and removing information from our database. Although it’s not super intuitive, we hope that you dive deeper into the topic to truly ingrain these concepts. Don’t forget to use external resources whenever you can.

And this concludes our written tutorial on creating your first full stack application.

Thank you so much for making it to the end, we look forward to seeing your project and how you make it your own! There’s still much to do so visit the next page when you’re ready.