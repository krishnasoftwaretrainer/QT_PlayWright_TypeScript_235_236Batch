import { Page ,Locator} from '@playwright/test';

export class CheckoutPage {

  page: Page;
  checkoutbutton: Locator;
    
  constructor(page: Page) {
    this.page = page;

    this.checkoutbutton = page.locator('#checkout');
     
  }

  async clickCheckoutButton() {
    await this.checkoutbutton.click();
  }

}