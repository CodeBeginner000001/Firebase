# Firebase and Webpack Setup

<p align="center">
  <img src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png" alt="Google Firebase Logo" />
</p>

Firebase is a platform that provides Backend-as-a-Service (BaaS), enabling developers to build applications without managing backend infrastructure. It offers services like real-time databases, user authentication, cloud storage, and hosting. Below are some key benefits of using Firebase:

1. Firebase provides backend services such as databases, authentication, cloud storage, hosting, and more.
2. It handles server-side logic and takes care of heavy lifting.
3. Firebase 9 optimizes for smaller file sizes and faster web applications.
4. It includes a modular API surface to enable tree-shaking, removing unused code to make the app as fast and small as possible.

---

## Table of Contents

- [Installation](#installation)
- [Webpack Configuration](#webpack-configuration)
- [Project Structure](#project-structure)
- [Node Modules Installation](#node-modules-installation)
- [Firebase Features](#firebase-features)
  - [Realtime Collection of Data](#realtime-collection-of-data)
  - [Firebase Queries](#firebase-queries)
  - [Ordering Data and Timestamps](#ordering-data-and-timestamps)
  - [Fetching Single Document](#fetching-single-document)
  - [Setting up Firebase Auth](#setting-up-firebase-auth)
  - [Login and Logout](#login-and-logout)
  - [Subscribing and Unsubscribing](#subscribing-and-unsubscribing)
- [Net Ninja Firebase Playlist](#net-ninja-firebase-playlist)

---

## Installation

1. First, install the necessary dependencies for Firebase and Webpack:

    ```bash
    npm install firebase
    npm install webpack webpack-cli --save-dev
    ```

2. After installing the dependencies, you can proceed to configure Webpack to bundle your JavaScript files as shown in the next section.

---

## Webpack Configuration

Webpack is a tool used to bundle JavaScript and other assets in the project. The following is a basic Webpack configuration file (`webpack.config.js`) to bundle the `src/index.js` file and output it into the `dist` folder.

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};
```

### How to Generate the Bundle

- The `entry` specifies the starting point for bundling (`src/index.js`).
- The `output` determines the location and file name for the bundle (`dist/bundle.js`).
- Use the command `npm run build` or `npx webpack` to generate the `bundle.js` file in the `dist` folder.

---

## Project Structure

Each lesson (from Lesson 2 to Lesson 15) is organized in a folder with the following structure:

```
Lesson-2/
  ├── dist/
  │   ├── bundle.js
  │   └── index.html
  ├── node_modules/
  ├── src/
  │   └── index.js
  ├── webpack.config.js
  ├── package.json
  └── package-lock.json
```

- **dist**: Contains the `bundle.js` (compiled JavaScript) and `index.html` (main HTML file).
- **node_modules**: Stores the project’s dependencies.
- **src**: Contains the source code (`index.js`), which is bundled using Webpack.
- **webpack.config.js**: Webpack configuration file.
- **package.json** and **package-lock.json**: Manage project dependencies and versions.

---

## Node Modules Installation

To install node modules in any lesson folder:

```bash
npm install
```

This command installs the dependencies listed in the `package.json` file for that specific lesson.

---

## Firebase Features

### Realtime Collection of Data

Firebase allows real-time syncing and retrieving of data from the Firestore database. Any changes in the database are immediately reflected on the client side.

### Firebase Queries

Firebase allows the creation of complex queries to fetch specific data, enabling efficient data filtering and sorting.

### Ordering Data and Timestamps

Firebase allows data to be ordered based on specific fields, and automatically adds timestamps to track when data is created or modified.

### Fetching Single Document

You can fetch an individual document from Firestore by referencing the document’s ID, which allows fast access to specific records.

### Setting up Firebase Auth

Firebase Authentication enables developers to easily add authentication to their applications, supporting email/password as well as third-party providers like Google and Facebook.

### Login and Logout

Firebase provides methods to log in and log out users, simplifying user management.

### Subscribing and Unsubscribing

Firebase allows you to subscribe to real-time updates from Firestore collections and documents, and you can unsubscribe when these updates are no longer needed.

---

## Net Ninja Firebase Playlist

For more comprehensive lessons on Firebase, check out the [Net Ninja Firebase Playlist](https://youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&si=gyTgNXe83OM781v7).

This series covers everything from setting up Firebase to advanced functionalities such as:

- Realtime data synchronization
- Complex querying
- Authentication and user management
- Subscription to real-time data

---

Now the Table of Contents links directly to sections of the README file.
