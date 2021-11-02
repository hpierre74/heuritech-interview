/// <reference types="cypress" />

import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

Then('I should see a {string}', (constantName) => {
  cy.get(getConstant(constantName)).should('be.visible');
});

Then('I should see the {int} {string}', (index, selector) => {
  cy.get(`${getConstant(selector)}:nth-of-type(${index})`).should('be.visible');
});

Then('I should not see a {string}', (constantName) => {
  cy.get(getConstant(constantName)).should('not.be.visible');
});

Then('There should be a {string}', (constantName) => {
  cy.get(getConstant(constantName)).should('exist');
});

Then('There should not be a {string}', (constantName) => {
  cy.get(getConstant(constantName)).should('not.exist');
});

Then('{string} should contain {string}', (selectorConstant, content) => {
  const selector = getConstant(selectorConstant);

  cy.get(selector).contains(content);
});

Then('{string} should not contain {string}', (selectorConstant, content) => {
  const selector = getConstant(selectorConstant);

  cy.get(selector).not.contains(content);
});

When('I click outside', () => {
  cy.get('body').click();
});

When('I click on {string}', (selector) => {
  cy.get(getConstant(selector)).click();
});

When('I click on the {int} {string}', (index, selector) => {
  cy.get(`${getConstant(selector)}:nth-of-type(${index})`).click();
});

Then('I should count {int} {string} in {string}', (itemNumber, _, selector) => {
  cy.get(getConstant(selector)).children().should('have.length', itemNumber);
});
