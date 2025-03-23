exports.CartPage = class CartPage {
    constructor(page){
        this.page =page;
        this.noofProducts = '//tbody[@id="tbodyid"]/tr/td[2]';

    }

    async checkProductInCart(productName){
        const products = await this.page.$$(this.noofProducts);
        for(const product of products){
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
        return false;
    }
}