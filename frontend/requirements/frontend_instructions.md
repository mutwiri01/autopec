#project overview frontend
use this guide to upgrade the project to be able to create a dialog box where use describe their car problem and ai will give them a diagnosis and a list of parts that are needed to fix the car

#features
we are currently on vite react project
- the dialog box has a form with the following fields:
  - car make
  - car model
  - car year
  - car problem description
  - a submit button
  - a cancel button

it should be in the problem description page
the dialog box should use ai to give the user a diagnosis and a list of parts that are needed to fix the car problem
it should then be able to book the car repair service for the user
also creating a new page for the booking confirmation

#current front end structure
frontend
└── src
    ├── components
    │   ├── Cars
    │   │   ├── CarsCard.jsx
    │   │   ├── OurCars.jsx
    │   │   ├── ProblemDescription.jsx
    │   │   └── ServiceCard.jsx
    │   ├── css
    │   ├── Home
    │   ├── Services
    │   ├── Footer.jsx
    │   └── Navbar.jsx
    ├── pages
    │   └── App.jsx
    ├── index.css
    └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js





