import * as React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import { Dispatch } from 'redux';
import {addTodo, TodoActions} from '../../actions/todo';

interface IOwnProps {
    dispatch: Dispatch<TodoActions>;
}

const AddTodo: React.SFC<IOwnProps> = (props) => {
    const { dispatch } = props;
    let input: HTMLInputElement;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!input.value.trim()) {
                        return;
                    }

                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input
                    ref={(node: HTMLInputElement) => {
                        input = node;
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default withRouter<any>(connect()(AddTodo));
