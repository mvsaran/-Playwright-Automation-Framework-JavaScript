exports.HomePage = 
class HomePage {
    constructor(page){
        this.page = page;
        this.productList = "//*[@id='tbodyid']/div/div/div/h4/a";
        this.addToCart = "//a[@class='btn btn-success btn-lg']";
        this.cart ='#cartur';

     }

     async addProductToCart(productName){
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
            if(productName === await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async dialog => {
            if(dialog.message() === 'Product added.'){
                await dialog.accept();
        }
    })
    await this.page.locator(this.addToCart).click();
    }

async gotoCart(){
    await this.page.locator(this.cart).click();
}
}
    