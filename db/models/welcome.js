const db = require('../util/database');

module.exports = class Post {
  constructor(id, userid, password, email, phone,deptid) {
    this.id = id;
    this.userid = userid;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.deptid = deptid;
  }



  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM account  inner join dept on account.deptid=dept.id;');
  }

  static findById(id) {
    return db.execute('SELECT * FROM account where id = ?', [id]);
  }

};