import * as React from "react";
import { connect} from "react-redux";
import { asyncFetchUsers, clearUsers } from "../actions/user";
import { IState, IUser } from "../state/user";

export interface IOwnProps {
    users: IUser[];
    dispatch: any;
}

export class User extends React.Component<IOwnProps, IState> {
    public componentDidMount() {
        this.props.dispatch(clearUsers());
        this.props.dispatch(asyncFetchUsers('/api/users'));
    }

    public render() {
        return (
            <div>
                <h1>Users</h1>
                {this.props.users.map(user =>
                    <li key={user.id}>{user.email}</li>
                )}
            </div>
        );
    }
}

export function mapStateToProps({ users }: IState) {
    return {
        users
    };
}

export default connect(mapStateToProps)(User);
