const querystring = require('querystring');

const apiHost = 'https://jira.uqam.ca/rest/api/latest/search?jql=';

const jqlParams = {
  assignee: 'moller_n',
  startAt: 2,
  maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;
console.log(`My call is: ${apiUrl}`);
