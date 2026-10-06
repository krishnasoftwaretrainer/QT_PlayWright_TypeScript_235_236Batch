import { Page, Locator } from '@playwright/test';

export class LoginPage {

  page: Page;
  uname: Locator;
  pswd: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.uname = page.locator('#user-name');
    this.pswd = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async enterApplicationUrl(swagurl: string) {
    await this.page.goto(swagurl);
  }

  async loginToApplication(username: string, password: string) {
    await this.uname.fill(username);
    await this.pswd.fill(password);
    await this.loginButton.click();
  }
}