import { defineSupportCode } from 'cucumber'

defineSupportCode(function({ Given, When, Then }) {
  When('this runs', () => {})

  Then('it passes', () => {})
})