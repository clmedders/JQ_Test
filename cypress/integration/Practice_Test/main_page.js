describe("make sure site works", () => {
	beforeEach(() => {
		//page should load fully 
		cy.visit("https://www.joshqueen.com/")

	})

	it("desktop nav should contain about link with about context", () => {
		//create an array of path values in the nav
		const pathValues = [
			'/about', '/merch', '/contact',
		]
		//loop through path values 
		//for each value find the header nav for desktop
		//from within the desktop nav find this values link 
		//clicking link should take me to the values page
		pathValues.forEach(value => {
			cy.get('.header-display-desktop').within(() => {
				cy.get(`[href="${value}"]`, { log: true }).click()
				cy.url().should('include', value)
			})
		});


		//console.log(link)
		//cy.get('[href="/merch"]')
		//cy.get('[href="/contact"]')
		//cy.contains('About').click()
		//cy.contains("Merch").click()
		//cy.contains("Contact").click()
	})


	it("Page can be scrolled to the bottom", () => {
		//page should be able to scroll to bottom 
		//should contain 'tour dates'
		cy.scrollTo("bottom")
		cy.contains('Tour dates')
	})

	it('scroll halfway', () => {
		cy.scrollTo("center")
	})

	it('header social media icons are working', () => {
		//create path aray for heaer url  
		//
		const extURLs = [
			"https://www.instagram.com/joshqueenmusic", 
			"http://www.facebook.com/joshqueenmusic", 
			"https://www.youtube.com/channel/UCGKkW-dYjNIrCDIv6RfaczQ",
		]
		//loop through path values 
		//for each value find the header nav for desktop
		//from within the desktop nav find this values link 
		//clicking link should take me to the values page
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
