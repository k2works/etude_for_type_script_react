import * as React from "react";

interface IBeerListProps {
    items: any[];
}

export class BeerList extends React.Component<IBeerListProps, object> {
    public render() {
        return <ul>
            {this.props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    };
}
