import { connect, Dispatch } from "react-redux";
import * as actions from '../actions/';
import Hello, {IProps} from '../components/Hello';
import  { IStoreState } from "../types";

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        // tslint:disable-next-line:object-literal-sort-keys
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default connect<IProps>(mapStateToProps,mapDispatchToProps)(Hello);
