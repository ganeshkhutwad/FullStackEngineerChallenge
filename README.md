# Employee Peformance Evaluation

Employee Peformance Evaluation is a single page CRUD application that allows employees to submit feedback toward each other's performance review.

# Features!

  - Get Employees list.
  - Add Employee
  - View Employee Deails with its feedbacks
  - Employee can add reviews for other employee.

### Tech

This project uses a number of open source projects to work properly:

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [VSCode Editor](https://code.visualstudio.com/) - awesome text editor.
* [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps.
* [Material-UI](https://material-ui.com/) - The world's most popular React UI framework.
* [Node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js web framework for Node.js
* [Webpack](https://webpack.js.org/) - static module bundler for modern JavaScript applications.
* [Mongodb](https://www.mongodb.com/) - NoSQL Database.

### Browsers Support
  - Tested on Chrome, Mozilla Firefox, and Microsoft Edge Browsers.

### Installation

It requires [Node.js](https://nodejs.org/en/) v8+ to run.
It requires [Mongodb]

### MongoDB Setup
 - Install Mongodb
 - Start mongod server.
 - Create `emp_feedback` database
 - This database will have `employees` and `review_metrics` collection.
 - Create `admin` user using mongodb query manually.
<pre><code>db.employees.insertOne({firstName: "Yamini", lastName: "Patil", email: "ypatil@paypay.com", role: "admin", isActive: true, permissions: [{_id: "emp", title: "Employee Management", description: "Manage Employees"}, {_id: "perfReview", title: "Performance Review", description: "View and Update Performance Reviews."}]})</code></pre>
 - Add fixed questions into `review_metrics` collection.
<pre><code>db.review_metrics.insertMany([{name: "Overall Performance"}, {name: "Goals Achieved"}, {name: "Improvement"}, {name: "Core Values"}])</code></pre>

### Steps to run the application.
 - Clone project
```sh
$ cd FullStackEngineerChallenge
$ npm install or yarn install
$ npm run start or yarn start
```
 - Use email as y
### Folder Structure

    .

    ├── src                       # Source files, It contains client as well as server files.
          ├── client              # Client Files.
                ├── __test__      # It contains all unit test cases.
                ├── Actions       # It contains action creators.
                ├── Components    # Folder for Presentational/Dumb Components.
                ├── Containers    # Container/Smart Components.
                ├── Reducers      # Reducers to get new state based on action.
                ├── Store         # Setup application store.
                └── index.js      # Entry point for application.

          ├── server              # Server Files.
                ├── index.js      # Used Built-in middlewares and create HTTP server and run it.
                └── routes        # All routes/REST APIs maintained here.
    └── README.md                 # Guidelines for application setup and details.

