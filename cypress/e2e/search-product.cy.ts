describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should be able search product and add it to the cart', () => {
    cy.searchByQuery('Camiseta')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for products', () => {
    cy.searchByQuery('Camiseta')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=Camiseta')

    cy.get('a[href^="/product"]').first().should('exist')
  })

  it('should not be able to visit search page without search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('not.include', '/search')
  })
})
