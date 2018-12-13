var mochaOpts ={
    "grep":"",
    "ui":"bdd",
    "reporter":"mocha-allure-reporter",
    "timeout":"",
    "bail":"",
    "useColors":"",
    "retries":"",
    "slow":"",
    "ignoreLeaks":"",
    "fullTrace":""
    };

var testDir = "./test/test_specs/apiTest"

module.exports= {
    "mochaOpts":mochaOpts,
    "testDir":testDir
}

