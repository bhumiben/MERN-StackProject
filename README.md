# Friendsbook - A Social Media Platform

Friendsbook is a MERN stack social media application that allows users to connect with friends, share thoughts, and explore posts created by others. This README provides an overview of the project, installation instructions, API documentation, and more.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Documentation](#api-documentation)


## Project Overview

Friendsbook is a social media platform where users can sign up, create posts, update their profiles. The application features user authentication, profile customization, and post creation/editing functionality.

## Features

- User authentication (signup, signin)
- Social login with Google
- Create, edit, and delete posts
- Profile customization (update username, email, password)
- Upload and update profile photo
- View all posts and navigate to individual post pages

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Firebase Authentication
- JSON Web Token (JWT)

  ## Installation

1. Clone the repository:

   git clone https://github.com/bhumiben/final-project.git

   1. Navigate to the project directory: cd FINAL-PROJECT2

   3. Install dependencies for the API: cd API
   npm install 

   4. Install dependencies for the client: cd client
   npm install

   5. set up Firebase credentials

   6. Configure environment variables

   7. Run the API server:
      cd ../api
      npm start

   8. Run the client application:
     cd ../client
     npm start

## API Documentation
     1. Authentication API
       A) Register User
       Endpoint: /api/auth/signup
        Method: POST
        Description: Register a new user.

        B) Login User
        Endpoint: /api/auth/signin
        Method: POST
        Description: Log in an existing user.

        C) Google Authentication
        Endpoint: /api/auth/google
        Method: POST
        Description: Authenticate user using Google.
        
        D) Sign Out
        Endpoint: /api/auth/signout
        Method: GET
        Description: Sign out the authenticated user.

     2. User API
        
     A) Test Route
        Endpoint: /api/user/test
        Method: GET
        Description: Test route for user API.
     
     B) Update User Profile
        Endpoint: /api/user/update/:id
        Method: POST
        Description: Update user profile information.
        Parameters:
        id: User ID
     
     C) Delete User
        Endpoint: /api/user/delete/:id
        Method: DELETE
        Description: Delete a user.
        Parameters:
        id: User ID
     
     D) Get User Postings
        Endpoint: /api/user/postings/:id
        Method: GET
        Description: Get postings of a specific user.
        Parameters:
        id: User ID

3. Posting API

    A)Create a Post
      Endpoint: /api/posting/create
      Method: POST
      Description: Create a new post.
      Authentication: Requires a valid token.

   B)Delete a Post
     Endpoint: /api/posting/delete/:id
     Method: DELETE
     Description: Delete a post.
     Authentication: Requires a valid token.
     Parameters:
     id: Post ID

   C) Update a post
      Endpoint: /api/posting/update/:id
      Method: POST
      Description: Update a post.
      Authentication: Requires a valid token.
      Parameters:
      id: Post ID

   D) Get a Single Post
      Endpoint: /api/posting/get/:id
      Method: GET
      Description: Get details of a single post.
      Parameters:
      id: Post ID
