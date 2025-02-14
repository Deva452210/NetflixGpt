# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Note:

- Created Signin/Signu Form
- Validated with Regex
- UseRef

- Deploy using Firebase

  - npm install firebase
  - npm install -g firebase-tools (CLI)
  - firebase login
  - firebase init
  - npm run build
  - firebase deploy

- Authentication using Firebase

  - Setup if email and password valid then do authentication logic (if else)
  - Go to fitrbase authentication documentation read about signup
  - import {getAuth and createUserUsingEmailandPassword}
  - Just copy paste the createUser... code from the documentation
  - import auth, set email and password
  - set error message
  - Do the same for Signin
  - After Authentication store user data in the Redux store and redirect the user to the Homepage

- Setting up Redux store for User Details

  - npm i -D @reduxjs/toolkit
  - npm i react-redux
  - Create appstore.jsx file
  - import configureStore
  - create store and userslice
  - Provide store to our root or app
  - Wrap body component in btwn the <Provider> component.
  - add appstore in the store (<Provider store={appStore}>)

- Solved bug - user redirection, moved useeffect to header

- Unsubscribe - use this in on auth state change in header to unmount the useEffect to avoid infinite authentication.

- Add hard code links to constants file

- Configure TMDB

  - Go to TMDB website
  - Log in
  - Go to API section
  - Generate the key
  - Go to documentation (It will be placed in the top section)
  - Go to API Reference tab
  - Movies List tab > Now playing
  - Copy options and paste it in the constants.
  - Make api cann using fetch and useEffect in Browse page
  - Add this movies data to Redux store

- Adding Movies Data in Redux store

  - Create movies Slice
  - Add it to app store
  - Disptch it from browse page

- Create custom hook

  - To fetch movies ai from TMDB and upadte the store

- Start creating Browse page UI

  - Create main and secondary sections
  - fetch movies data from store to main section using UseSelector

- Configure video trailer for the Main section

  - Go to TMDB Movies tab > videos section
  - Fetch data
  - Add it in store
  - create new hook for movie video

- Create movie list

  - fetch data from store
  - created carousel
    - npm install lucide-react

- Now create a hook for popular movies

  - Add it in store
  - Call it in browse page
  - Configure movie list in secondary container

- Configure GPT using OPEN AI
  - Create Gptsearch page
  - create store for toggle
  - create search component
  - Go to platform openai
  - Generate API Key
  - Install npm openai
  -
