import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history}
            expense={expenses[2]} 
        />); 
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit editForm', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[1]);
});

test('should handle remove editForm', () => { 
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});