const TeamMember = require('./TeamMember');

class Engineer extends TeamMember {
    constructor(name, email, github, role){
        super (name, email);
        this.github = github;
        this.role = this.getRole;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;