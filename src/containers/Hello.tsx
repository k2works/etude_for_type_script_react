import { connect, Dispatch } from "react-redux";
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/';
import Hello from '../components/hello/Hello';
import  { IState } from "../state/hello";

export function mapStateToProps({ enthusiasm }: IState) {
    return {
        enthusiasm
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        // tslint:disable-next-line:object-literal-sort-keys
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default withRouter<any>(connect<any>(mapStateToProps,mapDispatchToProps)(Hello));
