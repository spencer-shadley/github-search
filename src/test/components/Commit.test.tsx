import React from 'react';
import { shallow } from 'enzyme';
import commitData from '../data/commitData.json';
import { CommitData } from '../../api/CommitData' ;
import { Commit } from "../../components/Commit";
import { Dialog, Link } from '@material-ui/core';

const data = commitData as unknown as CommitData;

test('renders the Commit', () => {
    shallow(<Commit data={data}/>);
});

test('should contain a dialog', () => {
  const commit = shallow(<Commit data={data}/>);
  expect(commit.find(Dialog)).toHaveLength(1);
});

test('should not initially display a dialog', () => {
  const commit = shallow(<Commit data={data}/>);
  expect(commit.find(Dialog).prop('open')).toBeFalsy();
});

test('should contain the correct link', () => {
  const commit = shallow(<Commit data={data}/>);
  expect(commit.find(Link).prop('href')).toEqual('https://github.com/Netflix/Hystrix/commit/a7df971cbaddd8c5e976b3cc5f14013fe6ad00e6');
});
