# ENGG4930C(SIGHT) ForeSee API

HKUST Spring 2020, Hong Kong Eye Health Tracking Application

## Introduction

ForeSee is an application for tracking of eye health metrics such as myopia. This repository contains the mobile application of the project which is written with [React Native](https://reactnative.dev/).

## Getting Started
1. Install React Native, you can follow [this](https://reactnative.dev/docs/getting-started) documentation.
2. Install **npm**, which is a part of Node.js, by following the [documentation](https://www.npmjs.com/get-npm).
3. `cd` into `ENGG4930C-ForeSee-mobile` and run `npm install`.
4. `cd` into `ios` and run `pod install`.
5. Go back to root of `ENGG4930C-ForeSee-mobile` and run `reac-native run-ios`. The application should start in an iOS emulator.

<img src="https://github.com/DoguD/ENGG4930C-ForeSee-mobile/blob/master/github-src/loginScreen.png" 
alt="Login Screen Screenshot" width="200" height="430" border="10" />

## Next Steps
If you want to run your version of the **ForeSee** with a different database you should follow the steps below.
1. Follow the instructions on [ForeSee Database Getting Started](https://github.com/sight-hkust/ENGG4930C-ForeSee-database#getting-started) and [ForeSee API Getting Started](https://github.com/sight-hkust/ENGG4930C-ForeSee-api#getting-started)
2. Replace `/App.js` line 28 with the URL that you have got after setting up the API.
```javascript
global.apiUrl = '<INSERT_YOUR_API_URL_HERE>';
```
