# Getting Started 

Clone the project and open your Terminal. 

# Pre-requisites 
Install [Node JS](https://nodejs.org/en/download/package-manager)

# Setting up the project and installing dependencies

1.	Create a folder for your project and follow the command to create a package.json file.

`npm init`

2.  Install Cypress

`npm install cypress --save-dev`

3.  Open the Project and follow all the instructions

`npx cypress open`

5.  After performing the above installations, close the Cypress app to let us edit the scripts section in the package.json file.

`"scripts": {
    "cy:open": "cypress open"
  }`

6.  Open again Cypress with 

`npm run cy:open`

 - To run the Cypress test run the following command: npx cypress run