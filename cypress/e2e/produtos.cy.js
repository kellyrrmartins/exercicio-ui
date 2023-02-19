/// <reference types="cypress"/>
import Produto from '../support/page_objects/produto-funcionalidade.page'
describe('Funcionalidade Página de Produto', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(perfil => {
      cy.fazerLogin(perfil.usuario, perfil.senha)
    })
  });

  it('De adicionar um produto ao carrinho ', () => {
    let quantidade = 3
    cy.fixture('produtos').then(produtos => {
      Produto.escolherProduto(
        produtos[0].produto,
        produtos[0].tamanho,
        produtos[0].cor,
        produtos[0].quantidade
      )

    })
    cy.fixture('produtos').then(produtos => {
      Produto.escolherProduto(
        produtos[1].produto,
        produtos[1].tamanho,
        produtos[1].cor,
        produtos[1].quantidade
      )

    })


    cy.carrinho()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
  });
});