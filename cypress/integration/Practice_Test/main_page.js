describe("make sure site works", () => {
	beforeEach(() => {
		//page should load fully 
		cy.visit("https://www.joshqueen.com/")

	})
	it("desktop nav should contain information links in header with page context", () => {
		cy.get('.header-display-desktop .header-nav-item', { log: true  }).each(($li, index) => {
			console.log($li, index)  //Do not push up code that has console.log in it 
			console.log($li[0].children[0].attributes[0].value) //#Do not push up code that has console.log in it 
			const value = $li[0].children[0].attributes[0].value //#this is the stack trace when you go to the console in the inspect tool and can find it when looking at the attrubites you can copy this from the consle in inspect 
			cy.get('.header-display-desktop').within(() => {
				cy.get(`[href="${value}"]`, { log: true }).click()
				cy.url().should('include', value)
				//#this test confrims everything in the header display desktop so that it doenst matter if things are taken away or if they are added it will still test no matter what 
			})		
		})
	})
	it('scroll halfway', () => {
		cy.scrollTo("center")
	})
	it('can type email in field', () => {
		cy.get('[name="email"]').type('john-doe@example.com')
	})
	it('pre order now button works', () => {
		cy.get('[class="image-button-inner"]').click()
		cy.url().should('include', 'merch')
	})
	it('merch buttons take you to the correct page', () => {
		cy.get('[id="block-92a18c583f745eed6b6e"]').click()
		cy.url().should('include', 'poster')
		cy.go('back')
		cy.get('[id="block-94cbe767402f32aa8ae6"]').click()
		cy.url().should('include', 'album')
		cy.go('back')
		cy.get('[id="block-e67412d387ecff370d3d"]').click()
		cy.url().should('include', 't-shirt')

	})
	it("Page can be scrolled to the bottom", () => {
		//page should be able to scroll to bottom 
		//should contain 'tour dates'
		cy.scrollTo("bottom")
		cy.contains('Tour dates')
	})
	it('header social media icons are working', () => {
		//create path aray for header url  
		const extURLs = [
			"https://www.instagram.com/joshqueenmusic", 
			"http://www.facebook.com/joshqueenmusic", 
			"https://www.youtube.com/channel/UCGKkW-dYjNIrCDIv6RfaczQ", // #this is an aray be sure to use a comma when breaking them up 
			'https://distrokid.com/hyperfollow/joshqueen/things-you-tell-the-people-you-love'
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
			cy.get('.sqs-svg-icon--list').within(() => {
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
})
