import Page from './Page';

class HomePage extends Page {

    constructor(){
        super();
        this.baseUrl = 'http://the-internet.herokuapp.com';
    }
   

    get pageheading() {return browser.element('.heading');}
    get pagesubheading() {return browser.element("h2");}

    open(){
        super.open(this.baseUrl)
    }
}

export default new HomePage();