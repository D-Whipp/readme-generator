// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username: (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "Enter your Project Title: (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your Project Title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description: (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your Project's Description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "How is your project installed? (Required)",
      validate: (installInput) => {
        if (installInput) {
          return true;
        } else {
          console.log("Please explain how your project is installed!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How is your project used? (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Explain how your project is used: (Required)");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmCredits",
      message: "Are there Credits you'd like to include?",
      default: true,
    },
    {
      type: "input",
      name: "credits",
      message: "Include credits here:",
      when: ({ confirmCredits }) => confirmCredits,
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Would you like to include a license?",
      default: false,
    },
    {
      type: "input",
      name: "license",
      message: "Include license(s) here:",
      when: ({ confirmLicense }) => confirmLicense,
    },
    {
      type: "confirm",
      name: "confirmBadge",
      message: "Would you like to include a badge?",
      default: false,
    },
    {
      type: "input",
      name: "badge",
      message: "Include badge(s) here:",
      when: ({ confirmBadge }) => confirmBadge,
    },
  ]);
};

promptQuestions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
