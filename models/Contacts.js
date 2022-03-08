"use strict";
class Contacts {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    getName(){
        return this.name;
    }
    getEmail() {
        return this.email;
    }

    getMessage() {
        return this.message;
    }
  

    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = Email;
    }
    setRealname(message) {
        this.message = message;
    }
    
}
module.exports = Contacts;