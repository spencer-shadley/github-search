import { Avatar, Chip, List, ListItem } from "@material-ui/core";
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
            </ListItem>
        );
    }
}
