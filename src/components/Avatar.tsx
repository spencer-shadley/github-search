import React from "react";

interface AvatarProps {
    imageSource: string
}

export class Avatar extends React.Component<AvatarProps> {
    render() {
        return (
            <img src={this.props.imageSource} />
        );
    }
}
