import { IHeaderItem } from "../interfaces/iheader-item.interface";

export class HeaderItem implements IHeaderItem {
    label: string;
    route: string;

    constructor(label: string, route: string) {
        this.label = label;
        this.route = route;
    }

}
