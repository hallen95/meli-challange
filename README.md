# MELI Project

This repository contains the code for both the frontend (client) and backend (server) of the MELI project. Below are the instructions to get both parts up and running on your local machine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, you need to have Node.js and npm (Node Package Manager) installed on your computer. You can download and install them from nodejs.org.

# Starting the Server

Navigate to the Server Directory:

`cd server`

Install Dependencies:

`npm install`

Start the Server:

`node index.js`

This will start the backend server on http://localhost:8080 (or another port if configured).

# Starting the Client

Open a New Terminal and Navigate to the Client Directory:

`cd client`

Install Dependencies:

`npm install`

Run the Client:

`npm start`

This will start the React development server and open the client application in your default web browser. The client is set to interact with the backend running on http://localhost:8080.

## Navigating the Application

Once both the server and client are running, you can navigate through the application using your web browser at http://localhost:8080 for the backend APIs and the frontend interface at http://localhost:3000 or another port that your terminal indicates the frontend has started on.

## Additional Information

### Environment Variables:

Make sure to set up necessary environment variables in .env files located in your server and client directories if the application requires them.

### API Documentation:

For detailed information about the backend API, see the [API Documentation](server/readme.md).

Support
For support, contact [brian.desarrolloweb@gmail.com].
