# Team Profile Generator
![GitHub license](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Description

This project is a simple, but helpful Node.js application that allows the user to create an HTML page capable of managing employees in a Web Devlopment team. The application can be run from the command line and asks questions about each member on the team in relation to the Managers, Engineers, and Interns involved in the team. Once all questions pertaining to the employees are answered, the application generates an HTML file that can be run in the web browser. It gives easy access to information about each employee, including their Github profile, attending school, and their email for managing all members of the team.

## Installation

To install the project, use must have Node.js installed onto your computer. Instructions on how to install can be found at https://nodejs.org/en/. 

After node has been successfully installed onto your computer, open the command line and use the 'cd' command to navigate to where you would like to install the project. Finally, to install, type in the command below to download the necessary files to run the project. 

```
git clone git@github.com/mrarcher2000/team-profile.git
``` 

Now you are ready to manage your team!

## Usage

To start the application, open the folder in the command line and type 'node index.js'. You should see a Welcome message and the Main Menu prompting you to add a type of employee. We reccommend to add the Manager of the team first, but this will not break any of the project. Press 'Enter' to choose an option and follow the prompts to fill out the information for each employee. After all employees have been entered into the application, return to the Main Menu and choose the 'Exit' option. This will prompt the application to create the webpage.

 Now, navigate to the folder labeled 'dist/' and your files are there and ready to use! To view the HTML, simply open the page in your browser. 

## Contributing

Any contributions on this project are welcome. If you wish to contribute, please give credit to the original developer and GitHub repository at https://github.com/mrarcher2000/team-profile. 

## Tests

The node package Jest was used to create object tests for this project. A full description on how to use the Jest test developer can be reviewed at https://jestjs.io/. 
    
To run the test module on the application, navigate to the folder holding the 'index.js' file and open it in the command line. Then, type the command 'npm test' to run the test code on the application. This ensures all objects have been downloaded and are running properly.

## Questions

For any additional questions or comments, please email the author of this project at: 
archernich@gmail.com.

*OR*

You can view other repositories made by me at https://github.com/mrarcher2000.



## License
    
    This project is licensed under the Open Source MIT License.
    A full overview of what this license covers can be found at https://spdx.org/licenses/MIT.html.
    
