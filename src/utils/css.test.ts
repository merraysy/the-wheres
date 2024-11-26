import { describe, expect, test } from 'vitest'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { cn } from './css'

describe('utils', () => {
  describe('css', () => {
    test('cn', () => {
      const input1 = 'test w-10';
      const input2 = 'input2 p-1';
      const output = cn([input1, input2])
  
      expect(output).toEqual(twMerge(clsx([input1, input2])))
    })
  })
})