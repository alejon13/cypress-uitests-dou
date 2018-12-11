import NavigationHeadingPage from "./navigation-heading.page";
import Component from "../components/component";
import Select from "../components/select";

export default class HomePage extends NavigationHeadingPage{

    constructor() {
        super();
        this._eventsHeader = new Component("#popularEventsId h3");
        this._columnistsHeader = new Component(".col44 > .b-index-columnisty h3");
        this._popularTopicsHeader = new Component(".b-index-forum h3");
        this._topCommentsHeader = new Component(".b-index-discussions h3");
        this._popularTopicsLabel = new Component(".b-articles-switch li:nth-of-type(2) [href]");
        this._popularTopicsRangeSelect = new Select("select");
        this._theMostPopularTopicLink = new Component("#fp-articles_top240m > :nth-child(1) > .link");
    }
}