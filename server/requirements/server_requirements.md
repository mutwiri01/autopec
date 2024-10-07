#project overview server
this server file is for the backend of the autopec project
it is a node.js project that uses express and mongoose
it is the server for the autopec project

the following functions are to be done in the backend
- handle booking from the frontend to the backend
- handle the ai diagnosis from the frontend to the backend
- handle the booking confirmation from the frontend to the backend
- create routes for the frontend to use
- create a database for the backend to use
- create a server for the backend to use

#file structure
server
├── config
│   └── .env
├── db.js
├── node_modules
├── requirements
│   └── server_requirements.md
├── package-lock.json
├── package.json
└── server.js

#dependancies are
 express mongoose cors nodemon

use this format for the server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

and define the routes in the server.js file
and also create models in the models folder
and create controllers in the controllers folder
and create routes in the routes folder

