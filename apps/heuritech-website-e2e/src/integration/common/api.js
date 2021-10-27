/// <reference types="cypress" />

import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('I use the mocked api', () => {
  cy.intercept({
    url: 'http://localhost:3333/trends/*',
    method: 'PUT'
  }).as('putTrend');

  cy.intercept({
    url: 'http://localhost:3333/trends/*',
    method: 'DELETE'
  }).as('deleteTrend');

  cy.intercept('http://localhost:3333/trends*', { fixture: 'trends.json' }).as(
    'baseTrends'
  );

  cy.intercept(
    {
      url: 'http://localhost:3333/trends*',
      method: 'GET',
      query: { sort_by: 'growth' }
    },
    { fixture: 'trendsByGrowth.json' }
  ).as('trendsByGrowth');

  cy.intercept(
    {
      url: 'http://localhost:3333/trends*',
      method: 'GET',
      query: { sort_by: 'gender' }
    },
    { fixture: 'trendsByGender.json' }
  ).as('trendsByGender');

  cy.intercept(
    {
      url: 'http://localhost:3333/favorite_trends*',
      method: 'GET'
    },
    { fixture: 'favorites.json' }
  ).as('favoriteTrends');

  cy.intercept(
    {
      url: 'http://localhost:3333/favorite_trends*',
      method: 'GET',
      query: { sort_by: 'growth' }
    },
    { fixture: 'favoritesByGrowth.json' }
  ).as('favoritesByGrowth');

  cy.intercept(
    {
      url: 'http://localhost:3333/moodboards/*',
      method: 'GET'
    },
    {
      fixture: 'moodboard.json'
    }
  ).as('moodboard');
});

When('I wait for the api response {string}', (requestAlias) => {
  cy.wait(`@${requestAlias}`);
});
