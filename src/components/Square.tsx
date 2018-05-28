import * as React from "react";

export type SquareType = string | null;

interface ISquareProps {
    value: SquareType;
    onClick: ()=> void;
}

class Square extends React.Component<ISquareProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
        };
    }

    public render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;
