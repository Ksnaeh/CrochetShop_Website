"use strict";
class Payment {
    constructor(totalPrice, realname, address, email) {
        this.totalPrice = totalPrice;
        this.realname = realname;
        this.email = email;
        this.address = address;
    }

    getTotalprice(){
        return this.totalPrice;
    }

    getEmail() {
        return this.email;
    }

    getRealname() {
        return this.realname;
    }
    getAddress() {
        return this.address;
    }

    setTotalprice(totalPrice) {
        this.totalPrice = totalPrice;
    }
    setEmail(email) {
        this.email = email;
    }
    setRealname(realname) {
        this.realname = realname;
    }
    setAddress() {
        this.address = address;
    }
}
module.exports = Payment;