"use strict"
class Products {
    constructor(ProductID, ProductName, Description, Price, Qty, Img) {
        this.ProductID = ProductID;
        this.ProductName = ProductName;
        this.Description = Description;
        this.Price = Price;
        this.Qty = Qty;
        this.Img = Img;
    }
    //add the get methods here}

    getGameId() {
        return this.ProductID;
    }
    getName() {
        return this.ProductName;
    }
    getDescription(){
        return this.Description;
    }
    getPrice() {
        return this.Price;
    }
    getQty() {
        return this.Qty;
    }
    getImg(){
        return this.Img;
    }



    setGameID(ProductID){
        this.ProductID = ProductID;
    }
    setName(ProductName){
        this.ProductName = ProductName;
    }
    setDescription(Description){
        this.Description = Description;
    }
    setPrice(Price){
        this.Price = Price;
    }
    setQty(Qty){
        this.Qty = Qty;
    }
    setImg(Img){
        this.Img = Img;
    }

} //end class
module.exports = Products;
    