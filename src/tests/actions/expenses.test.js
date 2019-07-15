import {
    addExpense,
    editExpense,
    removeExpense,
} from '../../actions/expenses';

test(
    'should set up remove expense action object',
    () => {
        const action = removeExpense({ id: '123abc' });
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        })
    }
);

test(
    'should set up edit expense action object',
    () => {
        const updates = { note: 'my notes' };
        const id = '123abc';

        const action = editExpense(id, updates);

        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
    }
);

test(
    'should set up add expense action object with provided values',
    () => {
        const expenseData = {
            description: 'Rent',
            amount: 100000,
            createdAt: 1000,
            note: 'last month rent',
        };
        
        const action = addExpense(expenseData);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData,
            }
        });
    }
);

test(
    'should set up add expense action object with default values',
    () => {
        const expenseData = {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
        };
        
        const action = addExpense(expenseData);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData,
            }
        });
    }
);
