describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('https://www.liferay.com').then((window) => {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

      expect(loadTime).to.equal(1)
    })

    cy.visit('https://www.liferay.com').then((window) => {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

      expect(loadTime).to.equal(1)
    })

    cy.visit('https://www.liferay.com').then((window) => {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

      expect(loadTime).to.equal(1)
    })
  })
})