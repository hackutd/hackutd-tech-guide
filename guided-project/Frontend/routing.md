---
title: Routing
slug: routing
sidebar_position: 6
---

When building a web application, you might want different pages or views, like a homepage, an about page, or a contact page. **Routing** is the method that lets you display different components or views based on the URL. In React, routing is managed with tools like **React Router**.

### What is Routing?

Imagine a website as a house with many rooms, and each room represents a different page. **Routing** is like **creating paths** or doors to access each room. By using routing in React, we can set up these paths so that when someone visits a specific **URL**, they see the content we want to show for that page.

Here’s some [documentation](https://www.w3schools.com/react/react_router.asp) for those that are interested.

---

## Setting Up React Router with BrowserRouter

1. **Install React Router**  
In your terminal, run the following code.  
Note that you may need to either create a new Node terminal or use ctrl + c to stop your development server before you can install.
  ```bash
  npm install react-router-dom
  ```
2. Import the following at the top of your App.jsx file
  ```js
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  ```
  `BrowserRouter as Router` renames BrowserRouter into `Router` . Creating an alias for this imported function makes it easier for other people to read your code and is not required.

3. In your `App.jsx`, using `<Router>`, `<Routes>`, and `<Route>` looks like this:
  ```js
  function App() {
    return (
        <Router>
            <Navbar /> {/* This will make the Navbar appear on every <Route /> */}
            <Routes>
                <Route path="/" element={<FeaturedItem />} />
            </Routes>
        </Router>
    );
  }
  ```
- **`<Router>`**: Wraps the app to enable routing using React Router.
- **`<Navbar />`**: A navigation bar component that will appear on every page, as it's outside any specific route.
- **`<Routes>`**: A container for individual routes.
- **`<Route path="/" element={<FeaturedItem />} />`**: Defines a route where the path `"/"` (the home page) displays the `<FeaturedItem />` component.

# Challenge 1: How can you add more Routes?

> **Create a Route for every item on our Navbar. You should also create a page for every Route since the Route needs to display something.**
Let’s first create our separate page files in our directory.

1. Go to your `\src` folder and create a new folder called `\pages`. It should be in the same directory level as the `\components` and `\data` folders.
2. Within this folder, let’s create a few new files such as `MapPage.jsx`, `ActivityPage.jsx`, and `RsvpPage.jsx`
3. Let’s initialize all of the files using ‘rfce’, just as we’ve done with our other components.
    1. Pages are no different than any other React Component. The main difference is that we expect them to render components, similar to App.jsx instead of returning HTML code themselves.
4. Now let’s go back to our `App.jsx` file to answer the question: “How can we create a Route for the **items** in our Navbar?”. Let’s reference this [documentation](https://www.w3schools.com/react/react_router.asp) for help.
    1. Don’t forget to import all of our page components for Map, Activity, and Rsvp at the top!

###  **Solution**

### Creating Routes within `App.jsx`
  ```js
  import Navbar from "./components/Navbar";
import FeaturedItem from "./components/FeaturedItem";
import Dashboard from "./components/Dashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import ActivityPage from "./pages/ActivityPage";
import RsvpPage from "./pages/RsvpPage";

function App() {
  return (
    <Router>
      {/* Regardless of what page we're on, we ALWAYS render the Navbar */}
      <Navbar />
      <Routes>
        {/* Home route displaying Navbar, FeaturedItem, and Dashboard */}
        <Route
          path="/"
          element={
            <>
              <FeaturedItem />
              <Dashboard />
            </>
          }
        />
        {/* Browse route displaying Navbar and BrowsePage */}
        <Route path="/map" element={<MapPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/rsvp" element={<RsvpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

  ```
  :::info
  - We wrap all of our content within `<Router>` (otherwise known as BrowserRouter)
- We then define `<Routes>` which will contain all of our Route(s)
- Each individual `<Route>` has a path, and when we navigate to said path, our DOM will render the element which is the respective page.
  :::
### Creating Links to our Pages ###

  ```js
  <Link to="/map">Click Me</Link>
  ```
  Above is an example `<Link />` component that will navigate to the **`/map`**  page. An alternative to using `<Link />` is by using a React hook called `useNavigate`.  Read more about these differences [here](https://stackoverflow.com/questions/71781348/difference-between-link-and-usenavigate-from-react-router-dom).

  Below is an example of using the `useNavigate` hook.

  ```js
import { useNavigate } from 'react-router-dom';
function MyComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Go to Home</button>
      <div onClick={() => navigate('/rsvp')}>Go to RSVP</div>
      <h1 onClick={() => navigate('/rsvp')}>Go to RSVP</h1>
    </div>
  );
  }

export default MyComponent;
  ```
  Let’s try integrating these Links into our Navbar component.

1. Go to your `Navbar.jsx` file
2. Paste this line of code at the top to enable Links within this component
`import { Link } from "react-router-dom";`
3. We’re almost done, all we need to do is replace our `<p>` tags with `<Link>` tags. Don’t forget to add the `to=` attribute to specify where we’re supposed to go!
4. After you’ve converted the 3 `<p>` tags into `<Link>` tags, you have one last step.
    1. Let’s say we wanted to go back to the home page after navigating to a separate page, which button should perform that feature? Try implementing this solution yourself before checking the solution

Here’s the final [code](https://pastebin.com/bApTr9Xp) for `App.jsx` 
and the [code](https://pastebin.com/2nTd2KZE) for `Navbar.jsx`

---

## Congratulations!🥂

This concludes the front-end section of this tutorial! There is still much more to do such as the other pages that we’ve linked just now. As you navigate through these other components, incorporate the things that we’ve learned, but don’t be afraid to branch out and experiment with new things such as animations and icons.