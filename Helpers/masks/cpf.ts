import { ChangeEvent } from 'react'

export function cpfMask(event: ChangeEvent<HTMLInputElement>) {
  // Getting the input value
  let { value } = event.target

  // Removing all the non-numeric characters
  value = value.replace(/\D/g, '').trim()

  // Formatting the CPF
  event.target.maxLength = 14
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(.)(\d{3})(\d)/, '$1$2$3.$4')
  value = value.replace(/(\d{3})(.)(\d{3})(.)(\d{3})(\d)/, '$1$2$3$4$5-$6')

  // Updating the input value
  event.target.value = value
}
