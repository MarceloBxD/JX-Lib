import { ChangeEvent } from 'react'

export function cepMask(event: ChangeEvent<HTMLInputElement>) {
  // Getting the input value
  let { value } = event.target

  // Formatting the CEP
  event.target.maxLength = 9
  value = value.replace(/\D/g, '').trim()
  value = value.replace(/(\d{5})(\d)/, '$1-$2')

  // Updating the input value
  event.target.value = value
}
