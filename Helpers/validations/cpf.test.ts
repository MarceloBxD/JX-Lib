import React from 'react'
import { cpfMask } from '../masks/cpf'

describe('cepaMask', () => {
  it('should mask a complete cpf', () => {
    const event = {
      target: {
        value: '12312312312',
      },
    } as React.ChangeEvent<HTMLInputElement>

    cpfMask(event)

    expect(event.target.value).toBe('123.123.123-12')
  })

  it('should mask an incomplete cpf', () => {
    const event = {
      target: {
        value: '12312312',
      },
    } as React.ChangeEvent<HTMLInputElement>

    cpfMask(event)

    expect(event.target.value).toBe('123.123.12')
  })

  it('should mask an incomplete cpf with 10 digits', () => {
    const event = {
      target: {
        value: '1231231231',
      },
    } as React.ChangeEvent<HTMLInputElement>

    cpfMask(event)

    expect(event.target.value).toBe('123.123.123-1')
  })
})
