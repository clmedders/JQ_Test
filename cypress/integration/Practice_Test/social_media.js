it('header social media icons are working', () => {
  //create path aray for header url  
  const extURLs = [
    "https://www.instagram.com/joshqueenmusic", 
    "http://www.facebook.com/joshqueenmusic", 
    "https://www.youtube.com/channel/UCGKkW-dYjNIrCDIv6RfaczQ", // #this is an aray be sure to use a comma when breaking them up 
  ]
  //loop through extURLs stes 
  //for each URL find the icon nav for desktop
  //from within the desktop nav find this values link 
  //verify that the social media icons are active 
  extURLs.forEach(value => {
    cy.get('.header-display-desktop .header-actions-action').within(() => {
      //cy.get(`[href="${value}"]`, {log: true}).click()
      //cy.url().should('include', value)
      cy.get(`[href="${value}"]`)
        .then(link => {
          cy
            .request(link.prop('href'))
            .its('status')
            .should('eq', 200);
            // #cypress can not open another tab and still test, the last part checks the staus of the link to make sure that it is active 
        });

    })
  })
})
it('bottom social media icons are working', () => {
  //create path aray for header url  
  const extURLs = [
    "https://www.instagram.com/joshqueenmusic", 
    "http://www.facebook.com/joshqueenmusic", 
    "https://www.youtube.com/channel/UCGKkW-dYjNIrCDIv6RfaczQ", // #this is an aray be sure to use a comma when breaking them up 
  ]
  //loop through extURLs stes 
  //for each URL find the icon nav for desktop
  //from within the desktop nav find this values link 
  //verify that the social media icons are active 
  extURLs.forEach(value => {
    cy.get('.sqs-block socialaccountlinks-v2-block sqs-block-socialaccountlinks-v2').within(() => {
      //cy.get(`[href="${value}"]`, {log: true}).click()
      //cy.url().should('include', value)
      cy.get(`[href="${value}"]`)
        .then(link => {
          cy
            .request(link.prop('href'))
            .its('status')
            .should('eq', 200);
            // #cypress can not open another tab and still test, the last part checks the staus of the link to make sure that it is active 
        });

    })
  })
})