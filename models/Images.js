"use strict";
class Images {
    constructor(img, productid) {
        this.img = img;
        this.productid = productid;
    }

    getImg(){
        return this.img = img;
    }
    getProductid() {
        return this.productid;
    }

   

    setImg(img) {
        this.img = img;
    }
    setProductid(productid) {
        this.productid = productid;
    }
    
}
module.exports = Images;