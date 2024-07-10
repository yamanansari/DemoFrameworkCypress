/// <reference types='cypress' />

import 'cypress-iframe'
import { LoginPage } from '../support/pageObjects/LoginPage';

Cypress.Commands.add('amazonLogin', (email, password) => {
  const loginPage = new LoginPage();
  loginPage.typeInEmail(email);
  loginPage.clickContinue();
  loginPage.typeInPassword(password);
  loginPage.clickSignIn();
});
