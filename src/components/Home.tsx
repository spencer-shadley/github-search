import { InputAdornment, TextField } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { Logo } from "./Logo";

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
                <TextField
                    label='Search'
                    fullWidth
                    margin='normal'
                    onChange={this.handleChange}
                    InputProps={{
                        endAdornment: <h1>s</h1>
                    }}
                />
                <p>
                    {this.state.test}
                </p>
            </div>
        );
    }
}
