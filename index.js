const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
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
    // {
    //   type: "list",
    //   name: "tableOfContents",
    //   message: "Do you wish to include a table of contents",
    //   choices: ["Yes", "No"],
    //   validate: (tableOfContents) => {
    //     if (tableOfContents.value === "Yes") {
    //       console.log("Great");
    //     }
    //   },
    // },
    // Table of Contents START
    {
      type: "input",
      name: "tocInstall",
      message:
        "Enter 'Installation' to add Installation to your Table of Contents: (Required)",
      validate: (tocInstallInput) => {
        if (tocInstallInput) {
          return true;
        } else {
          console.log("Type 'Installation' for your Table of Contents!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tocUsage",
      message:
        "Enter 'Usage' to add Usage to your Table of Contents: (Required)",
      validate: (tocUsageInput) => {
        if (tocUsageInput) {
          return true;
        } else {
          console.log("Enter 'Usage' for your Table of Contents!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tocCredit",
      message:
        "Enter 'Credits' to add Credits to your Table of Contents: (Required)",
      validate: (tocCreditInput) => {
        if (tocCreditInput) {
          return true;
        } else {
          console.log("Enter Credits!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tocLicense",
      message:
        "Enter 'License' to add License to your Table of Contents: (Required)",
      validate: (tocLicenseInput) => {
        if (tocLicenseInput) {
          return true;
        } else {
          console.log("Enter License!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tocBadge",
      message:
        "Enter 'Badge' to add Badge to your Table of Contents: (Required)",
      validate: (tocBadge) => {
        if (tocBadge) {
          return true;
        } else {
          console.log("Enter Badge!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tocFeature",
      message:
        "Enter 'Features' to add Features to your Table of Contents: (Required)",
      validate: (tocFeature) => {
        if (tocFeature) {
          return true;
        } else {
          console.log("Enter Features!");
          return false;
        }
      },
    },
    // Table of Contents END
    {
      type: "input",
      name: "install",
      message: "Provide installation direction: (Required)",
      validate: (installInput) => {
        if (installInput) {
          return true;
        } else {
          console.log("Provide installation directions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions/examples here: (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Provide instructions/examples here!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "credits",
      message: "Provide additional Credits here: (Required)",
      validate: (creditsInput) => {
        if (creditsInput) {
          return true;
        } else {
          console.log("Provide Cedits here!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "license",
      message: "Provide license here: (Required)",
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Provide License here!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "badge",
      message: "Provide badge here: (Required)",
      validate: (badgeInput) => {
        if (badgeInput) {
          return true;
        } else {
          console.log("Provide your Badge link here!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "feature",
      message: "Provide feature(s) here: (Required)",
      validate: (featureInput) => {
        if (featureInput) {
          return true;
        } else {
          console.log("Provide features about your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contribute",
      message:
        "Provide details on how to contribute to your project here: (Required)",
      validate: (contributeInput) => {
        if (contributeInput) {
          return true;
        } else {
          console.log(
            "Tell people how to contribute to your project or enter N/A!"
          );
          return false;
        }
      },
    },
    // {
    //   type: "confirm",
    //   name: "confirmTest",
    //   message: "Do you want to include tests?",
    //   default: false,
    // },
    // {
    //   type: "input",
    //   name: "test",
    //   message: "Include your application tests here:",
    //   when: ({ confirmTest }) => {
    //     if (confirmTest) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   },
    // },
  ])
  .then(function (data) {
    console.log(data);

    const mdData = `
      \r\n# ${data.title}
      \r\n
      \r\n## By: ${data.name}
      \r\n
      \r\n## GitHub Username: ${data.github}
      \r\n
      \r\n## Screenshot
      \r\n
      \r\n<img src="${data.image}" alt="Project screenshot" />
      \r\n
      \r\n## Description
      \r\n
      \r\n${data.description}
      \r\n
      \r\n## Table of Contents
      \r\n
      \r\n[${data.tocInstall}](#installation)
      \r\n[${data.tocUsage}](#usage)
      \r\n[${data.tocCredit}](#credits)
      \r\n[${data.tocLicense}](#license)
      \r\n[${data.tocBadge}](#badge)
      \r\n[${data.tocFeature}](#features)
      \r\n
      \r\n## Installation
      \r\n
      \r\n${data.install}
      \r\n
      \r\n## Usage
      \r\n
      \r\n${data.usage}
      \r\n
      \r\n## Credits
      \r\n
      \r\n${data.credits}
      \r\n
      \r\n## License
      \r\n${data.license}
      \r\n
      \r\n## Badge
      \r\n${data.badge}
      \r\n
      \r\n## Features
      \r\n${data.feature}
      \r\n
      \r\n## Contribute
      \r\n${data.contribute}
      \r\n
      \r\n©${new Date().getFullYear()}. All Rights Reserved.
    `;

    fs.writeFile("ReadMe.md", mdData, (error) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log("Readme created successfully!");
      }
    });
  });
