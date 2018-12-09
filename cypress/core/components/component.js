export default class Component {


    constructor(selector) {
        this.selector = selector;
    }


    get element() {
        return cy.get(this.selector);
    }

    shouldBeVisible() {
        this.element.should("be.visible");
    }

    shouldHaveText(text) {
        this.element.should("have.text", text);
    }

    shouldContainText(text) {
        this.element.should("contain", text);
    }

    shouldHaveClass(className) {
        this.element.should("have.class", className);
    }
}