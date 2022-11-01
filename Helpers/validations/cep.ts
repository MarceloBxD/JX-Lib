import React from 'react'
import { cepMask } from '../masks'

describe('cepaMask', () => {
  it('should mask a complete cep', () => {
    const event = {
      target: {
        value: '12312123',
      },
    } as React.ChangeEvent<HTMLInputElement>

    cepMask(event)

    expect(event.target.value).toBe('12312-123')
  })

  it('should mask an incomplete cep', () => {
    const event = {
      target: {
        value: '123121',
      },
    } as React.ChangeEvent<HTMLInputElement>

    cepMask(event)

    expect(event.target.value).toBe('12312-1')
  })
})
