/**
 * npm package imports
 */
var chai = require('chai'),chaihttp = require('chai-http');
chai.use(chaihttp);
var _ = require('lodash');

/**
 * user defined imports
 */

var validateSchema = require('../../validators/schema_validator').validateSchema;
var validateData = require('../../validators/data_validator').validateData;
var api = require('../../../config/supertest_Opts').api;

/**
 * Each describe contains a test suite
 * Each it contains a test case
 */

describe('Test Suite : HTTP Verb Tests',function(){
    it('Test Case : Test a GET METHOD',function(done){
        api.get('/posts/1')
        .expect(200)
        .expect(function(res){
               var result =  validateSchema("user_post_schema",res.body);
               if(!_.isBoolean(result)){
                   throw new Error(result);
               }
        })
        .expect(function(res){
            var result = validateData("user_post_data",res.body);
            if(!result) throw new Error(result);
            
        })
        .end(function(err,res){
            if(err) return done(err);
            done();
        })
    });

    it('Test Case : Test a POST METHOD',function(){

    });

    it('Test Case : Test a PUT METHOD',function(){

    });

    it('Test Case : Test a DELETE METHOD',function(){

    });
})