import {connect, Dispatch} from 'react-redux'
import {withRouter} from "react-router-dom";
import {setVisibilityFilter, TodoActions} from "../../actions/todo";
import Link from '../../components/todo/Link'
import {VisibilityFilters} from "../../constants/todo";
import {IState} from "../../state/todo";

interface IOwnProps {
    filter: VisibilityFilters;
}

interface IStateToProps {
    active: boolean;
}

interface IDispatchToProps {
    onClick: () => void;
}

const mapStateToProps = (state: IState, ownProps: IOwnProps): IStateToProps => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
​
const mapDispatchToProps = (dispatch: Dispatch<TodoActions>, ownProps: IOwnProps): IDispatchToProps => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
​
const FilterLink = withRouter<any>(connect<any>(
    mapStateToProps,
    mapDispatchToProps
)(Link))
​
export default FilterLink
