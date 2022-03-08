"use strict";
class Account {
    constructor(Username, Password, Email) {
        this.user_name = Username;
        this.password = Password;
        this.email = Email;
    }

    getUserName(){
        return this.user_name;
    }

    getPassword(){
        return this.password;
    }

    getEmail() {
        return this.email;
    }


    setUsername(Username) {
        this.user_name = Username;
    }
    setPassword(Password) {
        this.password = Password;
    }
    setEmail(Email) {
        this.email = Email;
    }

}
module.exports = Account;