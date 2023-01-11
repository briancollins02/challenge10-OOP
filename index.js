const inquirer = require('inquirer')
const fs = require('fs');

const generateHtml = require('./generate.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const outputPath = './output/team.html'

roster = [];

function promptManager() {
    console.log('manager time!')
    inquirer.prompt([
        {
            type: 'input',
            message: 'Manager Name:',
            name: 'name',
            validate: answer => {
                if (answer ==='') {
                    console.log("Please enter the Manager's name.");
                    return false;
                } else {
                return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Manager e-mail:',
            name: 'email',
            validate: answer => {
                let emailFormat = answer.match(/\S+@\S+\.\S+/)
                if (emailFormat) {
                    return true;
                } else {
                console.log("Please enter a valid email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'officeNumber',
        },
    ])
    // create a new manager object with the given user input
    .then((answers) => {
        const manager = new Manager(answers.name, answers.email, answers.officeNumber);
        roster.push(manager);
        promptTeam();
    });
}

function promptEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Employee Name:',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'Engineer e-mail:',
            name: 'eMail'
        },
        {
            type: 'input',
            message: 'GitHub Username:',
            name: 'github'
        },  
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.email, answers.github);
        roster.push(engineer);
        promptTeam();
    });
}
   
function promptIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Intern Name:',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'Intern e-mail:',
            name: 'eMail'
        },
        {
            type: 'input',
            message: 'School of Graduation:',
            name: 'school'
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.email, answers.school);
        roster.push(intern)
        promptTeam();
    });
};


function promptTeam() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a team member?',
            name: 'addOption',
            choices: ['Add engineer', 'Add intern', 'No thanks! (finish team)']
        }
    ])
    .then((answers) => {
        if(answers.addOption == 'No thanks! (finish team)') {
            console.log(roster);
            fs.writeFileSync(outputPath, generateHtml(roster), "UTF-8");
            console.log("okay, bro, that's cool ig...");
            return;
        } else if (answers.addOption === 'Add engineer'){
            console.log('adding engineer!')
            promptEngineer();
        } else if (answers.addOption === 'Add intern') {
            console.log('adding intern!')
            promptIntern();
        };
    });
};


async function init() {
    try {
        const manager = await promptManager();

    } catch(err){
        console.log(err)
    }
};

init();