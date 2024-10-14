const priceFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
})

const priceParcelFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})
export { priceFormatter, priceParcelFormatter }
