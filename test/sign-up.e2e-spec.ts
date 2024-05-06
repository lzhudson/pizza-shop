import { expect, test } from '@playwright/test'

test('sign up sucessfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelicimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Hudson Holanda')
  await page.getByLabel('Seu e-mail').fill('hudsonholanda55@gmail.com')
  await page.getByLabel('Seu celular').fill('(85) 9.8922-3334')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelicimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('Hudson Holanda')
  await page.getByLabel('Seu e-mail').fill('hudsonholanda55@gmail.com')
  await page.getByLabel('Seu celular').fill('(85) 9.8922-3334')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer Login' }).click()

  expect(page.url()).toContain('sign-in')

  await page.waitForTimeout(2000)
})
