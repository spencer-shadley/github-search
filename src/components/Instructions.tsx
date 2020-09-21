import React from "react";
import { Container } from "react-bootstrap";

export class Instructions extends React.Component {
    render() {
        return (
            <Container>
                <h1>GitHub Org Searcher</h1>
                <p>Use the above bar to search for an organization on GitHub!</p>
            </Container>
        );
    }
}
