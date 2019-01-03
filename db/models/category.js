const db = require('../util/database');

module.exports = class Category {
    constructor(id, title, date) {
        this.id = id;
        this.title = title;
        this.date = date;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM category');
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM category');
    }
}