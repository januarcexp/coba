import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Locators pakai get supaya this.page sudah siap
  get username() {
    return this.page.getByRole('textbox', { name: 'Username' });
  }

  get password() {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  get loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('http://localhost/plywood/public/login');
  }

  async login(username: string, password: string) {
    await this.username.click();
    await this.username.fill(username);
    await this.password.click();
    await this.password.fill(password);
    await this.loginButton.click();
  }
}