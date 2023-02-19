///<reference types="cypress"/>


let dadosLogin
context('Funcionalidade login', () => {
  before(() => {
    cy.fixture('perfil').then(perfil => {
      dadosLogin = perfil

    })
  })
  beforeEach(() => {
    cy.visit('minha-conta')
  })


  it('Deve fazer login com sucesso', () => {
    cy.fazerLogin(dadosLogin.usuario, dadosLogin.senha)
    cy.get('.page-title').should('contain', 'Minha conta')

  })
});

