import React from 'react';
import { shallow } from 'enzyme';
import { Repo } from '../../components/Repo';
import repoData from '../data/repoData';

test('renders the Repo', () => {
    shallow(<Repo repoData={repoData}/>);
});

