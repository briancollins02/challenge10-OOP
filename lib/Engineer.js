const TeamMember = require('./TeamMember');

class Engineer extends TeamMember {
    constructor(name, email, github){
        super (name, email, github);
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;