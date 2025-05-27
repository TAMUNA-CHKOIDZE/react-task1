# react-task1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🧩 About

This is a responsive form built with **React**, demonstrating how to manage complex form data using `useState`.  
It includes input fields like text, number, checkbox, radio buttons, select dropdown, and textarea.  
The form validates required fields on submission, and displays the submitted data as formatted JSON.  
The app also includes a reset functionality and responsive layout using custom CSS.

🔗 **Live Demo**: [https://tamuna-chkoidze.github.io/react-task1](https://tamuna-chkoidze.github.io/react-task1)

---

## 📸 Features

- Controlled form inputs (text, number, checkbox, radio, select, textarea)
- Form validation before submission
- Displays submitted data as JSON
- Reset button to clear form and result
- Responsive layout and custom styling with CSS
- Accessibility features (labels associated with inputs)

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Builds the app and deploys it to GitHub Pages.

---

## 🚀 Deployment

To deploy this project to **GitHub Pages**, follow these steps:

1. Install `gh-pages` as a dev dependency:

   ```bash
   npm install gh-pages --save-dev

   ```

2. Add the following lines to your package.json:
   "homepage": "https://tamuna-chkoidze.github.io/react-task1",
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   }

3. Deploy your app by running:

   ```bash
   npm run deploy



   Once deployed, your app will be available at:
   👉 https://tamuna-chkoidze.github.io/react-task1
   ```



🛠 Technologies Used:
React (with Hooks)
JavaScript (ES6+)
CSS (custom and responsive)
Git & GitHub Pages
