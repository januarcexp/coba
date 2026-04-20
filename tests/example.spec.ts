import { test, expect } from '@playwright/test';``

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/');
  await page.getByRole('link', { name: 'Produk' }).click();
  await page.getByRole('link', { name: 'Pemesanan' }).click();
  await page.getByRole('tab', { name: 'Dikonfirmasi' }).click();
});