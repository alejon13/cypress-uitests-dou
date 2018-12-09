import NavigationHeadingPage from "./navigation-heading.page";
import Component from "../components/component";

export default class HomePage extends NavigationHeadingPage{


    constructor() {
        super();
        this._eventsHeader = new Component("#popularEventsId h3");
        this._columnistsHeader = new Component(".col44 > .b-index-columnisty h3");
        this._popularTopicsHeader = new Component(".b-index-forum h3");
        this._topCommentsHeader = new Component(".b-index-discussions h3");
    }
}