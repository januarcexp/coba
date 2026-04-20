import { test as setup } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/login.page'; // pages/ ada di root project

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Gunakan method dari POM
  await loginPage.goto();

  // Handle dialog jika muncul (misal: alert setelah login)
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await loginPage.login('adel', '123456');

  // Simpan storage state setelah login berhasil
  await page.context().storageState({ path: authFile });
});