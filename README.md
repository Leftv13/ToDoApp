# To do App (TodoApp)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-%3E%3D4.17.1-blue.svg)](https://expressjs.com/)

> A simple app to manage your daily tasks and chores.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

1. ## Description


> This is a practical & easy to use ToDo list app that includes a functional Login and Register, which saves your chores or tasks even if you logout. Has a functional database using MongoDB Atlas.

2. ## Features

- **ToDo CRUD:** Allows creating, reading, updating, and deleting tasks.
- **Functional SignUp:** Allows an easy access for the user to create an account.
- **Functional Login:** Allows the user to login using his credentials previously saved.
- **Password Encryption :** Safely stores your password using Bcrypt.

3. ## Requirements

- [Node.js](https://nodejs.org/) (version >= 14.0.0 recommended)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)


4. ## Installation

Follow these steps to clone our repository:

1.  **Clone the repository:**
    ```bash
    git clone [repository URL here]
    cd [repository name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

5. ## Usage


1.  **Run the server:**
    ```bash
    npm run start # PROD
    npm run dev   # DEV
    ```
    

6.  **Endpoints:**

    - **`LOCAL_URL(e.g: `http://127.0.0.1:3000` or `http://localhost:3000`)/`**: Displays the home page.
    - **`LOCAL_URL/login`**: Displays the login view. 
    - **`LOCAL_URL/signup`**: Displays the sign up view. 
    - **`LOCAL_URL/todos`**: Displays the ToDo list app view. 
    - **`LOCAL_URL/verify/:id/token`**: Displays the verification view. 
   
7.  **Project Structure**
 ```
├── controllers/ # Brain of the project, CRUD methods
│   ├── login.js
│   ├── logout.js
│   ├── todos.js
│   └── users.js        
├── img/ # Contains all the project images
│   ├── signup.svg          
│   └── undraw_signup_image.svg    
├── models/ # Database logic
│   ├── todo.js          
│   └── user.js
├── views/ # Styles & FrontEnd logic
│   ├── components/           
│   │      └── nav.js
│   │      └── notification.js
│   ├── home/           
│   │      └── index.html
│   ├── login/
│   │      └── index.html
│   │      └── index.js
│   ├── signup/           
│   │      └── index.html
│   │      └── index.js
│   ├── styles/           
│   │      └── output.css
│   ├── todos/           
│   │      └── index.html
│   │      └── index.js
│   ├── verify/           
│   │      └── index.html
│   └──    └── index.js
├── .gitignore               
├── app.js
├── config.js
├── index.js
├── input.js
├── package-lock.json
├── package.json
├── config.js
├── README.md
└── tailwind.config.js
 ```
8. ## Contributing

> Contributions are welcome. Please follow these steps:
>
> 1.  Fork the repository.
> 2.  Create a new branch with your feature or fix (`git checkout -b feature/new-feature`).
> 3.  Commit your changes (`git commit -m 'Add new feature'`).
> 4.  Push to the branch (`git push origin feature/new-feature`).
> 5.  Create a Pull Request to the `main` branch of this repository.

9. ## License



```

MIT License

Copyright (c) [2025] [Andres Abreu, Abigail Araujo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

10. ## Authors

> [Andres Abreu] ([Leftv13](https://github.com/leftv13))
> [Abigail Araujo] ([Abigail-Araujo](https://github.com/Abigail-Araujo)))

