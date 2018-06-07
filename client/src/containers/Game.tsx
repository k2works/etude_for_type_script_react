import { connect, Dispatch } from "react-redux";
import { withRouter } from "react-router";
import * as actions from '../actions/game';
import Game, { IOwnProps } from "../components/game/Game";
import { IHistoryData } from "../state/game";

export function mapStateToProps({games}: IOwnProps) {
    return {
        games
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.GameActions>) {
    return {
        handleClick: (history: IHistoryData, squares: IHistoryData) => dispatch(actions.handleClick(history, squares)),
        jumpTo: (move: number) => dispatch(actions.jumpTo(move))
    }
}

export default withRouter<any>(connect<any>(mapStateToProps,mapDispatchToProps)(Game));
