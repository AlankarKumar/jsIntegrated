import HomePage from '../../PageObjects/HomePage';

var expect = require('chai').expect;

describe('Test Suite : This suite tests the HomePage',function(){
    it('Test Case : This tests the page heading',function(){
        HomePage.open();
        expect(HomePage.pageheading.getText()).to.equal('Welcome to the-internet');
        
    });

    it('Test Case : This tests the page subheading',function(){
        HomePage.open();
        expect(HomePage.pagesubheading.getText()).to.equal('Available Examples');
        
    });

})