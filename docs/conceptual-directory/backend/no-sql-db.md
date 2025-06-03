---
sidebar_position: 4
---

# NoSQL Databases

"Not Only SQL" Databases focus on storing documents rather than tables. The [SQL apartment example](/backend/sql-db.md) that uses 2 tables can simply be stored in NoSQL as a single list of complex JSON objects/documents. See an example of such a document below.

```json
{
    "id": 0,
    "apartment": "Lorem",
    "rent": "$1500", "sq_ft": "1234", "deadline": "2023-1-1", "has_gym": false,
    "city": {
        "city_name": "Sit",
        "population": "345k"
    },
}
```

In SQL, the `city` of a row had to be a single value. However, note that `city` here is an object nested inside the row object. In NoSQL, we are no longer restricted to storing data in a 2D tabular format.

It is also possible to store lists of values, and even lists of nested objects inside a single document.

```json
{
    "id": 0,
    "person": "John",
    "hobbies": ["swimming", "hacking", "dancing"],
}
```

## External Links

- [What is NoSQL? When should I use NoSQL?](https://www.mongodb.com/nosql-explained)
- [Tutorial: Integrating Mongo, Express, React, and Node](https://www.mongodb.com/languages/mern-stack-tutorial)
- [Tutorial: Integrating Mongo, Next.js, and Node](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)