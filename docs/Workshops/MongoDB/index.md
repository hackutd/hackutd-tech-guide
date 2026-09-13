---
title: MongoDB
sidebar_position: 4
---
# MongoDB Workshop

## 1. What is a Database?
A database is any collection of data stored electronically. If you've ever had to store data for yourself or taken a physics lab, you probably used Excel. Databases function similarly, but can hold much more data, can be used by many users at once, and are easier to structure for the long term and build for your own uses.

A **DBMS (Database Management System)** is the software used to interact with the data. Unlike in Excel, you don't edit or even see data directly. You send a command to the system, such as SELECT first_name FROM employees, and this lets you see the data stored. The editing, reading, and relations between the data is all handled by the software through commands. [MongoDB](https://www.mongodb.com/docs/manual/), [MySQL](https://dev.mysql.com/doc/), and [PostgreSQL](https://www.postgresql.org/docs/) are all examples of DBMSs, but they all function very differently.

### How Databases Are Structured
Think of this like an Excel sheet:
*   **Collection:** The entire set of data, like a full spreadsheet or a sheet tab. In MongoDB, you might have a `users` collection that stores all your data
*   **Object/Document:** One single record, like one row in that spreadsheet. All the information about a specific user
*   **Field:** One stored value about a user, such as the `name`, `email`, or `age` if a specific user

In a `users` collection, one document might look like `{ name: "Akash", email: "akash@example.com", age: 19 }`. That whole object is one document, and `name`, `email`, and `age` are its fields.

## 2. SQL vs NoSQL
While there are more DBMSes than you can count, they fall into two broad categories, relational and non-relational.

### SQL / Relational Databases
SQL (Structured Query Language) is used with relational databases, where data lives in tables and every row in a table has the same columns, so every object has the same fields. If your `users` table has columns `name`, `email`, and `age`, then every single user row must have those same three columns, even if some have to be left blank

*   This rigid structure makes SQL useful for long-term, sensitive storage. User accounts, inventory systems, or financial records, all databases where one would want and expect uniformity, likely use relational databases
*   Unfortunately, it is not flexible. If you want to add a "phoneNumber" field later on, you would have to copy it over to an entire new database with a "phoneNumber" field, which risks losing data for a large or frequently used database
*   For smaller projects or hackathons, SQL is likely not the right choice. For smaller scale data and projects that might require quick pivots, relational databases are too rigid

### NoSQL / Non-Relational Databases
NoSQL databases don't enforce a shared structure. Different documents in the same collection can have completely different fields. One `users` document could have `{name, email}` and another could have `{name, email, age, favoriteColor}`, and both are valid in the same collection.

*   NoSQL databases (like MongoDB) usually store data in **JSON format**, like in JavaScript or Python dictionaries. This means that connecting Python or JavaScript code to NoSQL databases is much easier than with SQL.
*   Because there's no hard rules to follow, it is easy to add new fields halfway through.
*   Because of their increased flexibility and code connectivity, NoSQL databases like MongoDB are usually the right choice for your projects or hackathon submissions

