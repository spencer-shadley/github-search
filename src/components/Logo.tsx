import React from "react";
import logo from '../logo.svg';

export class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt='logo'/>
            </div>
            );
    }
}
