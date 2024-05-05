import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '29/03/2024', receipt: 12000 },
    { date: '30/03/2024', receipt: 14000 },
    { date: '01/04/2024', receipt: 2000 },
    { date: '02/04/2024', receipt: 4000 },
    { date: '03/04/2024', receipt: 6000 },
    { date: '04/04/2024', receipt: 8000 },
    { date: '05/04/2024', receipt: 10000 },
  ])
})
