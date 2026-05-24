import { test, expect } from './fixtures/auth'

const BASE = '/api/rpc/protected/onboarding'

test.describe('Onboarding API @api', () => {
  test('getProfile returns onboarding fields', async ({ authedPage }) => {
    const res = await authedPage.request.get(`${BASE}/profile`)
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(body).toHaveProperty('full_name')
    expect(body).toHaveProperty('avatar_url')
    expect(body).toHaveProperty('preference_motivation')
    expect(body).toHaveProperty('preference_experience')
    expect(body).toHaveProperty('preference_interest')
    expect(body).toHaveProperty('onboarding_completed')
  })

  test('updateName saves name', async ({ authedPage }) => {
    const res = await authedPage.request.post(`${BASE}/name`, {
      data: { fullName: '[TEST] API Name' },
    })
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(body.success).toBe(true)

    // Verify it persisted
    const profile = await authedPage.request.get(`${BASE}/profile`)
    const profileBody = await profile.json()
    expect(profileBody.full_name).toBe('[TEST] API Name')
  })

  test('updateName rejects empty name', async ({ authedPage }) => {
    const res = await authedPage.request.post(`${BASE}/name`, {
      data: { fullName: '' },
    })
    expect(res.ok()).toBeFalsy()
    expect(res.status()).toBe(400)
  })

  test('saveMotivation saves valid preference', async ({ authedPage }) => {
    const res = await authedPage.request.post(`${BASE}/motivation`, {
      data: { value: 'ship_first_saas' },
    })
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(body.success).toBe(true)

    const profile = await authedPage.request.get(`${BASE}/profile`)
    const profileBody = await profile.json()
    expect(profileBody.preference_motivation).toBe('ship_first_saas')
  })

  test('saveMotivation rejects invalid enum', async ({ authedPage }) => {
    const res = await authedPage.request.post(`${BASE}/motivation`, {
      data: { value: 'invalid_motivation' },
    })
    expect(res.ok()).toBeFalsy()
    expect(res.status()).toBe(400)
  })

  test('complete requires name to be set', async ({ authedPage }) => {
    const res = await authedPage.request.post(`${BASE}/complete`)
    expect(res.ok()).toBeTruthy()
    const body = await res.json()
    expect(body.success).toBe(true)
    expect(body.redirectTo).toBe('/protected/home')
  })

  test('saveAvatar rejects invalid URL', async ({ authedPage }) => {
    const res = await authedPage.request.post(`${BASE}/avatar`, {
      data: { avatarUrl: 'https://evil.com/malware.png' },
    })
    expect(res.ok()).toBeFalsy()
  })
})

test.describe('Onboarding API — unauthorized', () => {
  test('getProfile rejects without auth', async ({ page }) => {
    const res = await page.request.get(`${BASE}/profile`)
    expect(res.ok()).toBeFalsy()
    expect(res.status()).toBeGreaterThanOrEqual(400)
  })

  test('updateName rejects without auth', async ({ page }) => {
    const res = await page.request.post(`${BASE}/name`, {
      data: { fullName: 'Hacker' },
    })
    expect(res.ok()).toBeFalsy()
    expect(res.status()).toBeGreaterThanOrEqual(400)
  })

  test('complete rejects without auth', async ({ page }) => {
    const res = await page.request.post(`${BASE}/complete`)
    expect(res.ok()).toBeFalsy()
    expect(res.status()).toBeGreaterThanOrEqual(400)
  })
})
