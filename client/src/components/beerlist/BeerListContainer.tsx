import * as React from "react";
import { IState } from "../../state/beerList";
import {BeerList} from "./BeerList";
import {InputArea} from "./InputArea";

interface IOwnProps {
    beerList: IState;
    addItem: (name: any) => void;
    changeItem: (name: any) => void;
}

export const BeerListContainer: React.SFC<IOwnProps> = (props) => {
    const {beerList, addItem, changeItem} = props;

    return (
        <div>
            <InputArea
                text={beerList.text}
                onSubmit={(name: string) => addItem(name)}
                onChange={(name: string) => changeItem(name)}
            />
            <BeerList items={beerList.beers}/>
        </div>
    );
};

export default BeerListContainer;
