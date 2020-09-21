import React from 'react';
import { shallow } from 'enzyme';
import { Repo } from './Repo';
import repoData from '../test/data/repoData';

test('renders the Repo', () => {
    shallow(<Repo repoData={repoData}/>);
});

