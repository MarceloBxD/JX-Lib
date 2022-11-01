// Número deve ser float no formato 0.00

export const currencyMask = (number: number | string) => {
  if (!number) return 'R$ '
  let value = number.toString()
  // replace all characters not numbers
  value = value.replace(/\D/g, '')
  // insert prefix between numbers
  value = value.replace(/(\d)/, 'R$ $1')
  // insert comma between two last numbers
  value = value.replace(/(\d)(\d{2})$/g, '$1,$2')
  // make groups of 3 numbers and set dot
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
  return value
}
