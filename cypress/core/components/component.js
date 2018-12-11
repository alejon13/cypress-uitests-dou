export default class Component {

    constructor(selector) {
        this.selector = selector;
    }

    get element() {
        return cy.get(this.selector);
    }

    click(){
        this.element.click();
    }

    shouldBeVisible() {
        this.element.should("be.visible");
    }

    shouldHaveText(text) {
        this.element.should("have.text", text);
    }

    shouldHaveTextWithReplaceNbsp(textToCompare) {
        this.element
            .invoke('text')
            .then((text) => {
            expect(text.replace(/\u00a0/g, " ")).equal(textToCompare);
        });
    }

    shouldContainText(text) {
        this.element.should("contain", text);
    }

    shouldHaveClass(className) {
        this.element.should("have.class", className);
    }
}