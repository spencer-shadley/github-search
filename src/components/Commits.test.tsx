import React from 'react';
import { shallow } from 'enzyme';
import commitData from '../test/data/commitData.json';
import { CommitData } from '../api/CommitData' ;
import { Commit } from "./Commit";
import { List } from '@material-ui/core';
import { Commits } from './Commits';

const data = [commitData as unknown as CommitData];

test('renders the Commits', () => {
    shallow(<Commits data={data}/>);
});

test('should contain a list', () => {
  const commit = shallow(<Commits data={data}/>);
  expect(commit.find(List)).toHaveLength(1);
});

test('should contain one commit', () => {
  const commit = shallow(<Commits data={data}/>);
  expect(commit.find(Commit)).toHaveLength(1);
});

test('should contain multiple commits', () => {
  const commit = shallow(<Commits data={[...data, ...data, ...data]}/>);
  expect(commit.find(Commit)).toHaveLength(3);
});

test('should contain one commit with valid data', () => {
  const commit = shallow(<Commits data={data}/>);
  expect(commit.find(Commit).prop('data').sha).toEqual(data[0].sha);
});
