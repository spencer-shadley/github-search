import MaterialTable from "material-table";
import React from "react";
import { RepoData } from "../api/RepoData";
import { Repo } from "./Repo";

interface RepoTableProps {
    repos: RepoData[]
}

export class RepoTable extends React.Component<RepoTableProps> {
    render() {
        return (
            <div>
                {this.props.repos.length > 0 && <MaterialTable
                    columns={[
                        { title: 'Repo', field: 'name' },
                        { title: 'Description', field: 'description'},
                        { title: 'Issues', field: 'open_issues_count', type: 'numeric', defaultSort: 'desc' },
                        { title: 'Forks', field: 'forks_count', type: 'numeric' },
                        { title: 'Stargazers', field: 'stargazers_count', type: 'numeric' },
                        { title: 'Last Updated', field: 'updated_at', type: 'datetime' },
                    ]}
                    data={[...this.props.repos].sort((repoA, repoB) => repoA.stargazers_count - repoB.stargazers_count)}
                    title='Repos'
                    options={{pageSize: 10}}
                    detailPanel={
                        rowData => {return <Repo repoData={rowData} />}
                    }
                />}
            </div>
            );
    }
}
