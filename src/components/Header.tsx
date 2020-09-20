import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";
import React, { ChangeEvent, FormEvent } from "react";

interface HeaderProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap>GitHub Org Searcher</Typography>
                        <form onSubmit={this.props.handleSubmit} style={
                            {flexGrow: 1, marginLeft: 100, alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifySelf: 'center'}}>
                            <TextField
                                variant='outlined'
                                label='Search for an organization...'
                                placeholder='Netflix'
                                fullWidth
                                margin='normal'
                                onChange={this.props.handleChange}
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
            );
    }
}