## 3. Why MongoDB?
There are many NoSQL databases ([Firebase](https://firebase.google.com/docs/firestore), [DynamoDB](https://docs.aws.amazon.com/dynamodb/), [Cassandra](https://cassandra.apache.org/doc/latest/), [Redis](https://redis.io/docs/latest/)), but MongoDB is better for a few reasons:

*   **JSON/BSON storage:** MongoDB stores documents as [BSON (Binary JSON)](https://www.mongodb.com/docs/manual/reference/bson-types/), which supports more kinds of data while still being flexible and keeping easy integration with code
*   **Sharding:** When a single server can't hold or serve all your data fast enough, MongoDB can [shard](https://www.mongodb.com/docs/manual/sharding/) a collection across multiple machines based on a specific field (a [shard key](https://www.mongodb.com/docs/manual/core/sharding-shard-key/)), and spread reads/writes across them. This is called scaling "horizontally" (adding more machines) as opposed to "vertically" (making one machine bigger) — it's cheaper and has a much higher ceiling than trying to buy an ever-larger single server. For a hackathon project this won't matter, but it's part of why MongoDB is trusted for production apps that later need to grow.

## 4. What is MongoDB Atlas?
MongoDB is just the database software itself, you could install and run it yourself on your own machine or a server if you wanted to manage it. **[MongoDB Atlas](https://www.mongodb.com/docs/atlas/)** is MongoDB's own fully-managed, cloud-based version of this (a Database-as-a-Service). Instead of installing and babysitting MongoDB yourself, Atlas runs it for you on AWS, Google Cloud, or Azure, whichever you pick, and gives you a dashboard and a connection string to use it.

**Benefits:**
*   You skip installing software, managing background services, or dealing with OS compatibility issues. There's nothing to install locally just to get a working database
*   Upgrades, backups, and security patches happen automatically, so you're not responsible for keeping the software itself up to date or safe
*   Because it's hosted in the cloud instead of on one person's laptop, your whole team can connect to the same live data at once
*   Atlas has a free tier (M0), which is plenty for a hackathon or small project. See MongoDB's own [Atlas tutorial](https://www.mongodb.com/resources/products/platform/mongodb-atlas-tutorial) for a walkthrough

## 5. Setting Up Your Own Atlas Cluster
Get this running alongside the rest of the workshop so you have a live database to test against by the end:

*   **[Create an account](https://www.mongodb.com/cloud/atlas/register):** Sign up for Atlas
*   **[Create your first cluster](https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/):** A "cluster" is the running deployment of MongoDB that holds your data. Choose the free tier (M0), pick a cloud provider (it doesn't matter much for a hackathon) and a region close to you, and Atlas starts the cluster for you, no server setup required on your end
*   **[Configure network access](https://www.mongodb.com/docs/atlas/security/ip-access-list/):** By default, nothing outside Atlas can reach your cluster. Under Network Access, add the IP addresses that should be allowed to connect, like your own machine, a teammate's, or `0.0.0.0/0` to allow any IP, which is convenient but less secure. Allowing any IP is usually bad practice, but to save time we're going to use it
*   **[Create a database user](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/):** Under Database Access, set a username and password to log in with. This is similar to an API key, and your code will use this to connect to MongoDB
*   **Get your connection string:** Atlas gives you a connection string starting with `mongodb+srv://...` that combines your cluster's address, your username, and a placeholder for your password. Your app uses this string to connect and start running commands. Like an API key, do not commit to this to GitHub and keep it private. Once you have it, follow the [Node.js driver quick start](https://www.mongodb.com/docs/drivers/node/current/get-started/) (or the driver for your language of choice) to connect from code, or use [MongoDB Compass](https://www.mongodb.com/docs/compass/), the official GUI, to browse your data without writing any code

## 6. CRUD Operations
[CRUD](https://www.mongodb.com/docs/manual/crud/) stands for the four actions you need to operate any database, Create, Read, Update, and Delete. Every command fits into one of these core categories. MongoDB keeps the commands simple and close to plain JavaScript object syntax:

*   **[Create](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/)** (add new data):

    ```js
    db.users.insertOne({ name: "Akash", age: 19, major: "CS" })
    ```

*   **[Read](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)** (search for data):

    ```js
    db.users.find({ age: { $gt: 18 } })       // everyone older than 20
    db.users.findOne({ name: "Akash" })       // the first user named Akash
    ```

*   **[Update](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/)** (change existing data):

    ```js
    db.users.updateOne({ name: "Akash" }, { $set: { age: 22 } })
    ```

*   **[Delete](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/)** (remove data):

    ```js
    db.users.deleteOne({ name: "Akash" })
    ```

The first argument to `find`, `updateOne`, and `deleteOne` is always a **filter**, the condition used to locate documents, such as a specific value or set of values. These 4 commands are the basis for every database system.