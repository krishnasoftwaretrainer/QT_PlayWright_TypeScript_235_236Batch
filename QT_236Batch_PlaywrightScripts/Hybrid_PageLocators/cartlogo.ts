import { Page ,Locator} from '@playwright/test';

export class CartPage {

  page: Page;
  cartlogo: Locator;
    
  constructor(page: Page) {
    this.page = page;

    this.cartlogo = page.locator('#shopping_cart_container');
     
  }

  async clickCartLogo() {
    await this.cartlogo.click();
  }

}