import Page from './page'

class TestPage extends Page {

    get username() { return cy.get('input[id="Username"]') }
    get password() { return cy.get('input[id="Password"]') }
    get submitBtn() { return cy.get('type="submit"') }
    get addEmployee() { return cy.get('id="add"') }
    get firstName() { return cy.get('id="firstName"') }
    get lastName() { return cy.get('id="lastName"') }
    get dependants() { return cy.get('id="dependants"') }
    get addEmployeeBtn() { return cy.get('id="addEmployee"') }
    get edit() { return cy.get('class="fas.fa-edit"') }
    get delete() { return cy.get('class="fas.fa-times"') }
    get deleteEmployee() { return cy.get('id="deleteEmployee"') }
}

export default new TestPage()