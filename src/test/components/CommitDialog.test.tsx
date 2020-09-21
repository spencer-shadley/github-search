import React from 'react';
import { shallow } from 'enzyme';
import commitData from '../data/commitData.json';
import { CommitData } from '../../api/CommitData' ;
import { DialogTitle, Link, LinkTypeMap, Typography } from '@material-ui/core';
import { CommitDialogContents } from '../../components/CommitDialog';

const data = commitData as unknown as CommitData;

test('renders the CommitDialog', () => {
    shallow(<CommitDialogContents data={data}/>);
});

test('should list 6 text elements', () => {
  const commit = shallow(<CommitDialogContents data={data}/>);
  expect(commit.find(Typography)).toHaveLength(6);
});

test('should contain a title', () => {
  const commit = shallow(<CommitDialogContents data={data}/>);
  expect(commit.find(DialogTitle)).toHaveLength(1);
});

test('should contain two links', () => {
  const commit = shallow(<CommitDialogContents data={data}/>);
  const links = commit.find(Link);
  expect(links).toHaveLength(2);
});
