 var _ = require('lodash');
 var data_fixtures = require('../../data/data-fixtures/test_data');


 var validate_equality = function( test_data,response_data){

     var result = _.isEqual(data_fixtures.test_data,response_data);
     if(result) return result;
     else return("Expected : " + JSON.stringify(data_fixtures.test_data) + 
                    "\n" + "Recieved : " + JSON.stringify(response_data));
 };

 module.exports = {
     "validateData":validate_equality
 };