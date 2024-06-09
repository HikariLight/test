# template-ts
Template typescript project
My solution for GEHC Technical test.
Implemented in vanilla Typescript and Tailwind CSS.
[Live link](https://gehc.dhia.dev/)

### Implemented functionalities
- ~~Part A~~  (Done)
    - Watch logic / View
    - Mode / Increase / Light buttons
- ~~Part B~~ (Done)
    - Dynamic creation of watches with timezones
    - Multiple watches view
    - Time format toggling (24h / 12h)

### Implementation walkthrough
Design patterns used: MVC, State, Command, Singleton.
- Overall architecture follows the MVC model. 
- The model is a Singleton to allow for a single source of truth.
- The model also is a Subject in the Observer design pattern, whereas the View is an observer, in order to be notified of data changes.
- The model utilizes the State design pattern in order to alter "increase" behavior depending on the Watch mode.
- View presents the data on a webpage and captures user events, calls for the controller, which in turn updates the model, which updates the view through the Observer pattern.

### Possible improvements
- Multiple views, one for the web and one for the console. Could be implemented using *Factory* design pattern.
- Implementation of the *Command* design pattern to allow for Undo/Redo functionality.

### Class diagram
![Class diagram](./class_diagram.png)

### Execution
```javascript
npm install
npm run build
npm run start
```