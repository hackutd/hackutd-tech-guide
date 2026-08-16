---
sidebar_position: 1
---

# Express.js

## Background

[JavaScript](../frontend/javascript) has long been the standard for developing web frontends. Historically, backends have looked much different than the frontends they complement, often implemented in distinct languages. Switching languages between writing two parts of the same component often risks confusion and inconsistency. One modern solution is to build your backend in JavaScript as well. [Node.js](https://nodejs.org/) is a cross-platform environment that can accommodate this. Programmers can rapidly develop robust, fully-functional apps by carefully utilizing open-source packages downloaded from the [npm](https://www.npmjs.com/) package manager.

## What is Express.js?

[Express.js](https://www.npmjs.com/package/express) is the most popular backend framework on [npm](https://www.npmjs.com/package/express), with over 28 million downloads in the week before HackUTD IX. It is a minimalist framework that provides a set of utility methods commonly needed by servers. We write our app-specific functions as a series of [middleware](https://expressjs.com/en/guide/writing-middleware.html) for Express, using any additional libraries as required.

## Getting Started

Let's create a backend [API](https://aws.amazon.com/what-is/api/)! We will use [StackBlitz](https://stackblitz.com/), an online IDE, for hassle-free development and testing. To get started, create a new Backend Express project in [StackBlitz](https://stackblitz.com/).

### Understanding the Files

`package.json` specifies how to install and run the project.

`index.js` is the default entry point specified in `package.json`.

Let's examine `index.js` and modify it as needed.

### Imports

```js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
```

We import three libraries that we will use later on.

1. Express.js: To support our backend
2. Path: To load our frontend
3. Body Parser: To make a [JSON](https://www.json.org/) interface

Add the line for importing the `body-parser` library to your `index.js` file.

Similarly, you may import additional libraries as required. Explore [npm](https://www.npmjs.com/) to find libraries that can simplify your task.

### Port

```js
const port = 3010;
```

This defines the [`port`](<https://en.wikipedia.org/wiki/Port_(computer_networking)>) number our app will use on the network. If this port is taken, try another empty one.

### App Initialization

```js
const app = express();
```

We initialize an instance of Express and provide it an alias `app`. We can now extend this `app` to perform our desired functionality through a series of [middleware](https://expressjs.com/en/guide/writing-middleware.html).

### Parser

```js
app.use(bodyParser.json());
```

Add this line after `app` initialization.

We want our [API](https://aws.amazon.com/what-is/api/) to send and receive data in [JSON](https://www.json.org/) format. We don't want to write a [JSON](https://www.json.org/) parser ourselves, so we are using a [middleware](https://expressjs.com/en/guide/using-middleware.html) that we imported from the `body-parser` library.

**Goal:**
As an example, let's write an [API](https://aws.amazon.com/what-is/api/) for a message board that accepts dad jokes.

### Storage

```js
const store = ['Welcome to the Board! Send in your worst dad jokes.'];
```

Our backend would need some space to store the messages. For a real-world application, you would want to store your data in a database with permanent storage (see [SQL](./sql-db.md), [NoSQL](./no-sql-db), [Firebase](./firebase.md)).

For now, add the above line to create a temporary `store` in memory. Note, with the temporary approach, all your user messages will get deleted when you restart the server.

### Accessor

```js
app.get('/api/dad', (req, res) => {
    res.status(200).json({ jokes: store });
});
```

We define a custom [middleware](https://expressjs.com/en/guide/writing-middleware.html) to allow users to fetch a list of jokes from the server.

By using the `get` method of the `app`, we are asking the app to accept [HTTP GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) requests. The first argument `'/api/dad'` tells the `app` the URL that should serve this function. The third argument is the function to be performed.

The `req` argument has information about the incoming [Request](https://expressjs.com/en/5x/api.html#req), and the `res` argument is a [Response](https://expressjs.com/en/5x/api.html#res) object that can be used to reply to the request.

`status(200)` sets the [HTTP Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) of the response to OK.

`json( { jokes: store } )` attaches a [JSON](https://www.json.org/) object to the response. In this case, the returned [JSON](https://www.json.org/) object has one field `jokes` containing our entire `store` list.

### Mutator

```js
app.post('/api/dad', (req, res) => {
    const { newJoke } = req.body;
    store.push(newJoke);
    res.status(200).send();
});
```

Our next [middleware](https://expressjs.com/en/guide/writing-middleware.html) uses the same URL as the accessor, but is executed when a [HTTP POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) is requested.

Here, we establish a contract for passing data to our API that frontends must adhere to. The input must be JSON-formatted and must at least contain a `newJoke` field. You may enforce stricter security policies here.

We extract this `newJoke` from the object and add it to our store. Then, we send an empty OK response.

### Serve Frontend from Express.js

```js
app.get('/', (req, res) => {
    res.sendFile(path.resolve('pages/index.html'));
});
```

### Listen for Incoming Connections

```js
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

Note, that the order of [middleware](https://expressjs.com/en/guide/writing-middleware.html) matters, so we first configured the parser, then defined API routes (that use the parser), and finally started listening for incoming connections (that use the API).

**[Complete Example](https://stackblitz.com/edit/express-simple-f4rrwc?file=index.js)**

## Further Reading

**[Next.js](../frontend/javascript-frameworks/next-js.md)** – A framework that combines backend and frontend

## External Links

-   [Express Routing](https://expressjs.com/en/guide/routing.html)
-   [Express Examples](https://expressjs.com/en/starter/examples.html)
-   [Express Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)
-   [GraphQL](https://graphql.org/) - A query language for your API
-   [Koa](https://koajs.com/) - A new framework by the team behind Express
