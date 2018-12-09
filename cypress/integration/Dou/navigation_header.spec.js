/// <reference types="Cypress" />
import NavigationHeadingPage from "../../core/pages/navigation-heading.page";

let navigationHeadingPage = new NavigationHeadingPage;

describe('Navigation header', function () {

    beforeEach(function() {
        navigationHeadingPage.open("");
    });

    it('Basic navigation', function () {
        navigationHeadingPage.getTitle().should('eq', 'Сообщество программистов | DOU');
        navigationHeadingPage._homeTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Форум');
        navigationHeadingPage.getTitle().should('eq', 'Форум программистов | DOU');
        navigationHeadingPage._forumTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Лента');
        navigationHeadingPage.getTitle().should('eq', 'Новые записи — Лента | DOU');
        navigationHeadingPage._articlesTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Зарплаты');
        navigationHeadingPage.getTitle().should('eq', 'Cтатистика зарплат программистов,' +
                                                      ' тестировщиков и PM в Украине | DOU');
        navigationHeadingPage._salariesTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Работа');
        navigationHeadingPage.getTitle().should('eq', 'Вакансии | DOU');
        navigationHeadingPage._jobsTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Календарь');
        navigationHeadingPage.getTitle().should('eq', 'Календарь ИТ-событий | DOU');
        navigationHeadingPage._calendarTab.shouldHaveClass('sel');

    });

});