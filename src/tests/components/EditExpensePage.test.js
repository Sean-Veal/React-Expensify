import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, 
    removeExpense, 
    history,
    expense, 
    wrapper;

beforeEach(() => {
    expense = expenses[0];
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
                        editExpense={editExpense} 
                        history={history} 
                        removeExpense={removeExpense}
                        expense={expense}
                    />);
});

test('should render EditExpensePage', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle onClick', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expense.id);
});
