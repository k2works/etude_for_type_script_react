import * as React from "react";
import {BeerList} from "./BeerList";
import {InputArea} from "./InputArea";

export class BeerListContainer extends React.Component<object, object> {
    constructor(props: any) {
        super(props);
        this.state = {
            beers: []
        };
    }

    public render() {
        return <div>
            <InputArea/>
            <BeerList/>
        </div>
    }
}
