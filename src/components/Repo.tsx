import axios from "axios";
import React from "react";
import { CommitData } from "../api/CommitData";
import { findCommits } from "../api/github";
import { RepoData } from "../api/RepoData";

interface RepoProps {
    repoData: RepoData
}

interface RepoState {
    commits: CommitData[]
}

export class Repo extends React.Component<RepoProps, RepoState> {
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
            </div>
            );
    }
}
