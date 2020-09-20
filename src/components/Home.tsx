import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment, TextField } from "@material-ui/core";
import React, { ChangeEvent, FormEvent } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface HomeProps {
}

interface HomeState {
    searchText: string
}

export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            searchText: 'pizza'
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText: event.target.value});
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        alert(this.state.searchText);
        event.preventDefault();
        event.stopPropagation();
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
                <p>
                    {this.state.searchText}
                </p>
            </div>
        );
    }
}
