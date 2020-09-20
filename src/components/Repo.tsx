import { LinearProgress, Typography } from "@material-ui/core";
import React from "react";
import { CommitData } from "../api/CommitData";
import { findCommits } from "../api/github";
import { RepoData } from "../api/RepoData";
import { Commits } from "./Commits";

interface RepoProps {
    repoData: RepoData
}

interface RepoState {
    commits: CommitData[]
    errorText: string
}

export class Repo extends React.Component<RepoProps, RepoState> {
    constructor(props: RepoProps) {
        super(props);
        this.state = {
            commits: [],
            errorText: ''
        }
    }

    componentDidMount() {
        findCommits(this.props.repoData.owner.login, this.props.repoData.name)
            .then(res => {
                this.setState({
                    commits: res.data
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    errorText: `${err}: ${err.response.statusText}`
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.commits.length > 0 ?
                    <Commits data={this.state.commits} /> :
                    this.state.errorText ?
                        <Typography>{this.state.errorText}</Typography> :
                        <LinearProgress/>
                }
            </div>
            );
    }
}
