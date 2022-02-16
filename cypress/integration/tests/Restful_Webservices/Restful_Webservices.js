import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { object, flatten, rest } from 'underscore'

Given('I initiate a {string} request for manifest', (req_type,dataTable) => {
	const data = object(rest(dataTable.rawTable || []));
	cy.request(req_type,'https://nuclear-qa.int.thomsonreuters.com/'+data.uri).then(function(resopose){
		console.log(resopose.body)
		expect(resopose.body).property('short_name').to.equal(data.name)
		expect(resopose.status).to.eq(200)
	})
});


Given('I initiate a {string} request for main css', (req_type,dataTable) => {
	const data = object(rest(dataTable.rawTable || []));
	cy.request(req_type,'https://nuclear-qa.int.thomsonreuters.com/'+data.uri).then(function(resopose){
		console.log(resopose.body)
		//expect(resopose.body).property('short_name').to.equal(data.name)
		expect(resopose.status).to.eq(200)
	})
});

