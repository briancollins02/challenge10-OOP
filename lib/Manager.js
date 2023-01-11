const TeamMember = require('./TeamMember');

class Manager extends TeamMember {
    constructor(name, email, officeNumber) {
        super (name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;