import * as React from 'react';

export interface IState {
    users: IUser[];
}

export interface IUser {
    id: number;
    username: string;
}

export interface IOwnProps {
    users: IState;
}

class User extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
        };
    }

    public componentDidMount() {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    public render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <li key={user.id}>{user.username}</li>
                )}
            </div>
        );
    }
}

export default User;
