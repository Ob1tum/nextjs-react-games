/// <reference types="cypress" />

context('Color change settings', () => {
  beforeEach(() => {
    cy.visit('/profile/games/game2048/settings');
  });

  it('red', () => {
    cy.get('button').contains('RED').click();
    cy.get('.PlayButton_btn__BFZS8').click();
    cy.get('.Number_number__NvOks')
      .should('have.css', 'background-color')
      .invoke('replace', /0.4|0.3/g, '')
      .should('equal', 'rgba(168, 10, 10, )');
  });

  it('blue', () => {
    cy.get('button').contains('BLUE').click();
    cy.get('.PlayButton_btn__BFZS8').click();
    cy.get('.Number_number__NvOks')
      .should('have.css', 'background-color')
      .invoke('replace', /0.4|0.3/g, '')
      .should('equal', 'rgba(57, 75, 144, )');
  });

  it('yellow', () => {
    cy.get('button').contains('YELLOW').click();
    cy.get('.PlayButton_btn__BFZS8').click();
    cy.get('.Number_number__NvOks')
      .should('have.css', 'background-color')
      .invoke('replace', /0.4|0.3/g, '')
      .should('equal', 'rgba(220, 183, 17, )');
  });

  it('green', () => {
    cy.get('button').contains('GREEN').click();
    cy.get('.PlayButton_btn__BFZS8').click();
    cy.get('.Number_number__NvOks')
      .should('have.css', 'background-color')
      .invoke('replace', /0.4|0.3/g, '')
      .should('equal', 'rgba(9, 122, 5, )');
  });

  it('purple', () => {
    cy.get('button').contains('PURPLE').click();
    cy.get('.PlayButton_btn__BFZS8').click();
    cy.get('.Number_number__NvOks')
      .should('have.css', 'background-color')
      .invoke('replace', /0.4|0.3/g, '')
      .should('equal', 'rgba(103, 65, 136, )');
  });
});

export {};
