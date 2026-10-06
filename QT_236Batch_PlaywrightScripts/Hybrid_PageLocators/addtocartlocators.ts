import { Page ,Locator} from '@playwright/test';

export class AddtoCartPage {

  page: Page;
  addToCartButton1: Locator;
  addToCartButton2: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.addToCartButton1 = page.locator('#add-to-cart-sauce-labs-backpack');
     this.addToCartButton2 = page.locator('#add-to-cart-sauce-labs-bike-light');

  }

  async addProductToCart() {
    await this.addToCartButton1.click();
       await this.addToCartButton2.click();
    }

}