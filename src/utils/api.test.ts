import { describe, expect, test } from 'vitest'

import { request } from './api'

describe('utils', () => {
  describe('api', () => {
    describe('request', () => {
      test('request:failed', async () => {
        const response = await request({ url: 'https://foo.bar/never goona work' })
  
        expect(response.success).toBe(false)
        expect(response.error).toBeInstanceOf(Error)
      })
  
      test('request:success', async () => {
        const response = await request({ url: 'https://api.openweathermap.org/data/2.5/weather' })
    
        expect(response.success).toBe(true)
        expect(response.data).toBeDefined()
        expect(response.error).not.toBeDefined()
      })
    })
  })
})