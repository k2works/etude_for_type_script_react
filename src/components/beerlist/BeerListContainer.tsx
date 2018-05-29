import * as React from "react";
import {InputArea} from "./InputArea";
import {BeerList} from "./BeerList";

export class BeerListContainer extends React.Component<object, object> {
    public render() {
        return <div>
            <InputArea/>
            <BeerList/>
        </div>
    }
}
