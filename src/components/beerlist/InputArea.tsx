import * as React from "react";

interface IInputAreaProps {
    onSubmit?: (name: any) => void;
}

export class InputArea extends React.Component<IInputAreaProps, object> {
    public render() {
        return <input/>
    }
}
