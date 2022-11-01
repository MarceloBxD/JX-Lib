import { ChangeEvent } from 'react'

export function phoneMask(event: ChangeEvent<HTMLInputElement>) {
  // Getting the input value
  let { value } = event.target

  // Removing all the non-numeric characters
  value = value.replace(/\D/g, '').trim()
  // Formatting the DDD
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  // Checking if it is mobile (has a 9 after the DDD)
  const isMobilePhone = /^[(][0-9][0-9][)][\s][9]/.test(value)

  // If it is a mobile number, format accordingly
  if (isMobilePhone) {
    event.target.maxLength = 15
    value = value.replace(/(\(\d{2}\))(\d)/, '$1 $2')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    value = value.replace(/(\d{4})/, '$1')
  } else {
    // If it not a mobile number, format accordingly
    event.target.maxLength = 14
    value = value.replace(/(\d{4})(\d)/, '$1-$2')
    value = value.replace(/(\d{4})/, '$1')
  }

  // Updating the input value
  event.target.value = value
}
