const db = require('../util/database');

module.exports = class pet {
    constructor(id, category, name, sex, birthday,weight,vaccine,feederId,date) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.weight = weight;
        this.ligation = ligation;
        this.vaccine = vaccine;
        this.feederId = feederId;
        this.date = date;
      }
    

  // READ
  static getpet(){
    return db.execute('SELECT * FROM pet');
  }

  static getCount(){
    return db.execute('SELECT COUNT(*) as count FROM pet');
  }


  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO pet (id, category,name,sex,birthday,weight,ligation,vaccine,feederId,date) VALUES (?, ?, ?,?,?,?,?,?,?,?)',
      [req.body.id, req.body.category, req.body.name,req.body.sex,req.body.birthday,req.body.weight,req.body.ligation,req.body.vaccine,req.body.feederId,req.body.date]
    );
  }
  static findById(id) {
    return db.execute('SELECT * FROM pet where id = ?', [id]);
  }

  // UPDATE
  static updateById(req, res) {
    // const doctor = req.body.doctor;
    // const address = req.body.address;
    // const phone = req.body.phone;

    return db.execute(
      'UPDATE pet SET category = ?, name = ?, sex = ?,birthday = ?,weight = ?,ligation = ?,vaccine = ?,feederId = ?,date = ? where id= ?',[category,name,sex,birthday,weight,ligation,vaccine,feederId,date,id]
    );
  }


  // DELETE
  static deleteById(id) {
    return db.execute(
      'DELETE FROM pet WHERE id = ?', [id]
    );
  }


}