---
sidebar_position: 1
---

# Next.js

## What is Next.js?

[Next.js](https://nextjs.org/) is a JavaScript web framework that combines frontend and backend functionality under one hood. Working on both layers of your software is often referred to as Full-Stack development.

## Read before Starting

-   [React.js](../../frontend/javascript-libraries/react-js.md) - Next.js is based on React.js.
-   [Express.js](../../backend/express-js.md) - The following tutorial builds on our Express.js tutorial.

## Backend

Let's implement our [Express.js example](../../backend/express-js.md) in Next.js. To get started, create a new Fullstack Next.js project in [StackBlitz](https://stackblitz.com/).

Create a new file called `dad.js` under `/pages/api`. This automatically creates a new route that can be used to access your app. Add the following code to the new file.

```js
const store = ['Welcome to the Board! Send in your best dad jokes.'];
```

Similar to our Express.js tutorial, we will create a temporary store in memory for now. Please see [SQL](../../backend/sql-db), [NoSQL](../../backend/no-sql-db), [Firebase](../../backend/firebase.md) for permanent storage.

```js
export default (req, res) => {
    if (req.method == 'GET') {
        res.status(200).json({ jokes: store });
    }

    if (req.method == 'POST') {
        const { newJoke } = req.body;
        store.push(newJoke);
        res.status(200).send();
    }
};
```

That's it! As you might have noticed, this task was much simpler to code in Next.js compared to Express.js.

One major difference in syntax is that `get` and `post` are not separate methods here. You export one function for both, and check the value of `req.method` to decide what procedure to perform.

## Frontend

Let's use what we learned in [React](../../frontend/javascript-libraries/react-js.md) to make a simple client for this API. We want our users to be able to view a list jokes, and send new jokes.

Delete all existing code from `index.js` and use this file to write the following code.

### Imports

```js
import { useState, useEffect } from 'react';
```

### Page

```js
export default function Home() {
    // The rest of your code goes here...
}
```

We declare our page as a functional component. All the remaining code below will go inside the `{ }` (body) of this function.

### State

```js
const [jokes, setJokes] = useState([]);
const [myJoke, setMyJoke] = useState('');
```

We declare 2 state variables along with their setters:

1. jokes – a list of jokes (strings) sent by the backend to the frontend
2. myJoke – a new joke (string) that the frontend wants to send to the backend

### Backend to Frontend Communication

```js
const refresh = () => {
    fetch('/api/dad')
        .then((res) => res.json())
        .then(({ jokes }) => {
            setJokes(jokes);
        });
};
```

We define a `refresh` function that fetches `/api/dad`. Since the HTTP Method is not defined for `fetch`, the default GET is assumed. When this function is called by the frontend, it will trigger the GET case from our backend code. As a result, the list of jokes will be sent to the frontend.

We use the `then` syntax to define the chain of events that happen when the data is received by the frontend. First, it is converted from a JSON string to a JSON object. Next, we extract `jokes` from the object and assign it to our state variable for later use.

### Frontend to Backend Communication

```js
const send = () => {
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ newJoke: myJoke });
    fetch('/api/dad', {
        method,
        headers,
        body,
    }).then(refresh);
};
```

We define a `send` function that sends the state variable `myJoke` under field name `newJoke` to `/api/dad` using HTTP POST. As a result, the backend adds the new joke to its store and sends an OK response. Upon receiving OK, the frontend then calls the `refresh` function we defined above to update the user's view of the list.

### Executing Refresh on Page Load

```js
useEffect(refresh, []);
```

React's [`useEffect`](https://reactjs.org/docs/hooks-effect.html) calls the function passed in first argument, whenever one of the items in the list in second argument changes. Here, we wanted React to call `refresh` once on page load, without any dependencies. So, we pass `refresh` as the first argument, and an empty list `[]` as the second.

### Mapping

```js
const items = jokes.map((joke) => <li>{joke}</li>);
```

We map `jokes`, an array of strings, to `items`, an array of HTML elements.

### Return

```js
const handleChange = ({ target: { value } }) => {
    setMyJoke(value);
};

return (
    <>
        <div>
            <input value={myJoke} onChange={handleChange} />
            <button onClick={send}>Send</button>
        </div>
        <ul>{items}</ul>
    </>
);
```

Finally, we return our desired page structure.

The `<div>` on top is used for sending jokes. This further contains a (text-based) `<input>` and a `<button>`.

We want the `value` of the `<input>` to be the current state of `myJoke`. Also, when the `<input>` notices a change in its value, it calls the `handleChange` function to copy the current value from the event target to the state variable. This is one way of synchronizing an input to the state of a React app.

The `<button>` calls `send` when it is clicked.

The `<ul>` on bottom displays the `items` array that resulted from the mapping in the previous step. Upon successful execution of the refresh function, this area should display the list of all jokes on server.

**[Complete Example](https://stackblitz.com/edit/nextjs-nw3nmc?file=pages/api/dad.js)**

## External Links

-   [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs)
