/// <reference types="cypress" />
import 'cypress-real-events/support';
import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

Then('I should see {int} trend tiles', (itemNumber) => {
  cy.get(getConstant('trends list'))
    .children()
    .should('have.length', itemNumber);
});

When('I click on trend item {int}', (index) => {
  cy.get(`${getConstant('trend item')}:nth-of-type(${index})`).click();
});

Then('Trend item {int} should contain {string}', (index, value) => {
  cy.get(`${getConstant('trend item')}:nth-of-type(${index})`).contains(value);
});

When('I hover trend item number {int}', (index) => {
  cy.get(`${getConstant('trend item')}:nth-of-type(${index})`).realHover();
});

Then('Trends should be sorted by growth', () => {
  const cypressTextToNumber = ($el) => parseInt($el.text().replace('%', ''));
  const htmlTextToNumber = (el) =>
    el.innerText && parseInt(el.innerText.replace('%', ''));

  cy.get(getConstant('trend growth')).each(($growth, index, $list) => {
    const currentValue = cypressTextToNumber($growth);
    const nextValue = $list[index] && htmlTextToNumber($list[index]);
    if (nextValue && currentValue < nextValue) {
      throw new Error('Elements are not sorted');
    }
  });
});
