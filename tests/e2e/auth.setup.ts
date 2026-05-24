import { test as setup } from '@playwright/test'
import { TEST_EMAIL, TEST_PASSWORD, AUTH_STATE_PATH } from './fixtures/constants'

setup('authenticate', async ({ page }) => {
  await page.goto('/auth/login')
  await page.getByLabel('Email').fill(TEST_EMAIL)
  await page.getByLabel('Password').fill(TEST_PASSWORD)
  await page.getByRole('button', { name: /sign in/i }).click()

  // After login, user might be redirected to /onboarding or /protected
  // depending on their onboarding status
  await page.waitForURL((url) => {
    return url.pathname === '/onboarding' || url.pathname.startsWith('/protected/')
  })

  await page.context().storageState({ path: AUTH_STATE_PATH })
})
