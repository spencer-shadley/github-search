import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";
import { RepoData } from "../api/RepoData";

interface RepoTableProps {
    repos: RepoData[]
}

export class RepoTable extends React.Component<RepoTableProps> {
    constructor(props: RepoTableProps) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.repos.length > 0 && <MaterialTable
                    columns={[
                        { title: 'Repo', field: 'name' },
                        { title: 'Description', field: 'description'},
                        { title: 'Forks', field: 'forks_count', type: 'numeric' },
                        { title: 'Stargazers', field: 'stargazers_count', type: 'numeric' },
                        { title: 'Issues', field: 'open_issues_count', type: 'numeric' },
                        { title: 'Last Updated', field: 'updated_at', type: 'datetime' },
                    ]}
                    data={[...this.props.repos].sort((repoA, repoB) => repoA.stargazers_count - repoB.stargazers_count)}
                    title='Repos'
                />}
                {/* {this.props.repos.length > 0 && <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Forks Count</TableCell>
                            <TableCell align="right">Created At</TableCell>
                            <TableCell align="right">Stargazers</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.props.repos.map((repo) => (
                            <TableRow key={repo.name}>
                            <TableCell component="th" scope="row">{repo.name}</TableCell>
                            <TableCell align="right">{repo.forks_count}</TableCell>
                            <TableCell align="right">{repo.created_at}</TableCell>
                            <TableCell align="right">{repo.stargazers_count}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>} */}
            </div>
            );
    }
}
