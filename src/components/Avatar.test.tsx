import { Avatar, Chip, Grow } from "@material-ui/core";
import React from 'react';
import { shallow } from 'enzyme';

test('renders the Avatar', () => {
  shallow(<Avatar/>);
});
