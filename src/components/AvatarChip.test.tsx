import { Chip, Grow } from "@material-ui/core";
import React from 'react';
import { mount, shallow } from 'enzyme';
import { AvatarChip } from './AvatarChip';
import commitData from '../test/data/commitData.json';
import { CommitData } from '../api/CommitData' ;

const data = commitData as unknown as CommitData;

test('renders the AvatarChip', () => {
  shallow(<AvatarChip data={data} />);
});

test('AvatarChip transitions as Grow', () => {
  const avatarChip = mount(<AvatarChip data={data} />);
  expect(avatarChip.find(Grow)).toHaveLength(1);
});

test('AvatarChip renders Chip', () => {
  const avatarChip = mount(<AvatarChip data={data} />);
  expect(avatarChip.find(Chip)).toHaveLength(1);
});

test('AvatarChip renders with correct link', () => {
  const avatarChip = mount(<AvatarChip data={data} />);
  expect(avatarChip.find(Chip).prop('href')).toEqual('https://github.com/qiangdavidliu');
});
