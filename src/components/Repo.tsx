import { LinearProgress } from "@material-ui/core";
import React from "react";
import { CommitData } from "../api/CommitData";
import { findCommits } from "../api/github";
import { RepoData } from "../api/RepoData";
import { Commit } from "./Commit";
import { Commits } from "./Commits";

interface RepoProps {
    repoData: RepoData
}

interface RepoState {
    commits: CommitData[]
}

export class Repo extends React.Component<RepoProps, RepoState> {
    constructor(props: RepoProps) {
        super(props);
        this.state = {
            commits: []
        }
    }

    componentDidMount() {
        findCommits(this.props.repoData.owner.login, this.props.repoData.name).then(res => {
            this.setState({
                commits: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.props.repoData.full_name}
                {this.state.commits.length > 0 ?
                    <Commits data={this.state.commits} /> :
                    <LinearProgress/>
                }
            </div>
            );
    }
}
