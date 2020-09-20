import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FormEvent } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { findRepos } from '../api/github';
import { RepoData, createRepoData } from '../api/RepoData';
import { RepoTable } from "./RepoTable";

interface HomeProps {}

interface HomeState {
    searchText: string,
    repos: RepoData[]
    errorText: string
}

const isDevelopment = true;

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
                <h1>Home</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label='Search for organization'
                        placeholder='Netflix'
                        fullWidth
                        margin='normal'
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: <FontAwesomeIcon icon={faSearch}/>
                        }}
                    />
                </form>
                <RepoTable repos={this.state.repos}/>
                {this.state.errorText && <h1>{this.state.errorText}</h1>}
            </div>
        );
    }
}

