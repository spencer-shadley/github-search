import { Avatar, Chip, Link, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { CommitData } from "../api/CommitData";
import { AvatarChip } from "./AvatarChip";

interface CommitProps {
    data: CommitData
}

export class Commit extends React.Component<CommitProps> {
    render() {
        return (
            <ListItem button>
                <AvatarChip data={this.props.data} />
                <Typography>{this.props.data.commit.message}</Typography>
                <Link href={this.props.data.html_url} target='_blank'>{this.props.data.sha}</Link>
            </ListItem>
        );
    }
}
