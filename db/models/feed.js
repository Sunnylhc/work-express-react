const db = require('../util/database');

module.exports = class Category {
    constructor(feederId, name, sex,address,phone,email) {
        this.feederId = feederId;
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    // READ
    static getfeed() {
        return db.execute('SELECT * FROM feeder');
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM feeder');
    }
}