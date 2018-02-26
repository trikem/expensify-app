import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(
        <Header
        startLogout={startLogout}
        />
    );
});

test('should render header corr', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call start logout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});


