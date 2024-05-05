import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      phone: '921021219021',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
