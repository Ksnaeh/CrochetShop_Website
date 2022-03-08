"use strict";
class Checkout {
    constructor(OrderID, Realname, DeliveryTime, TotalPrice, ProductName, qty) {
        this.OrderID = OrderID;
        this.Realname = Realname;
        this.DeliveryTime = DeliveryTime;
        this.TotalPrice = TotalPrice;
        this.ProductName = ProductName;
        this.qty = qty;
    }

    getOrderID() {
        return this.OrderID;
    }

    getRealname(){
        return this.Realname;
    }

    getDeliveryTime() {
        return this.DeliveryTime;
    }

    getTotalprice() {
        return this.TotalPrice;
    }

    getProductName() {
        return this.ProductName;
    }

    getQty(){
        return this.qty;
    }

    setOrderID(OrderID) {
        this.OrderID = OrderID;
    }
    setRealname(Realname) {
        this.Realname = Realname;
    }
    setDelivertyTime(DeliveryTime){
        this.DeliveryTime = DeliveryTime;
    }

    setTotalprice(TotalPrice) {
        this.TotalPrice = TotalPrice;
    }
    setProductName(ProductName) {
        this.ProductName = ProductName;
    }
    setQty(qty){
        this.qty = qty;
    }
}
module.exports = Checkout;
