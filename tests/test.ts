import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/#1');
	await expect(page.getByRole('heading', { name: 'Paris 2024' })).toBeVisible();
});
