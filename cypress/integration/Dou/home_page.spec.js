/// <reference types="Cypress" />
import HomePage from "../../core/pages/home.page";

let homePage = new HomePage();

describe('Home page', function () {

    beforeEach(function() {
        homePage.open("");
    });

    it('Visit dou.ua', function () {
        homePage.getTitle().should('eq', 'Сообщество программистов | DOU');
        homePage._homeTab.shouldHaveClass('sel');
        homePage._logo.shouldBeVisible();
        homePage._eventsHeader.shouldHaveText('События');
        homePage._columnistsHeader.shouldHaveText('Колумнисты');
        homePage._popularTopicsHeader.shouldHaveText('Популярное на форуме');
        homePage._topCommentsHeader.shouldHaveText('Обсуждают сейчас');
    });

});