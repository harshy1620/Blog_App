# Blog App

A blog app with all the CRUD operations using MERN stack and Material UI.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Snapshots of Project](#snapshots-of-project)

## Features

- Login and signup functionality
- User can see all users blogs
- User can see his/her particular blog with posted time and name
- User can delete the blog
- User can add a new blog with image address(adding image is not mandatory),default image will be added to the blog
- User can update the blog
- User can see details view of a particular blog
- User-friendly interface with clear error handling and proper notification(using react-toastify)
- Material UI libraray used to make the UI of this project
- Responsive interface

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harshy1620/Blog_App

   ```

2. Change into the project directory:

- cd .\Blog_App\

3. Install dependencies:

- npm install

4. Open a new terminal and change your repository to client directory:

- cd client

5. Install dependencies:

- npm install

## Environment Variables

Create a .env file in the root folder and add the following variables:

- PORT=8080
- MONGO_URI
- Replace "MONGO_URI" with your MongoDB URI.
- Or you can use my sample data using my MONGO_URI = "mongodb+srv://harshyadav6642:harshyadav6642@blog-app.b3rr7f4.mongodb.net/blog-app"

## Usage

- After setting up the environment variables, you can run the application:

1. Start the server by running the following command in the root foler:

- npm start
- The server will listen on the port 8080

2. Start the client by running the following command in the client folder:

- npm start
- Visit http://localhost:3000 in your browser to view the app.

## Snapshots of Project
1.Registration Page ![Registration Page](https://github.com/harshy1620/Blog_App/blob/main/Register.png)
2.Login Page ![Login Page](https://github.com/harshy1620/Blog_App/blob/main/Login.png)
3.Home Page ![Home Page](https://github.com/harshy1620/Blog_App/blob/main/Home-Page.png)
4.Blog Details Page ![Blog Details Page](https://github.com/harshy1620/Blog_App/blob/main/Blog-Details.png)
5.My Blogs Page ![My Blogs Page](https://github.com/harshy1620/Blog_App/blob/main/My-Blogs.png)
6.Create A Blog Page ![Create A Blog Page](https://github.com/harshy1620/Blog_App/blob/main/Create-A-Blog.png)
