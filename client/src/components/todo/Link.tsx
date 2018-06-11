import * as React from 'react'

export interface IOwnProps {
    active: boolean;
    onClick: () => any;
}

const Link: React.SFC<IOwnProps> = (props) => {
    const { children, active, onClick } = props;

    return (
        <button
            onClick={onClick}
            disabled={active}
            style={{
                marginLeft: '4px',
            }}
        >
            {children}
        </button>
    );
};

export default Link;
