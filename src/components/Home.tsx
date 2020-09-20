import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <TextField
                    label='Search'
                    fullWidth
                    margin='normal'
                />
            </div>
        );
    }
}
