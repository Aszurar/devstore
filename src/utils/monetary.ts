const priceFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
})

export { priceFormatter }
