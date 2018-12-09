
export default class Page {


    constructor() {
        this.url = "";
        this.protocol = "https://";
        this.domain = "dou.ua";
    }


    open(url) {
        cy.visit(this.protocol + this.domain + url)
    }

    getTitle(){
        return cy.title();
    }
}
