import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Login Page/);
});

test('submit valid credentials', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  // fill valid credentials
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('#submit-login');

  // Click the Logout link.
  await page.getByRole('link', { name: 'Logout' }).click();

  // Expects page back to the login page again.
  await expect(page).toHaveURL('https://practice.expandtesting.com/login');
});
