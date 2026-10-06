import { Page ,Locator} from '@playwright/test';

export class FillFormPage {

  page: Page;
  firstname: Locator;
  lastname: Locator;
  zipcode: Locator;
  continuebutton: Locator;

    
  constructor(page: Page) {
    this.page = page;

    this.firstname = page.locator('#first-name');
    this.lastname = page.locator('#last-name');
    this.zipcode = page.locator('#postal-code');
    this.continuebutton = page.locator('#continue');
     
  }

  async fillFormDetails(firstname: string, lastname: string, zipcode: string) {
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.zipcode.fill(zipcode);
    await this.continuebutton.click();
  }

}