import { describe, expect, test } from 'vitest'

import { addCelsius } from './general'

describe('utils', () => {
  describe('general', () => {
    test('addCelsius', () => {
      const input1 = 23;
      const input2 = 45;
  
      expect(addCelsius(input1)).toEqual(`${input1}℃`)
      expect(addCelsius(input2)).toEqual(`${input2}℃`)
    })
  })
})