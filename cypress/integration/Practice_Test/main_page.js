describe("make sure site works", () => {
	beforeEach(() => {
		//page should load fully 
		cy.visit("https://www.joshqueen.com/")

	})
	it("desktop nav should contain information links with page context", () => {
		// const pathValues = []
		cy.get('.header-display-desktop .header-nav-item', { log: true  }).each(($li, index) => {
			console.log($li, index)
			console.log($li[0].children[0].attributes[0].value)
			const value = $li[0].children[0].attributes[0].value
			cy.get('.header-display-desktop').within(() => {
				cy.get(`[href="${value}"]`, { log: true }).click()
				cy.url().should('include', value)
			})		
		})
		it('header social media icons are working', () => {
			//create path aray for heaer url  
			const extURLs = [
				"https://www.instagram.com/joshqueenmusic", 
				"http://www.facebook.com/joshqueenmusic", 
				"https://www.youtube.com/channel/UCGKkW-dYjNIrCDIv6RfaczQ",
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
						});
	
				})
			})
		})

	})
	it('scroll halfway', () => {
		cy.scrollTo("center")
	})

	it("Page can be scrolled to the bottom", () => {
		//page should be able to scroll to bottom 
		//should contain 'tour dates'
		cy.scrollTo("bottom")
		cy.contains('Tour dates')
	})

})
