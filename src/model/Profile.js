import {Field} from "model-react";

class Profile {
  constructor(name, email, phoneNumber, gender, uid) {
    this.name = new Field(name);
    this.email = new Field(email);
    this.phoneNumber = new Field(phoneNumber);
    this.gender = new Field(gender);
    this.uid = new Field(uid);
    // this.modified = new Field(modified);
  }
  setName(name) {
      this.name.set(name);
  }
  getName(h) {
      return this.name.get(h);
  }
  setEmail(email) {
    this.email.set(email);
  }
  getEmail(h) {
    return this.email.get(h);
  }
  setPhoneNumber(phoneNumber) {
      this.phoneNumber.set(phoneNumber);
  }
  getPhoneNumber(h) {
      return this.phoneNumber.get(h);
  }  
  setGender(gender) {
      this.gender.set(gender);
  }
  getGender(h) {
      return this.gender.get(h);
  }   
  setUid(gender) {
      this.uid.set(uid);
  }
  getUid(h) {
      return this.uid.get(h);
  }  
  // setModified(modified) {
  //     this.modified.set(modified);
  // }
  // getModified(h) {
  //     return this.modified.get(h);
  // }
}

export default Profile