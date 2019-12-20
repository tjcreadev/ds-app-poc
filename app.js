const request = require('request');
const fs = require('fs');
const chalk = require('chalk');
const mongodb = require('./utils/mongodb');

const user = JSON.parse(fs.readFileSync('./user.json'));
const userRequests = user.serviceRequests;
const servReqs = JSON.parse(fs.readFileSync('./requests.json'));

// List service requests associated with user
const getRequests = (() => {
    let gotRequests = [];
    userRequests.forEach(userRequest => {        
        let result = servReqs.find(request => {
            return request.requestID === userRequest;
        })
        gotRequests.push(result.recover);
    })
    console.log(gotRequests);
})

getRequests();