const db = require('../util/database');

module.exports = class medical {
    constructor(id, blood,breathe,heartbeat,blood_pressure,Urine,stool,doctor,major_medical_history) {
        this.id = id;
        this.breathe = breathe;
        this.blood = blood;
        this.heartbeat = heartbeat;
        this.blood_pressure = blood_pressure;
        this.Urine = Urine;
        this.stool = stool;
        this.doctor = doctor;
        this.major_medical_history = major_medical_history;
      }
    

  // READ
  static gethealth(){
    return db.execute('SELECT * FROM healthexamination');
  }

  static getCount(){
    return db.execute('SELECT COUNT(*) as count FROM healthexamination');
  }
}