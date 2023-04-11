# Quizzical - A Trivia App

Quizzical is a fun trivia app that tests your knowledge of sports. It features seven trivia questions pulled from the [Open Trivia Database](https://opentdb.com/ "Read Docs") and presents them in a short quiz format

To play, simply select your answers and check them at the end. Quizzical will score your quiz and provide feedback on your performance. If you want to play again, you can do so easily

Ready to test your sports knowledge? Try out the [Quizzical Fun Sports Trivia](https://quizzical-sports-trivia.netlify.app "play game") live demo

<img width="60%" alt="home" src="https://user-images.githubusercontent.com/83452606/231095459-d841e8cd-cb3f-4489-a5b5-1106a1dcd124.png">

<img width="60%" alt="questions" src="https://user-images.githubusercontent.com/83452606/231094044-bb8ca5f6-301d-48c2-a86d-325ef4f029ef.png">

<img width="60%" alt="answers" src="https://user-images.githubusercontent.com/83452606/231094058-203eeed1-2486-4c4f-b5c3-d931c46c2fb4.png">

---

## `he` Lightweight Package

Installation via npm:

```
npm install he
```

Gets rid of HTML entities in the API response
[JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "Read Docs") expects a string as its first argument, the second argument is a **callbackFn()** called `reviver`

Use the decode() function of the `he` package to decode HTML entities of `values` of typeof `string`

```javascript
import he from "he";

function decodeHtmlEntity(jsonData) {
  const decodedData = JSON.parse(jsonData, (key, value) => {
    if (typeof value === "string") {
      return he.decode(value);
    }
    return value;
  });
  return decodedData;
}
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#### Improvements
- Decoupling
