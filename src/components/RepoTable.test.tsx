import React from 'react';
import { shallow } from 'enzyme';
import repoData from '../test/data/repoData';
import { RepoTable } from './RepoTable';
import MaterialTable from 'material-table';

const repos = [repoData];

test('renders the RepoTable', () => {
    shallow(<RepoTable repos={repos}/>);
});

test('renders a table when there is data', () => {
    const repoTable = shallow(<RepoTable repos={repos}/>);
    expect(repoTable.find(MaterialTable)).toHaveLength(1);
});

test('should not render a table when there is not data', () => {
    const repoTable = shallow(<RepoTable repos={[]}/>);
    expect(repoTable.find(MaterialTable)).toHaveLength(0);
});

test('renders a table with data', () => {
    const repoTable = shallow(<RepoTable repos={repos}/>);
    expect(repoTable.find(MaterialTable).prop('data')).toEqual(repos);
});

test('renders a table with multiple repos', () => {
    const repoA = {...repoData};
    const repoB = {...repoData};

    const repoTable = shallow(<RepoTable repos={[repoA, repoB]}/>);
    expect(repoTable.find(MaterialTable).prop('data')).toHaveLength(2);
});

test('renders a table sorted by stargazers', () => {
    const repoA = {...repoData};
    const repoB = {...repoData};

    repoA.stargazers_count = 5;
    repoB.stargazers_count = 42;

    const repoTable = shallow(<RepoTable repos={[repoA, repoB]}/>);
    const tableData = repoTable.find(MaterialTable).prop('data');
    expect(tableData[1]).toEqual(repoB);
});
