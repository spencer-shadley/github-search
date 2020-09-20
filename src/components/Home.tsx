import { InputAdornment, TextField } from "@material-ui/core";
import React, { ChangeEvent } from "react";

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

    handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.setState({test: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <TextField
                    label='Search'
                    fullWidth
                    margin='normal'
                    onChange={this.handleChange}
                />
                <p>
                    {this.state.test}
                </p>
            </div>
        );
    }
}
