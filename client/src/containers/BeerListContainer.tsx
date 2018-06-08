import { connect, Dispatch } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../actions/beerList";
import { BeerListContainer } from "../components/beerlist/BeerListContainer";

export function mapStateToProps({beerList, text}: any) {
    return {
        beerList,
        text
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.BeerListActions>) {
    return {
        addItem: (name: string) => dispatch(actions.addItem(name)),
        changeItem: (name: string) => dispatch(actions.changeItem(name))
    };
}

export default withRouter<any>(connect<any>(mapStateToProps,mapDispatchToProps)(BeerListContainer));

