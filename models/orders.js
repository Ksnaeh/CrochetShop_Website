"use strict";
class orders {
    constructor( ProductName, RealName, Qty) {
        this.ProductName = ProductName;
        this.RealName = RealName;
        this.Qty = Qty;
      
    }

    getProductName() {
        return this.ProductName;
    }
    getRealName() {
        return this.RealName;
    }
    getQty() {
        return this.Qty;
    }


    setProductName(ProductName) {
        this.ProductName = ProductName
    }
    setRealName(RealName) {
        this.RealName = RealName;
    }
    setQty(Qty) {
        this.Qty = Qty;
    }
  

}
module.exports = orders;
