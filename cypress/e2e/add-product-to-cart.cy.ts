describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/') // change URL to match your dev URL
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click() // click on the first product

    cy.location('pathname').should('include', '/product') // check if the URL is correct, should be /product/[slug]

    cy.contains('Adicionar ao carrinho').click() // click on the "Adicionar ao carrinho" button
    cy.contains('Cart (1)').should('exist') // check if the cart has 1 item
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click() // click on the first product
    cy.location('pathname').should('include', '/product') // check if the URL is correct, should be /product/[slug]

    cy.contains('Adicionar ao carrinho').click() // click on the "Adicionar ao carrinho" button
    cy.contains('Cart (1)').should('exist') // check if the cart has 1 item

    cy.contains('Adicionar ao carrinho').click() // click on the "Adicionar ao carrinho" button
    cy.contains('Cart (1)').should('exist') // check if the cart still has 1 item
  })
})
