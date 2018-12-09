import Page from "./page";
import Component from "../components/component";

export default class NavigationHeadingPage extends Page {

    constructor() {
        super();
        this._logo = new Component(".logo > a");
        this._homeTab = new Component("ul > .m-hide > a");
        this._forumTab = new Component(".b-head > ul > :nth-child(3) > a");
        this._articlesTab = new Component(".b-head > ul > :nth-child(4) > a");
        this._salariesTab = new Component(".b-head > ul > :nth-child(5) > a");
        this._jobsTab = new Component(".b-head > ul > :nth-child(6) > a");
        this._calendarTab = new Component(".m-last > a");
        this._navTabs = new Component(".b-head ul");
        this._searchField = new Component("");
    }

    switchTo(tabName) {
        this._navTabs.element.contains(tabName).click();
    }
}