# lesson-API-experiements
Proof-of-concept and experimentation of the Code Companion lesson module API.

## Usage
To use it, execute `npm install` and `npm run compile` to build it, then `node build/main.js` to run.

The lesson will prompt you to create a file, and write contents to it. Put the file in the `files` folder (on the same level as the `build` folder.

## Technical
This lesson works by watching the `files` folder for changes. When a change occurs, it checks for the necessary conditions. The slide that is presented depends on the conditions that have been met. To test this, undo a change that was previously made, and the previous slide will be shown.

The `main.js` program creates an agent that is passed to `lesson.js`. This provides safe and limited access to the file system (in the real application, the lesson module would be sandboxed) and the slide presentation screen. The lesson module is free to time and order slides according to the lesson developer's wishes.
