import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});