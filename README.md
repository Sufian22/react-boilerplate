# Pub GUI

Install project dependencies and start the development server

```
npm install
npm start
```

__If you want to execute the build and the tests in local just type the following command__
```
docker-compose up --exit-code-from codecept
```

## Debugger in Visual Code

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

Start your app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

## Prettier in Visual Code

You would need to have the latest version of [VS Code](https://code.visualstudio.com), VS Code [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and VS Code [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed.

Add the following option to `.vscode/settings.json` -> User Settings

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "files.autoSave": "onFocusChange"
}
```

# How was this template built?

Applied the following command to create React environment

```
npx create-react-app .
```

## Project dependencies

### [React Router](https://github.com/ReactTraining/react-router)

```
npm i --save react-router
```

#### Complementary Packages

```
npm i --save react-router-dom
npm i --save react-router-redux
```

### [Redux](https://github.com/reduxjs/redux)

```
npm i --save redux
```

#### Complementary Packages

```
npm i --save react-redux
npm i --save redux-immutable
npm i -D redux-devtools
```

### [Redux Saga](https://redux-saga.js.org/)

```
npm i --save redux-saga
```

### [ImmutableJS](https://github.com/facebook/immutable-js/)

```
npm i --save immutable
```

### [Material-UI](https://material-ui.com/getting-started/installation/)

```
npm i @material-ui/core
npm i @material-ui/icons
```

### Jest & [Enzyme](https://airbnb.io/enzyme/docs/installation/)

_Jest already included in create-react-app_

Enzyme: Install it with the command below and configure `src/setupTests.js`

```
npm i -D enzyme enzyme-adapter-react-16
```

### [Prettier with VS Code and Create React App](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)

```
npm i -D --exact prettier
npm i -D eslint-plugin-prettier
npm i -D eslint-config-prettier
```

_Instead of pretty-quick use lint-staged as commented below_

#### [Husky](https://prettier.io/docs/en/precommit.html)

```
npm i -D lint-staged husky
```

### Babel Polyfill (¿Included in Create React App?)

Needed for regenerator-runtime (ES7 generator support is required by redux-saga)

```
npm i babel-polyfill
```
