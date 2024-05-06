import { expect, test } from '@playwright/test'

test('update profile sucessfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()

  await page.waitForTimeout(1000)

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.waitForTimeout(1000)

  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Descrição Personalizada')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(1000)

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})

test('update profile with error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()

  await page.waitForTimeout(1000)

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.waitForTimeout(1000)

  await page.getByLabel('Nome').fill('Rocket Pizzaria')
  await page.getByLabel('Descrição').fill('Descrição Personalizada')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(1000)

  expect(page.getByRole('button', { name: 'Pizza Shop' })).toBeVisible()
})
