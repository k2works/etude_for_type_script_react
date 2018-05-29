import * as React from "react";

interface IInputAreaProps {
    onSubmit: (name: any) => void;
}

interface IInputAreaState {
    text: string;
}

export class InputArea extends React.Component<IInputAreaProps, IInputAreaState> {
    constructor(props: IInputAreaProps) {
        super(props);
        this.state = {
            text: ''
        };
        this.setText = this.setText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.setText}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

    private handleClick() {
        this.props.onSubmit(this.state.text);
    }

    private setText(event: any) {
        this.setState({text: event.target.value});
    }
}
