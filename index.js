const fs = require("fs");
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter your name!");
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
          console.log("Enter your GitHub Username!");
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
          console.log("Enter your Project Title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "image",
      message: "Enter the URL to your Project Screenshot: (Required)",
      validate: (imageInput) => {
        if (imageInput) {
          return true;
        } else {
          console.log("Enter your Project Screenshot URL!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter your projects description: (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Enter your project's description!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmInstall",
      message: "Does your project require installation?",
      default: true,
    },
    {
      type: "input",
      name: "install",
      message: "Provide installation direction:",
      when: ({ confirmInstall }) => {
        if (confirmInstall) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmUsage",
      message: "Does your project need instructions/examples of use?",
      default: true,
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions/examples here:",
      when: ({ confirmUsage }) => {
        if (confirmUsage) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmCredits",
      message: "Does your project need a list of any additional credits?",
      default: true,
    },
    {
      type: "input",
      name: "credits",
      message: "Provide additional Credits here:",
      when: ({ confirmCredits }) => {
        if (confirmCredits) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Do you wish to include a license?",
      default: true,
    },
    {
      type: "input",
      name: "license",
      message: "Provide license here:",
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmBadge",
      message: "Do you wish to include a badge?",
      default: true,
    },
    {
      type: "input",
      name: "badge",
      message: "Provide badge here:",
      when: ({ confirmBadge }) => {
        if (confirmBadge) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmFeatures",
      message:
        "Does your project have any special features you'd like to include?",
      default: true,
    },
    {
      type: "input",
      name: "feature",
      message: "Provide feature(s) here:",
      when: ({ confirmFeature }) => {
        if (confirmFeature) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message: "Does your project require further contribution?",
      default: false,
    },
    {
      type: "input",
      name: "contribute",
      message: "Provide details on how to contribute to your project here:",
      when: ({ confrimContribute }) => {
        if (confrimContribute) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTest",
      message: "Do you want to include tests?",
      default: false,
    },
    {
      type: "input",
      name: "test",
      message: "Include your application tests here:",
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};
