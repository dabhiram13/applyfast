import { test, expect } from './fixtures/auth'

test.describe('Protected Pages @page @smoke', () => {
  // ─── Home Page ────────────────────────────────────────────────

  test('home page loads for authenticated user', async ({ authedPage }) => {
    await authedPage.goto('/protected/home')

    await authedPage.waitForLoadState('networkidle')

    // Page should load without errors
    const body = authedPage.locator('body')
    await expect(body).not.toContainText('Internal Server Error')
    await expect(body).not.toContainText('Application error')

    // Should have some main content (heading or sidebar navigation)
    const hasContent = await authedPage.locator('h1, h2, nav').first().isVisible().catch(() => false)
    expect(hasContent).toBe(true)
  })

  // ─── Billing Page ─────────────────────────────────────────────

  test('billing page loads for authenticated user', async ({ authedPage }) => {
    await authedPage.goto('/protected/billing')

    await authedPage.waitForLoadState('networkidle')

    // Should load without error
    const body = authedPage.locator('body')
    await expect(body).not.toContainText('Internal Server Error')
    await expect(body).not.toContainText('Application error')

    // Should show some billing-related content
    const hasBillingContent = await authedPage.locator('text=/plan|pricing|billing|subscribe|free|pro|premium/i').first().isVisible().catch(() => false)
    expect(hasBillingContent).toBe(true)
  })

  // ─── Profile Page ─────────────────────────────────────────────

  test('profile page loads for authenticated user', async ({ authedPage }) => {
    await authedPage.goto('/protected/profile')

    await authedPage.waitForLoadState('networkidle')

    // Should not show an error page
    const body = authedPage.locator('body')
    await expect(body).not.toContainText('Internal Server Error')
    await expect(body).not.toContainText('Application error')

    // Should show the Profile heading
    await expect(authedPage.getByText('Profile').first()).toBeVisible({ timeout: 10000 })

    // Should show user email somewhere on the page
    const testEmail = process.env.TEST_USER_EMAIL!
    await expect(authedPage.getByText(testEmail).first()).toBeVisible({ timeout: 10000 })
  })

  // ─── Auth Guard ───────────────────────────────────────────────

  test('unauthenticated user is redirected from /protected/home', async ({ page }) => {
    await page.goto('/protected/home')

    // Should redirect to login
    await page.waitForURL('/auth/login', { timeout: 10000 })
    await expect(page).toHaveURL(/\/auth\/login/)
  })

  test('unauthenticated user is redirected from /protected/billing', async ({ page }) => {
    await page.goto('/protected/billing')

    await page.waitForURL('/auth/login', { timeout: 10000 })
    await expect(page).toHaveURL(/\/auth\/login/)
  })

  test('unauthenticated user is redirected from /protected/profile', async ({ page }) => {
    await page.goto('/protected/profile')

    await page.waitForURL('/auth/login', { timeout: 10000 })
    await expect(page).toHaveURL(/\/auth\/login/)
  })
})
