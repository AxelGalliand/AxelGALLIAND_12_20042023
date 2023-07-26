
## Installation guide for the application SportSee:

## 1. Prerequisites

- [NodesJS (**vestion 12.18**)] (https://nodejs.org/en/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.


## 2.BACK-END Part

- Fork the repository at this adress https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard/tree/master
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the micro API.

## 3.FRONT-END Part

- Fork the repository at this adress https://github.com/AxelGalliand/AxelGALLIAND_12_20042023/
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm run dev` command will run the code

## 4. Endpoints

### 4.1 Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 4.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.