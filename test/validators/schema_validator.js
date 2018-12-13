var ajv = require('ajv');
var _ = require('lodash');
var model_data = require('../../data/data-models/sample_model');
var env = new ajv();

var transformErrorMessage = function(errorArray){
    var message = ""
    errorArray.reduce(function(errormessage,error){
        message += "Exception in "
         errormessage + _.forOwn(error,function(value,key,object){
            message += key + ":" + value + "," ;
        })
        message += "\n";
    },"");

    return message;
}

var validator = function(name,response){
    var schema = model_data[name];
     var validate = env.compile(schema);
     var valid = validate(response);
     if(!valid) return transformErrorMessage(validate.errors);
     return valid;
};

module.exports = {
    'validateSchema':validator
}