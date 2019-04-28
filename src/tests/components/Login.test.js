
import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/Login';

test('should render the Login page correctly', () => {

const wrapper = shallow(<LoginPage />);
expect(wrapper).toMatchSnapshot();
});