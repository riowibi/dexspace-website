import {Field} from "model-react";

class Dex {
  constructor(name, email, dexId, status, modified) {
    this.name = new Field(name);
    this.email = new Field(email);
    this.dexId = new Field(dexId);
    this.status = new Field(status);
    this.modified = new Field(modified);
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
  setDexId(dexId) {
      this.dexId.set(dexId);
  }
  getDexId(h) {
      return this.dexId.get(h);
  }  
  setStatus(status) {
      this.status.set(status);
  }
  getStatus(h) {
      return this.status.get(h);
  }  
  setModified(modified) {
      this.modified.set(modified);
  }
  getModified(h) {
      return this.modified.get(h);
  }
}

export default Dex