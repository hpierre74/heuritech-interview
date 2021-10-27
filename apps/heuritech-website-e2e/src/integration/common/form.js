/// <reference types="cypress" />

import { When } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

When('I select {string} in {string}', (selectedValue, selectElement) => {
  cy.get(getConstant(selectElement))
    .click()
    .then(() => {
      cy.get(getConstant(selectedValue)).click();
    });
});
