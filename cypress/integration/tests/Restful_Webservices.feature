Feature: To test various RESTFUL API services!

# @smoke
# Scenario: To validate listing a user in a specific page
# 	Given I initiate a "GET" request with the following data
# 	|	key			|	value	|
# 	|	uri			|	users?page=2	|
# 	|	status_code	|	200	|
# 	|	resp_data	|	page:2,per_page:6,total:12	|

# @smoke
# Scenario: To validate a creation of a single user
# 	Given I initiate a "POST" request with the following data
# 	|	key			|	value	|
# 	|	uri			|	users/2	|
# 	|	req_body	|	{"name": "morpheus","job": "zion resident"}	|
# 	|	status_code	|	201	|

# @smoke
# Scenario: To validate a put request for a single user
# 	Given I initiate a "PUT" request with the following data
# 	|	key			|	value	|
# 	|	uri			|	users/2	|
# 	|	req_body	|	{"name": "morpheus","job": "zion resident"}	|
# 	|	status_code	|	200	|

# @smoke
# Scenario: To validate a patch request for a single user
# 	Given I initiate a "PATCH" request with the following data
# 	|	key			|	value	|
# 	|	uri			|	users/2	|
# 	|	req_body	|	{"name": "morpheus","job": "zion resident"}	|
# 	|	status_code	|	200	|
# @smoke
# Scenario: To validate deleting a single user
# 	Given I initiate a "DELETE" request with the following data
# 	|	key			|	value	|
# 	|	uri			|	users/2	|
# 	|	status_code	|	204	|

# @smoke
# Scenario: To validate example test
# 	Given I initiate a "GET" request with the following data
# 	|	key			|	value	|
# 	|	uri			|	public/v1/users	|
# 	|	status_code	|	200	|	

@smoke
Scenario: manifest API
	Given I initiate a "GET" request for manifest
	|	key			|	value		  |
	|	uri			|	manifest.json |
	|	status_code	|	200	          |	
	|	name 	    |   NuClear		  |
@smoke
Scenario: main CSS API
	Given I initiate a "GET" request for main css
	|	key			|	value		  |
	|	uri			|	static/css/main.16283704.css |
	|	status_code	|	200		      |	
