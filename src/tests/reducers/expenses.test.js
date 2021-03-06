import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set def state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('shoul remove by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -4
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '5',
        description: 'Gas bill',
        note: '',
        amount: 1953,
        createdAt: 0
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense if not found', () => {
    const updates = {
        description: 'Something new',
        note: '',
        amount: 1000,
        createdAt: 0
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: -10,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const updates = {
        description: 'Something new',
        note: '',
        amount: 1000,
        createdAt: 0
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {...expenses[1], ...updates}, expenses[2]]);
});

test('should set expenses', () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});