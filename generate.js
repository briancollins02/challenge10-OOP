const TeamMember = require("./lib/TeamMember");

const generateHtml = team => {
    console.log('generating!')

    // html block for manager info
    const generateManager = manager => {
        return`
        <div class="card" id="manager">
            <header class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>Manager</h3>
            </header>
            <section>
                <ul>
                    
                    <li>Email: <span><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li>Office Number: <span>${manager.getOfficeNumber()}</span></li>
                </ul>
            </section>
        </div>
        `
    };
    // html block for engineer data
    const generateEngineer = engineer => {
        return`
        <div class="card" id="engineer">
            <header class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>Engineer</h3>
            </header>
            <section>
                <ul>
                    
                    <li>Email: <span> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
                    <li>GitHub: <span> <a href="github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></span></li>
                </ul>
            </section>
        </div>
        `
    };
    // html block for intern data
    const generateIntern = intern => {
        return `
        <div class="card" id="intern">
            <header class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </header>
            <section>
                <ul>
                    
                    <li>Email: <span> <a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li>School: <span>${intern.getSchool()}</span></li>
                </ul>
            </section>
        </div>
        `
    };

    const genArr = [];

    // go throught the created roster array and for every manager, execute the generateManager function
    genArr.push(roster
        .filter(TeamMember => TeamMember.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );
    
    // go throught the created roster array and for every Engineer, execute the generateManager function
    genArr.push(roster
        .filter(TeamMember => TeamMember.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
    );

    // go throught the created roster array and for every Intern, execute the generateManager function
    genArr.push(roster
        .filter(TeamMember => TeamMember.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join('')
    );

    return genArr.join('');
};




// export the function to generate the entire page

module.exports = team => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../style.css">
            <title>Document</title>
        </head>
        <body>
            <header id="page-header">
                <h1>My Team</h1>
            </header>
            ${generateHtml(team)}
        </body>
        </html>
    `
};