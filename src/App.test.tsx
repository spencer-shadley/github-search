import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

test('renders the app', () => {
  shallow(<App />);
});
