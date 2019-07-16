import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
    expect(currentState.sortBy).toBe('amount');
});

test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'My text',
    };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('My text');
    expect(currentState.text).toBe('');
});

test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const startDate = moment().add(1, 'days');
    const action = {
        type: 'SET_START_DATE',
        startDate,
    };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toBe(startDate);
    expect(currentState.startDate).toBe(undefined);
});

test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const endDate = moment().add(-1, 'days');
    const action = {
        type: 'SET_END_DATE',
        endDate,
    };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toBe(endDate);
    expect(currentState.endDate).toBe(undefined);
});
