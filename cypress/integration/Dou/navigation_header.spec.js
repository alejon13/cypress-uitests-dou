/// <reference types="Cypress" />
import NavigationHeadingPage from "../../core/pages/navigation-heading.page";

let navigationHeadingPage = new NavigationHeadingPage;

describe('Navigation header', function () {

    beforeEach(function() {
        navigationHeadingPage.openHomePage();
    });

    it('Basic navigation', function () {
        navigationHeadingPage.titleShouldHaveText('Сообщество программистов | DOU');
        navigationHeadingPage._homeTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Форум');
        navigationHeadingPage.titleShouldHaveText('Форум программистов | DOU');
        navigationHeadingPage._forumTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Лента');
        navigationHeadingPage.titleShouldHaveText('Новые записи — Лента | DOU');
        navigationHeadingPage._articlesTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Зарплаты');
        navigationHeadingPage.titleShouldHaveText('Cтатистика зарплат программистов, тестировщиков и PM в Украине | DOU');
        navigationHeadingPage._salariesTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Работа');
        navigationHeadingPage.titleShouldHaveText('Вакансии | DOU');
        navigationHeadingPage._jobsTab.shouldHaveClass('sel');
        navigationHeadingPage.switchTo('Календарь');
        navigationHeadingPage.titleShouldHaveText('Календарь ИТ-событий | DOU');
        navigationHeadingPage._calendarTab.shouldHaveClass('sel');
    });

});