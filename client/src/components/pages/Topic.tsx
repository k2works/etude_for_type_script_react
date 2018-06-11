import * as React from "react";
import {RouteComponentProps} from "react-router";

interface IOwnProps extends RouteComponentProps<any>{}

const Topic: React.SFC<IOwnProps> = (props) => {
    return (
        <div>
            <h3>{props.match.params.topicId}</h3>
        </div>
    )
};

export default Topic;
