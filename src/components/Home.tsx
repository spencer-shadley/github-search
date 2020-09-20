import {  Typography } from "@material-ui/core";
import React, { ChangeEvent, FormEvent } from "react";
import { findRepos } from '../api/github';
import { RepoData, createRepoData } from '../api/RepoData';
import { RepoTable } from "./RepoTable";
import { Header } from "./Header";
import { Instructions } from "./Instructions";

const isDevelopment = false;

interface HomeProps {}

interface HomeState {
    searchText: string,
    repos: RepoData[]
    errorText: string
}

export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            searchText: '',
            repos: [],
            errorText: ''
        }
    }

    searchRepos = (org: string) => {
        findRepos(org).then(res => {
            console.log(res);
            this.setState({
                repos: res.data.map((repo: {}) => createRepoData(repo))
            });
        }).catch(err => {
            this.setState({
                errorText: `${err}: ${err.response.statusText}`
            })
        });
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText: event.target.value});
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        this.searchRepos(this.state.searchText);
    }

    componentDidMount() {
        if(isDevelopment) this.searchRepos('Netflix');
    }

    render() {
        return (
            <div>
                <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <RepoTable repos={this.state.repos}/>
                {this.state.repos.length == 0 &&
                    <Instructions/>}
                {this.state.errorText &&
                    <h1>{this.state.errorText}</h1>}
            </div>
        );
    }
}

