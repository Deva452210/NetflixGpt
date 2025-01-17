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
