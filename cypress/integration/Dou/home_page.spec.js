/// <reference types="Cypress" />
import HomePage from "../../core/pages/home.page";

let homePage = new HomePage();

describe('Home page', function () {

    beforeEach(function() {
        homePage.openHomePage();
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

    it('The most popular topic', function () {
        homePage._popularTopicsLabel.click();
        homePage._popularTopicsRangeSelect.selectOption('за все время');
        homePage._theMostPopularTopicLink.shouldHaveTextWithReplaceNbsp('Суровая реальность начинающих тестировщиков. ' +
                                                                        'Пособие: что и как учить');
        });

});