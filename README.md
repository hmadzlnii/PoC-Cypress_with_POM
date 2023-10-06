# PoC-Cypress with Page Object Model pattern
This repository contains a Proof of Concept (PoC) implementation of end-to-end testing using Cypress with the Page Object Model (POM) pattern. The Page Object Model is a design pattern that helps organize and maintain your Cypress test code by abstracting away the details of the web page structure into separate page objects.

## Difference *with* and *without* POM
So here is the difference:
- simple example **without** POM [here](https://github.com/hmadzlnii/PoC-Cypress_with_POM/blob/master/cypress/e2e/withoutPOM.cy.ts)
```javascript
  it('login test', function () {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
  })
```
- simple example **with** POM [here](https://github.com/hmadzlnii/PoC-Cypress_with_POM/blob/master/cypress/e2e/withPOM.cy.ts)
```javascript
  it('login test', function(){
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPasswordd('test')
    loginPage.clickLogin()
  })
```
## Advantages from using POM is: 
- Reusability of the same selectors/locator in different classes/tests
- Clear and more readable architecture
- Easy to fix failed **tests** by fixing locator/selector in one place
- Enhanced Test Coverage
- Improved Collaboration




