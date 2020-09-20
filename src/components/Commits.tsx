import { List } from "@material-ui/core";
import React from "react";
import { CommitData } from "../api/CommitData";
import { Commit } from "./Commit";

interface CommitsProps {
    data: CommitData[]
}

export class Commits extends React.Component<CommitsProps> {
    render() {
        return (
            <List>
                {this.props.data.map(commit => {
                    return <Commit data={commit} />
                })}
            </List>
            );
    }
}
