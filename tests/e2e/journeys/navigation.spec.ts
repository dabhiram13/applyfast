import { test, expect, skipIfRedirected } from '../fixtures/auth'
import { HomePage } from '../pages/HomePage'

test.describe('Journey: Navigation @journey', () => {
  test('home page loads with sidebar and content', async ({ authedPage }, testInfo) => {
    const home = new HomePage(authedPage)
    await home.goto()
    await skipIfRedirected(authedPage, testInfo)

    // Sidebar with "Home" link is visible
    await expect(home.homeLink).toBeVisible({ timeout: 10_000 })
    // Main content loaded
    await expect(home.heading).toBeVisible()
  })

  test('navigate to profile via URL', async ({ authedPage }, testInfo) => {
    await authedPage.goto('/protected/profile', { waitUntil: 'domcontentloaded' })
    await skipIfRedirected(authedPage, testInfo)

    await expect(authedPage.getByText('Profile').first()).toBeVisible({ timeout: 10_000 })
    await expect(authedPage.getByText('ACCOUNT').first()).toBeVisible()
  })

  test('navigate to billing via URL', async ({ authedPage }, testInfo) => {
    await authedPage.goto('/protected/billing', { waitUntil: 'domcontentloaded' })
    await skipIfRedirected(authedPage, testInfo)

    const body = authedPage.locator('body')
    await expect(body).not.toContainText('Internal Server Error')
    await expect(body).not.toContainText('Application error')
  })

  test('all protected pages load without 500 errors', async ({ authedPage }, testInfo) => {
    const pages = ['/protected/home', '/protected/billing', '/protected/profile']

    for (const path of pages) {
      await authedPage.goto(path, { waitUntil: 'domcontentloaded' })
      const body = authedPage.locator('body')
      await expect(body).not.toContainText('Internal Server Error')
      await expect(body).not.toContainText('Application error')
    }
  })
})
