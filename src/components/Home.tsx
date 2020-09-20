import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, TextField, Toolbar, Typography } from "@material-ui/core";
import React, { ChangeEvent, FormEvent } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { findRepos } from '../api/github';
import { RepoData, createRepoData } from '../api/RepoData';
import { RepoTable } from "./RepoTable";

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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap>GitHub Repo Searcher</Typography>
                        <form onSubmit={this.handleSubmit} style={
                            {flexGrow: 1, marginLeft: 100, alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifySelf: 'center'}}>
                            <TextField
                                variant='outlined'
                                label='Search for an organization...'
                                placeholder='Netflix'
                                fullWidth
                                margin='normal'
                                onChange={this.handleChange}
                                InputProps={{
                                    endAdornment: <FontAwesomeIcon icon={faSearch}/>,
                                    style: {
                                        color: 'white',
                                        borderColor: 'white !important'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            />
                       </form>
                    </Toolbar>
                </AppBar>
                <RepoTable repos={this.state.repos}/>
                {this.state.repos.length == 0 &&
                    <Typography variant='h3'>
                        Use the above bar to search for an organization on GitHub!
                    </Typography>}
                {this.state.errorText &&
                    <h1>{this.state.errorText}</h1>}
            </div>
        );
    }
}

