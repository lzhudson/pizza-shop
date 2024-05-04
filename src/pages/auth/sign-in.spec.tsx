import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input value if is email is present on search param', () => {
    const wrapper = render(
      <>
        <SignIn />
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <HelmetProvider>
              <MemoryRouter
                initialEntries={['/sign-in?email=hudsonholanda55@gmail.com']}
              >
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </MemoryRouter>
            </HelmetProvider>
          )
        },
      },
    )

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('hudsonholanda55@gmail.com')
  })
})
