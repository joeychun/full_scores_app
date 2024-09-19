# full_scores_app

## Overview
The **Scores App** is a prototype website designed to track school soccer game scores and events. Developed at the request of the Tiger Sports Council.

## Pages

### /soccer
Displays a summary of all soccer games in the left box. Each entry includes key details such as teams, score, and game status (e.g., Full Time). 

![Soccer Summary](https://drive.google.com/file/d/1cMTTpLI7uqQfR6eTw986gXrKmURX_6o6/view?usp=drive_link)

Clicking on a game entry will navigate to the detailed view of that specific soccer game (/soccer/[id]).

### /soccer/[id]
Shows detailed information for a specific soccer game. While the left box continues to show the summary of all soccer games, the other sections display the current score, team rosters, and significant events like goals or yellow/red cards.

![Soccer Details](https://drive.google.com/file/d/1VNGeVhM8UA4T0fSKC-ZG06dHbKXV2-AU/view?usp=drive_link)

(Note: All game information is modifiable via the Firebase website, providing real-time updates to the website.)

## Implementation
The frontend is built with ReactJS, and the backend utilizes Firestore Database to provide real-time updates on game data.

## Running Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) in your browser to view it.\
The page will automatically reload when you make changes. Any lint errors will also be displayed in the console.

### `npm install`
Installs the necessary dependencies for the project. Run this command after cloning the repository to set up your local development environment.

## Room for Further Development
- Expand to support additional sports.
- Implement features allowing sports managers to update the database and game progress real-time.
