---
title: Connecting an API (Weather)
slug: weather
sidebar_position: 3
---

## What is an API?

API stands for **Application Programming Interface**, but that doesn’t make much sense either🤣
You can think of an API as an *intermediary* that enables two applications to communicate. Going back to the Restaurant analogy, what is the link between you ordering food, and that order being sent to the restaurant? 

It’s the waiter— or the **API**—that is responsible for this.
You can learn more about APIs [here](https://www.geeksforgeeks.org/what-is-an-api/).

# Overview:

- Style the `ActivityPage.jsx`
- Create the back-end component `WeatherComponent.jsx`
- Use axios to access the API

## Axios Installation

Before we begin, let’s first install Axios to our project. If your development server is currently running, use **ctrl + c** to stop it. You should now have access to your Bash console. Type in `npm install axios` and that’s all it takes.

---

## Challenge 1: Adding Structure to our ActivityPage.jsx

> Let’s add just a little bit of structure to our page before working on our API component.

  ```js
  // ActivityPage.jsx
import React from "react";

function ActivityPage() {
  return (
    <div>
      <div className="relative my-12 flex flex-col items-center">
        {/* TITLE */}
        <h1 className="text-4xl poppins-bold text-darkgreen">Weather</h1>
        <hr className="mb-6 mt-4 w-1/3 border-pastelgreen" />

        {/* Center Card for Vote and Weather */}
        <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col gap-6">
          {/* COMPONENTS HERE */}
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
  ```
---

## Challenge 2: Making the Weather Component

> Before we create the file, let’s create the folder. In your `\src` , create a new folder called `\utils`. This folder is used to house helper functions, API calls, and other complex logic that we want to abstract away.
> 
1. Now let’s create a file called `WeatherComponent.jsx` within our `\utils` folder.
2. Go ahead and copy/paste the code snippet below. We are importing several modules that we will need to make this API work.
    ```js
  import React, { useState, useEffect } from 'react';
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  import axios from 'axios';
  function WeatherComponent() {
    return (
    );
  }
  export default WeatherComponent;
  ```
---
## Challenge 3: Fetching Information

> In this section we’ll be creating the `fetchDate` function. This is going to fetch information through the firebase `getDoc` method for the picnicDate information. If we can verify that this information is correctly obtained, then we grab the date information and then save it using another state update function that we are going to initialize later on.
>
  ```js
  import React, { useState, useEffect } from 'react';
  import { getFirestore, doc, getDoc} from 'firebase/firestore';
  function WeatherComponent() {
      const db = getFirestore();
      const fetchDate = async () => {
              const dateDoc = await getDoc(doc(db, 'settings', 'picnicDate'));
              if (dateDoc.exists()) {
                  const savedDate = dateDoc.data().date;
                  setDate(savedDate);
                  fetchWeather(savedDate);
              } else {
                  console.log("No date found in Firestore.");
              }
          };
      useEffect(() => {
          fetchDate();
      }, [db]);
      return (
      ...
      );
  }
  export default WeatherComponent;
  ```
There’s a lot to unpack in this code, but it’s similar to the ‣ page.

Note: We haven’t declared our setDate or fetchWeather function yet. We will be doing this in the next steps.

---

## Challenge 4: Accessing the Weather API

> This is where we’ll finally be using the Axios API. You can learn more about it [here](https://axios-http.com/docs/api_intro).
For now, let’s import it at the top of our component.
> 

Let’s also take this opportunity to visit the [Weather API website](https://weatherapi.com/).
Create an account and you should see your API key at the top of your dashboard.
  ```js
  import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';

function WeatherComponent() {
    const db = getFirestore();
    const [weather, setWeather] = useState(null);
		const fetchDate = async () => {
            const dateDoc = await getDoc(doc(db, 'settings', 'picnicDate'));
            if (dateDoc.exists()) {
                const savedDate = dateDoc.data().date;
                setDate(savedDate);
                fetchWeather(savedDate);
            } else {
                console.log("No date found in Firestore.");
            }
        };

    useEffect(() => {
        fetchDate();
    }, [db]);

    const fetchWeather = async (selectedDate) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
                params: {
                    key: 'YOUR API KEY',
                    q: 'richardson',
                    dt: selectedDate,
                },
            });
            setWeather(response.data.forecast.forecastday[0].day);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (

    );
}

export default WeatherComponent;
  ```
Let’s break down our `fetchWeather` function:

- We made an asynchronous function `fetchWeather`
- There is one parameter `selectedDate` which holds the date information we’re passing in.
- As for the `axios.get`, we are fetching information from the url with the parameters we gave it.
    - For ex: say my key is x3349dc0652a43ac9af10924241511, the url will be:
    https://api.weatherapi.com/v1/forecast.json?key=x3349dc0652a43ac9af10924241511&q=richardson&dt=2024-11-14
- We create a variable `const response` that houses the value the API fetches. This information is stored as a .json and can therefore be destructured.
    - We call the setWeather state function with the parameter of the response variable. You might notice that we have a bunch of nested destructuring, but this is typical of an API data retrieval.

---

## Challenge 5: Changing the date

> Lets say the day you want to have your picnic on is rainy. To reschedule we’d have to add that functionality.
>
  ```js
    import React, { useState, useEffect } from 'react';
    import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
    import axios from 'axios';
    function WeatherComponent() {
        const db = getFirestore();
        const [weather, setWeather] = useState(null);
        const [date, setDate] = useState('');
        const fetchDate = async () => {
                const dateDoc = await getDoc(doc(db, 'settings', 'picnicDate'));
                if (dateDoc.exists()) {
                    const savedDate = dateDoc.data().date;
                    setDate(savedDate);
                    fetchWeather(savedDate);
                } else {
                    console.log("No date found in Firestore.");
                }
            };
        useEffect(() => {
            fetchDate();
        }, [db]);
        const fetchWeather = async (selectedDate) => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
                    params: {
                        key: 'YOUR API KEY',
                        q: 'Richardson',
                        dt: selectedDate,
                    },
                });
                setWeather(response.data.forecast.forecastday[0].day);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };
        const handleDateChange = (e) => {
            setDate(e.target.value);
        };
        const handleDateUpdate = async () => {
            try {
                await updateDoc(doc(db, 'settings', 'picnicDate'), { date });
                fetchWeather(date);
                console.log("Date updated successfully in Firestore.");
            } catch (error) {
                console.error("Error updating date:", error);
            }
        };
        return (
        );
    }
    export default WeatherComponent;
  ```
We finally created our useState variable and update function that we expected in our `fetchDate` function from the earlier steps.

We also created two new functions called `handleDateChange` and `handleDateUpdate`.
Let’s dive into the simpler one first

- The `e` parameter represents an event that we’re going to pass in from an input field.
- Within the body of the function, we simply call the `setDate` (useState update) function, while passing the value of what we’re passing in.

As for the `handleDateUpdate` function

- We call `updateDoc` instead of the usual `getDoc` firebase function. This distinction is important because instead of retrieving data, we are updating the database.
- After updating the database, it then calls fetchWeather with the same Date value.

---

## Challenge 6: Viewing the Data

> Let’s create some HTML code to view this data. Note that we are **not** applying any styling. We encourage you to style it and make it your own.

  ```js
  import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';

function WeatherComponent() {
		...
    return (
        <div className="p-4">
            <h2 className="mb-2">Weather Forecast</h2>
            <label className="block mb-2">
                We are planning on:
                <input 
                    type="date" 
                    value={date} 
                    onChange={handleDateChange} 
                    className="p-2 w-full mt-1 mb-3"
                />
            </label>
            <button 
                onClick={handleDateUpdate} 
                className="py-2 px-4 mb-4"
            >
                Update Date
            </button>
            {weather && (
                <div>
                    <p>Temperature: {weather.avgtemp_f}°F</p>
                    <p>Condition: {weather.condition.text}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherComponent;
  ```
---
## Challenge 7: Updating our ActivityPage

> Let’s go back to our `ActivityPage.jsx` file and render the new component we just built.

  ```js
      // ActivityPage.jsx
    import React from 'react';
    import Navbar from '../components/Navbar';
    import WeatherComponent from '../components/WeatherComponent';
    function ActivityPage() {
        return (
            <div>
                <Navbar />
                <div className="relative my-12 flex flex-col items-center">
                    {/* TITLE */}
                    <h1 className="">Weather</h1>
                    <hr className="mb-6 mt-2 w-1/3" />
                    {/* Center Card for Vote and Weather */}
                    <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col gap-6">
                      <WeatherComponent />
                    </div>
                </div>
            </div>
        );
    }
    export default ActivityPage;
  ```
---
## Congratulations!⛈️

And that’s all it takes to connect the Weather API, easy right? We learned about using the Axios API, and creating more JavaScript functions in React. Next up we have CRUD, which is an acronym for the essential database operations.
