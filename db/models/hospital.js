const db = require('../util/database');

module.exports = class pet {
    constructor(doctor, address, phone) {
        this.doctor = doctor;
        this.address = address;
        this.phone = phone;
      }
    

  // READ
  static gethospital(){
    return db.execute('SELECT * FROM hospital');
  }

  static getCount(){
    return db.execute('SELECT COUNT(*) as count FROM hospital');
  }

  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO hospital (doctor, address, phone) VALUES (?, ?, ?)',
      [req.body.doctor, req.body.address, req.body.phone]
    );
  }
  static findById(doctor) {
    return db.execute('SELECT * FROM hospital where doctor = ?', [doctor]);
  }

  // UPDATE
  static updateById(req, res) {
    const doctor = req.body.doctor;
    const address = req.body.address;
    const phone = req.body.phone;

    return db.execute(
      'UPDATE hospital SET address = ?, phone = ? where doctor= ?',[address, phone,doctor]
    );
  }


  // DELETE
  static deleteById(doctor) {
    return db.execute(
      'DELETE FROM hospital WHERE doctor = ?', [doctor]
    );
  }

}