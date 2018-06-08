import * as React from "react";

interface IInputAreaProps {
    text: string;
    onSubmit: (name: any) => void;
    onChange: (name: any) => void;
}

export class InputArea extends React.Component<IInputAreaProps, any> {
    constructor(props: IInputAreaProps) {
        super(props);
        this.setText = this.setText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <div>
                <input value={this.props.text} onChange={this.setText}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

    private handleClick() {
        this.props.onSubmit(this.props.text);
    }

    private setText(event: any) {
        this.props.onChange(event.target.value);
    }
}
