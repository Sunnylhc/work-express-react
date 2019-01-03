const db = require('../util/database');

module.exports = class User {
  constructor(id, name, email, password){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // READ
  static fetchAll(){
    return db.execute('SELECT * FROM user');
  }

  static getCount(){
    return db.execute('SELECT COUNT(*) as count FROM user');
  }
}