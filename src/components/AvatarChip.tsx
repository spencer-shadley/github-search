import { Avatar, Chip } from "@material-ui/core";
import React from "react";
import { CommitData } from "../api/CommitData";

interface AvatarChipProps {
    data: CommitData
}

export class AvatarChip extends React.Component<AvatarChipProps> {
    render() {
        return (
            <Chip
                clickable={!!this.props.data?.author?.html_url}
                href={this.props.data?.author?.html_url}
                component={'a'}
                target={'_blank'}
                avatar={<Avatar src={this.props.data?.author?.avatar_url} />}
                label={this.props.data?.author?.login || 'Unknown'}/>
        );
    }
}
