# NLW-Return
This is a full stack project which consists of a screen widget that allows the user to submit some sort of feedback.
It utilizes concepts such as user accessibility, mailing services, unit testing and more.

## Stack used
- [TypeScript](https://www.typescriptlang.org/)

### Frontend:
- [ReactJS](https://reactjs.org/) with [vite](https://vitejs.dev/)
- [tailwindcss](https://tailwindcss.com/)

### Mobile:
This project was developed using [Expo](https://expo.io/); hence, it is recommended to download the expo  app on your mobile device
- [React-Native](https://reactnative.dev/)
- [Styled Components](https://styled-components.com/)

### Backend:
- [NodeJS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/) - ORM
- [Jest](https://jestjs.io/docs/getting-started) - unit testing

## How to start this project?
- **1. clone this repository:** 
   - if you are using https: `git clone https://github.com/bbcvasconcellos/NLW-Return.git` 
- **2. Starting the frontend:**
   - cd frontend 
   - download the dependencies: `npm i` or `yarn`
   - to start run: `npm run dev` or `yarn dev`
   - set the .env file url with VITE_API_URL={your url} 
- **3. Starting the backend:**
  - cd backend 
  - download the dependencies: `npm i` or `yarn`
  - to start run: `npm run dev` or `yarn dev`
  - to run the unit tests: `npm run test` or `yarn test` 
- **4. Starting the mobile application:**
  - cd mobile
  - download the dependencies: `npm i` or `yarn`
  - to start run: `expo start`
