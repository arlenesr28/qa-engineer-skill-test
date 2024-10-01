/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

// getting a random name
let randomFirstName = faker.person.firstName()
let randomLastName = faker.person.lastName()
// getting a random email
let randomEmail = faker.internet.email()

// function to navigate to the website 
export function navigate() {
    cy.visit("/");
}

// function to choose a product
export function chooseProduct () {
    // click on Products link
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    // adding an assertion to check that the url contains the /products 
    cy.url().should('include', '/products')
    // scroll to see products 
    cy.scrollTo(0, 500) 
    // select the third product 
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
}

export function addProduct () {
    // function to get random numbers
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      // getting a random number between 1 and 20 
      let randomNumber = getRandomNumber(1, 20);
      // typing the random number
      cy.get('#quantity').clear().type(randomNumber)
      // clicking adding to cart button
      cy.get(':nth-child(5) > .btn').click()
      // going to the cart
      cy.get('u').click()
      // clicking on Proceed to Checkout button
      cy.get('.col-sm-6 > .btn').click()
      // clicking on Register / Login
      cy.get('.modal-body > :nth-child(2) > a > u').click()
}

export function registerLogin () {
    // typing full name and email to register new user
    cy.get('[data-qa="signup-name"]').type(randomFirstName + " " + randomLastName)
    cy.get('[data-qa="signup-email"]').type(randomEmail)
    cy.get('[data-qa="signup-button"]').click()
    // adding a password
    cy.get('[data-qa="password"]').type(faker.lorem.word(8))

    cy.scrollTo(0, 300) 
    // adding all the information needed
    cy.get('[data-qa="first_name"]').type(randomFirstName)
    cy.get('[data-qa="last_name"]').type(randomLastName)
    cy.get('[data-qa="company"]').type(faker.company.name())
    cy.get('[data-qa="address"]').type(faker.location.streetAddress())
    cy.get('[data-qa="country"]').select(1)
    cy.get('[data-qa="state"]').type(faker.location.state())
    cy.get('[data-qa="city"]').type(faker.location.city())
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
    cy.get('[data-qa="mobile_number"]').type(faker.phone.number({ style: 'international' }))
    cy.get('[data-qa="create-account"]').should('be.visible').click()
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
}

export function Checkout() {
    // click on the cart link
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    // click on Proceed to Checkout button
    cy.get('.col-sm-6 > .btn').click()
    // scroll to bottom
    cy.scrollTo('bottom')
    // click on Place Order button
    cy.get(':nth-child(7) > .btn').should('be.visible').click()
    // addind fake credit card number information
    cy.get('[data-qa="name-on-card"]').type(randomFirstName + " " + randomLastName)
    cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
    cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
    cy.get('[data-qa="expiry-month"]').type(faker.date.future().getMonth())
    cy.get('[data-qa="expiry-year"]').type(faker.date.future().getFullYear())
    // click on pay button
    cy.get('[data-qa="pay-button"]').should('be.visible').click()
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
}

export function logOut() {
    // Loggin out of the application 
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    // cy.get('.nav > :nth-child(4) > a').click()
}