import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Anime',
        note: 'Ancient Magus Bride Full Blu-ray set',
        amount: 4500,
        createdAt: moment(0).add(6, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses.concat([expense]));
});

test('should edit an expense', () => {
    const note = 'It was Stride gum.';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id, 
        updates: {
            note 
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not edit an expense if expense not found', () => {
    const note = 'It was Stride gum.';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1', 
        updates: {
            note 
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});