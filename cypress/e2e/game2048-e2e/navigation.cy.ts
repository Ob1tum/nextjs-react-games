/// <reference types="cypress" />

context('Navigation buttons main page', () => {
  beforeEach(() => {
    cy.visit('/profile/games/game2048');
  });

  it('play button', () => {
    cy.get('button').contains('PLAY').click();
    cy.location('pathname').should('include', 'games/game2048/game');
  });
  it('settings button', () => {
    cy.get('button').contains('SETTINGS').click();
    cy.location('pathname').should('include', 'settings');
  });
  it('score button', () => {
    cy.get('button').contains('SCORES').click();
    cy.location('pathname').should('include', 'score-table');
  });
});

context('Navigation game page', () => {
  beforeEach(() => {
    cy.visit('/profile/games/game2048/game');
  });

  it('reload the page', () => {
    cy.reload();
    cy.reload(true);
  });
});

context('Navigation buttons game page', () => {
  beforeEach(() => {
    cy.visit('/profile/games/game2048/game');
  });

  it('home button', () => {
    cy.get('.HomeButton_btn__CpNew').click();
    cy.location('pathname').should('not.include', 'games/game2048/game');
  });
  it('setting button', () => {
    cy.get('.SettingsButton_btn__AC8BT').click();
    cy.location('pathname').should('include', 'settings');
  });
});

context('Navigation buttons settings page', () => {
  beforeEach(() => {
    cy.visit('/profile/games/game2048/settings');
  });

  it('home button', () => {
    cy.get('.HomeButton_btn__CpNew').click();
    cy.location('pathname').should('include', 'games/game2048');
  });
  it('play button', () => {
    cy.get('.PlayButton_btn__BFZS8').click();
    cy.location('pathname').should('include', 'games/game2048/game');
  });
});

export {};
