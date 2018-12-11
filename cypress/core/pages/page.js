export default class Page {

    constructor() {
        this.url = "";
        this.protocol = "https://";
        this.domain = "dou.ua";
    }

    openHomePage() {
        cy.visit(this.protocol + this.domain);
    }

    openUrl(url) {
        cy.visit(this.protocol + this.domain + url);
    }

    getTitle(){
        return cy.title();
    }

    titleShouldHaveText(titleText){
        cy.title().should('eq',titleText);
    }
}
