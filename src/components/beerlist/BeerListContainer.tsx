import * as React from "react";
import {BeerList} from "./BeerList";
import {InputArea} from "./InputArea";

interface IBeerListContainerState {
    beers: any;
}

export class BeerListContainer extends React.Component<{}, IBeerListContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            beers: []
        };
        this.addItem = this.addItem.bind(this);
    }

    public addItem(name: any) {
        this.setState({
            beers: [].concat(this.state.beers).concat(name)
        });
    }

    public render() {
        return <div>
            <InputArea onSubmit={this.addItem}/>
            <BeerList items={this.state.beers}/>
        </div>
    }
}
