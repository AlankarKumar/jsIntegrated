var supertest = require('supertest');

var baseurl = "https://jsonplaceholder.typicode.com";
var api = supertest(baseurl);

module.exports={
    "api":api
}