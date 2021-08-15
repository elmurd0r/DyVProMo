# DyVProMo

DyVProMo is a process model viewer tool where you can upload a BPMN 2.0 XML file, view it and change the level of detail.

## Development Requirements
- Node >= 10.16 and npm >= 5.6 

## Start

Run `npm start` in root directory to start development server. Server will run on localhost:3000. 
The page will automatically reload if you make changes to the code.
You can find more details here: https://github.com/facebook/create-react-app.


## Dependencies

- React (Frontend)
- Bootstrap (Styling)
- Sass (Styling)
- Bpmn.io (BPMN Framework)
- react-icons (Icons)
- react-dropzone (Drag & Drop)

Look at package.json for a detailed list with version numbers.

## Misc

- This work only uses React hooks and **no** full React.Components.
- It was set up with the tool create-react-app. The tool creates a Node.js Server and all dependencies are defined in the package.json file.
- The index.js file is the start point for the React application which injects the 'RootComponent.js' in the index.html.
- You can auto-format the source code with the command `npx prettier --write .` in the root directory (. is the directory where you want to apply auto-formatting). 
Associated files are .prettierignore and .prettierrc.json.
- At the time of development, there was only a beta version of bootstrap 5 available. Make sure to use a proper release version once it is released.
