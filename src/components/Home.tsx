import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FormEvent } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { findRepos } from '../api/github';
import { RepoData, createRepoData } from '../api/RepoData';
import { RepoTable } from "./RepoTable";

interface HomeProps {
}

interface HomeState {
    searchText: string,
    repos: RepoData[]
}

export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            searchText: '',
            repos: []
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText: event.target.value});
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        findRepos(this.state.searchText).then(res => {
            console.log(res);
            this.setState({
                repos: res.data.map((repo: {}) => createRepoData(repo))
            });
        }).catch(console.error);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label='Search'
                        fullWidth
                        margin='normal'
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: <FontAwesomeIcon icon={faSearch}/>
                        }}
                    />
                </form>
                {<RepoTable repos={this.state.repos}/>}
            </div>
        );
    }
}

