import Component from "./component";

export default class Select extends Component {

    constructor(selector) {
        super(selector);
    }

    selectOption(option){
        this.element.select(option);
    }
}