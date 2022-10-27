![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# Ben's React Project

## This is a simple blog website, the main features being:

1. fetch blogs from JSON server and displaying as list on homepage
2. fetching individal details title, content, author and displaying them via Restful API - GET
3. functionality to add new blogs via RESTful API - POST
4. deleting blogs via RESTful API - DELETE

## The components include:

1. **App.js** - the main component, which uses BrowserRouter to link all the pages, give them paths, and load components to that page
2. **BlogList.js** - It receives the blogs from the Home component and displays them
3. **BlogCard.js** - This component fetches a single blog and displays it on a separate page
4. **Create.js** - This is where new blogs are created and adds them to the previous blogs list. This component includes a form controlled component
5. **Navbar.js** - This displays the navbar on each page
6. **NotFound.js** - This page loads if the user lands on a page that doesn't exist. It's the 404 page
7. **useFetch.js** - This is a custom hook that fetches the data from the local JSON server
8. **Cat.js** - Generate a random cat image from a cat API
9. **Counter.js**- simple counter app for fun

## Styling

The styling was done using the **Semantic UI React Library**

[Semantic UI](https://react.semantic-ui.com/)

## JSON-Server

The npm package [JSON Server](https://www.npmjs.com/package/json-server) is used for our API

## React Router

the npm package [React Router v6](https://www.npmjs.com/package/react-router-dom) is used for the client-side routes

