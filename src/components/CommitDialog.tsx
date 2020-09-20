import { DialogTitle, Link, Typography } from "@material-ui/core";
import React from "react";
import { CommitData } from "../api/CommitData";
import { AvatarChip } from "./AvatarChip";

interface CommitDialogContentsProps {
    data: CommitData
}

export class CommitDialogContents extends React.Component<CommitDialogContentsProps> {
    render() {
        return (
            <div>
                <DialogTitle>
                    <AvatarChip data={this.props.data}/>
                    <Typography>{this.props.data.commit.message}</Typography>
                    <Typography>{this.props.data.sha}</Typography>
                    <Typography>{this.props.data.commit.comment_count}</Typography>
                    <Link target={'_blank'} href={this.props.data.comments_url}>Comments</Link>
                    <br/>
                    <Link target={'_blank'} href={this.props.data.html_url}>Repo</Link>
                </DialogTitle>
            </div>
        );
    }
}
