## Project overview:

  Making UI for the FlickR SDK using ReactJS. FlickR is providing service for free image hoisting and video hoisting. As well as FlickR providing Public SDK to get details(Live image URl, group Info, group member info, author info).
  In this project mainly focused on the to search functionality for the groups and group info details.
  
  **HOSTED LIVE URL(netlify):  https://blissful-agnesi-1c48a7.netlify.com/groups**

## Project Functionalities:

  ### Main Page:
    *This page contains searching the group name on input field with auto suggession.
    *After selecting group name from the suggestion UI, Displayed list of projects with info(like members and photos count).
    *Group Card is clickable. it will redirect to the gallery page.
  ### Gallery Page:
    *This page is contain gallry details
    *This page added pagination as well.
    
## Important Functional Aspects:
   ### Main Page:
     *Search functionality have debouncing for to control the api call for auto suggestion.
   ### Gallery Page:
     *Pagination is implemented using scroll method fot better user experience.
     
  
 ### Technolgies Overview:
   **ReactJs - Library (Component based approach to make UI)**
   **Redux - State Management**
   **Sagas - Middleware for the state management**
   **Styled Components - CSS (Component based CSS)**
   **flickr-sdk - Packag to make api**
   **Netlify - Free hosting**
   
## Basic Installation:  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
