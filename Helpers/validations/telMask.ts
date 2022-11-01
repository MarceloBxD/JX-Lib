import React from 'react'
import { phoneMask } from '../masks'

describe('cepaMask', () => {
  it('should mask a complete mobile phone number', () => {
    const event = {
      target: {
        value: '22999999999',
      },
    } as React.ChangeEvent<HTMLInputElement>

    phoneMask(event)

    expect(event.target.value).toBe('(22) 99999-9999')
  })

  it('should mask an landline number', () => {
    const event = {
      target: {
        value: '1126222622',
      },
    } as React.ChangeEvent<HTMLInputElement>

    phoneMask(event)

    expect(event.target.value).toBe('(11) 2622-2622')
  })

  it('should mask an incomplete mobile phone number', () => {
    const event = {
      target: {
        value: '22999999',
      },
    } as React.ChangeEvent<HTMLInputElement>

    phoneMask(event)

    expect(event.target.value).toBe('(22) 99999-9')
  })

  it('should mask an incomplete landline number', () => {
    const event = {
      target: {
        value: '1126222',
      },
    } as React.ChangeEvent<HTMLInputElement>

    phoneMask(event)

    expect(event.target.value).toBe('(11) 2622-2')
  })
})
