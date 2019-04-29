
import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/Login';

//test if the login page gets rendered properly 
test('should render the Login page correctly', () => {
const wrapper = shallow(<LoginPage />);
expect(wrapper).toMatchSnapshot();
});

//to test if a function is called when you click a button
test("should call startLogin on button click", () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find("button").simulate("click");
    expect(startLogin).toHaveBeenCalled();
  });
  
  