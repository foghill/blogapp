# Ben's Blog App 

## This is a simple blog website, the main features being:

1. fetch blogs from JSON server and displaying as list on homepag
2. fetching indiviudla details title, content, author and displaying them
3. functionality to add new blogs via REST POST
4. deleting blogs via REST DELETE

## The components include:

1. App.js - the main component, which uses BrowserRouter to link all the pages, give them paths, and load components to that page
2. Home.js - the homepage for the blog which shows all the blogs in a list format. It calls the BlogList component and passes in the blogs to that component to displau the blogs. The Home component fetches the blogs with a useFetch custom hook
3. BlogList.js - It receives the blogs from the Home component and displays them
4. BlogDetails.js - This component fetches a single blog and displays it on a separate page
5. Create.js - This is where new blogs are created and adds them to the previous blogs list
6. Navbar.js - This displays the navbar on each page
7. NotFound.js - This page loads if the user lands on a page that doesn't exist. It's the 404 page
8. useFetch.js - This is a custom hook that fetches the data from the local JSON server
9. Cat.js - Generate a random cat image from a cat API
10. Counter.js- simple counter app for fun

## Styling

The styling was done using the Semantic UI React Library

[Semantic UI](https://react.semantic-ui.com/)

## JSON-Server

The npm package [JSON Server](https://www.npmjs.com/package/json-server)


