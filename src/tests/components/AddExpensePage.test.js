import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, historySpy, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage
      addExpense={ addExpense }
      history={ historySpy }
    />
  );
});

test('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
