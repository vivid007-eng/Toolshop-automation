import { test, expect } from '@playwright/test';

test('login page shows all fields', async ({ page }) => {
  await page.goto('/auth/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.locator('[data-test="email"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('[data-test="login-submit"]')).toBeVisible();

});
