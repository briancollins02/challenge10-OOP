const TeamMember = require('./TeamMember');

class Intern extends TeamMember {
    constructor(name, email, school){
        super (name, email, school);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;