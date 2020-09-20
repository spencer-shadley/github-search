import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment, TextField } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface HomeProps {
}

interface HomeState {
    test: string
}

export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            test: 'pizza'
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({test: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <FontAwesomeIcon icon="coffee" />
                <TextField
                    label='Search'
                    fullWidth
                    margin='normal'
                    onChange={this.handleChange}
                    InputProps={{
                        endAdornment: <FontAwesomeIcon icon={faSearch}/>
                    }}
                />
                <p>
                    {this.state.test}
                </p>
            </div>
        );
    }
}
