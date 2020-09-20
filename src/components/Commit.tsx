import { Avatar, Badge, Chip, Divider, Grow, Link, List, ListItem, Modal, Slide, Typography } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import React from "react";
import { CommitData } from "../api/CommitData";
import { AvatarChip } from "./AvatarChip";
import { CommitDialogContents } from "./CommitDialog";

interface CommitProps {
    data: CommitData
}

interface CommitState {
    shouldShowDetails: boolean
}

export class Commit extends React.Component<CommitProps, CommitState> {
    constructor(props: CommitProps) {
        super(props);
        this.state = {
            shouldShowDetails: false
        }
    }

    render() {
        return (
            <div>
                <Slide direction='left' in={true}>
                <ListItem button onClick={e => this.setState({shouldShowDetails: true})}>
                    <AvatarChip data={this.props.data} />
                    <Typography>{this.props.data.commit.message}</Typography>
                    <Badge badgeContent={this.props.data.commit.comment_count} color="primary">
                        <Link href={this.props.data.html_url} target='_blank'>{this.props.data.sha}</Link>
                    </Badge>
                </ListItem>
                </Slide>
                <Divider variant={"middle"}/>
                <Dialog
                    open={this.state.shouldShowDetails}
                    onClose={() => this.setState({shouldShowDetails: false})}>
                        <CommitDialogContents data={this.props.data} />
                </Dialog>
            </div>
        );
    }
}
