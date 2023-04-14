import { test, expect } from '@playwright/test'

test('Open Homepage', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com')
  await expect(page).toHaveTitle('Home Page')
})
