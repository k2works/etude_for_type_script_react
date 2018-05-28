import * as React from "react";

export interface IProps {
    value: number;
}

class Square extends React.Component<IProps, object> {
    public render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square;
