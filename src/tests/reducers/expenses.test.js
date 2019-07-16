import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '123',
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Internet',
            note: '',
            amount: 85000,
            createdAt: moment(0).add(3, 'days').valueOf(),
        },
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2],
        action.expense,
    ]);
});

test('should edit an expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: 200,
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toEqual(action.updates.amount);
});

test('should not edit if expense is not found by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            amount: 200,
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});
