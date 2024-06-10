# GEHC Watch App
My solution for GEHC Technical test.  
Implemented in vanilla Typescript.  
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
Design patterns used: MVC, State, Observer, Singleton.
- Overall architecture follows the MVC model. 
- The model is a Singleton to allow for a single source of truth.
- The model also is a Subject in the Observer design pattern, whereas the View is an observer, in order to be notified of data changes.
- The model utilizes the State design pattern in order to alter "increase" behavior depending on the Watch mode.
- View presents the data on a webpage and captures user events, calls for the controller, which in turn updates the model, which updates the view through the Observer pattern.

### Possible improvements
- **Multiple views**: one for the web and one for the console. Could be implemented using *Factory* design pattern.
    - Technically we could also refactor the watch creation logic using Factory but I've decided against adding extra complexity given that the implementation doesn't need it. (The only difference between watches is the timezone attribute).
- **Undo/Redo**: through a more general implementation of the *Command* design pattern.
    - Technically we could also use the Command pattern to for the reset functionality, but to avoid unnecessary complexity I decided against its inclusion. A version that does implement it however is on the "command" branch.
- Unit testing

### Class diagram
![Class diagram](./class_diagram.png)

### Execution
```javascript
npm install
npm run build
npm run start
```
