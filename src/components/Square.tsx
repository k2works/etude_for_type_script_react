import * as React from "react";

interface ISquareProps {
    value: number;
}

interface ISquareState {
    value: string | null
}

class Square extends React.Component<ISquareProps, ISquareState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
        };
    }

    public render() {
        return (
            <button className="square" onClick={this.clickEvent()}>
                {this.props.value}
            </button>
        );
    }

    private clickEvent() {
        return () => this.setState({value: 'X'});
    }
}

export default Square;
