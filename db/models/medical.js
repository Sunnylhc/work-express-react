const db = require('../util/database');

module.exports = class medical {
    constructor(id, medical_record, major_medical_history, doctor) {
        this.id= id;
        this.medical_record = medical_record;
        this.major_medical_history = major_medical_history;
        this.doctor= doctor;
      }
    

  // READ
  static getmedical(){
    return db.execute('SELECT * FROM medicalrecord');
  }

  static getCount(){
    return db.execute('SELECT COUNT(*) as count FROM medicalrecord');
  }
}