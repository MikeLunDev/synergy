#Xriba Search UI



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run dev`

Runs the app in the development (embedded) mode.<br />
Watch files through webpack and servers the files on [http://localhost:3336](http://localhost:3336).
You should set the usersecret in Bookeeping to switch from dev to local files using this command:

`dotnet usersecrets set CustomerSupplier:FeatureToggle:Url http://127.0.0.1:3336`

or setting the variable directly in the secrets.json file to this:

`"CustomerSupplier:FeatureToggle:Url":"http://127.0.0.1:3336"`

If you want to go back to the dev enviroment you need to delete this usersecret by running this command or removing it from the secrets.json file.

`dotnet usersecrets rm CustomerSupplier:FeatureToggle:Url`