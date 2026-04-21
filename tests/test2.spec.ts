import { test, expect } from '@playwright/test';

test('bukalapak test', async ({ page }) => {
  await page.goto('https://www.bukalapak.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: 'Paket Data' }).click();
  await page.getByRole('button', { name: 'Lanjut' }).click();
  await expect(page.getByText('Form ini di update dari januar')).toBeVisible();
    await page.waitForLoadState('domcontentloaded');

});