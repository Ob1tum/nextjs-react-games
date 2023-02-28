describe('check header on main page', () => {
  it('.should() - make an assertion about the current subject', () => {
    cy.visit('/profile/games/game2048');
    cy.get('.MainPage_heading__ESZf7')
      .should('have.text', '2048')
      .should('contain', '2048')
      .should('have.html', '2048');
  });
});

describe('Game 2048 E2E Main Page', () => {
  it('should have buttons', () => {
    cy.visit('/profile/games/game2048');
    cy.get('button').should('have.text', 'PLAYSETTINGSSCORES');
  });
});

describe('Game 2048 E2E Game Page', () => {
  it('should have buttons', () => {
    cy.visit('/profile/games/game2048/game');

    cy.get('button').should('have.text', '');
  });
});

describe('Game 2048 E2E Settings Page', () => {
  it('should have buttons', () => {
    cy.visit('/profile/games/game2048/settings');

    cy.get('button').should('have.text', 'REDBLUEYELLOWGREENPURPLE');
  });
});

export {};
