<h1 align="center">YELP App</h1>

## Overview

<img src="src/assets/yelpapp.gif" height="500">

### Built With

- [React-native](https://reactnative.dev/)


## Features

This app comprises use of Stack Navigation and RESTFUL Web APIs

- User can either scroll or type letters into search bar to choose a city. 
- When the user finds the desired city and taps on it, a new page opens showing a list of restaurants in chosen city. Information here comprises an image and the name of the restaurants. Since the API source does not offer different images, only a default graphical was used all through the app.
- The user either scrolls or types letters to search bar to choose a restaurant. 
- When the user taps on the image of the chosen restaurent, a new page showing the detailed information of the restaurant opens. 

## How To Use

To use this application, the packages for navigation and for APIs (axios) should be installed prior to running the app. From your command line:

```
npm install @react-navigation/native

For expo :
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
For bare React-native:
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

For IOS:
npx pod-install ios

npm install @react-navigation/stack


npm install axios

```
