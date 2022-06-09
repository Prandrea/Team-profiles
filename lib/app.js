const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');


const staffArray = [];

function questions() {
};

const createMan = () => {
   
    return inquirer
        .prompt(
            [{
                type: 'text',
                name: 'name',
                message: 'What is the team managers name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the team managers name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team managers ID? (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter the team managers ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team managers email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the team managers email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the team managers office number? (Required)',
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('Please enter the team managers office number!');
                        return false;
                    }
                }
            }]

        )
        .then(employeeData => {
            const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office)
            staffArray.push(manager);
        });
};

const title = dataFour => {
    
    return inquirer.prompt(
        {
            type: 'list',
            message: 'Which type of employee?',
            name: 'type',
            choices: ['Engineer', 'Intern', 'Quit']
        }
    )
    .then(({ type }) => {
        if (type === 'Engineer'){
            return createEn();
        } else if (type === 'Intern') {
            return createIn();
        } else if (type === 'Quit') {
            
            return generatePage(staffArray);
        }
    });
}


const createEn = () => {
   
    return inquirer
        .prompt(
            [{
                type: 'input',
                name: 'name',
                message: "What is your Engineer's name? (Required)",
                validate: eNameInput => {
                    if (eNameInput) {
                        return true;
                    } else {
                        console.log("Please enter your Engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your Engineer's ID? (Required)",
                validate: eIdInput => {
                    if (eIdInput) {
                        return true;
                    } else {
                        console.log("Please enter your Engineer's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Engineer's email? (Required)",
                validate: eEmailInput => {
                    if (eEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter your Engineer's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your Engineer's Github username? (Required)",
                validate: eGitInput => {
                    if (eGitInput) {
                        return true;
                    } else {
                        console.log("Please enter your Engineer's Github username!");
                        return false;
                    }
                }
            }
            ])

        .then(employeeData => {
            const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
            staffArray.push(engineer);
        })
        .then(data => {
            return title(data)
        })

}


const createIn = () => {
    
    return inquirer
        .prompt(
            [{
                type: 'input',
                name: 'name',
                message: "What is your Intern's name? (Required)",
                validate: iNameInput => {
                    if (iNameInput) {
                        return true;
                    } else {
                        console.log("Please enter your Intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your Intern's ID? (Required)",
                validate: iIdInput => {
                    if (iIdInput) {
                        return true;
                    } else {
                        console.log("Please enter your Intern's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Intern's email? (Required)",
                validate: iEmailInput => {
                    if (iEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter your Intern's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your Intern's school? (Required)",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter your Intern's school!");
                        return false;
                    }
                }
            }
            ])
            .then(employeeData => {
                const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
                staffArray.push(intern);
            })
            .then(data => {
                return title(data)
            })

};


const { writeFile, copyFile } = require('../utils/generate-site');
const generatePage = require('../src/page-template');

questions.prototype.initializePrompt = function () {
    createMan()


        .then(data => {
            
            
            return title(data)
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();  
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);  
        })
        .catch(err => {
            console.log(err);
        });

}



module.exports = questions;