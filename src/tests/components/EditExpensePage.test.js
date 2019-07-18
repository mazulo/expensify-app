import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={ editExpenseSpy }
      removeExpense={ removeExpenseSpy }
      expense={ expenses[0] }
      history={ historySpy }
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(editExpenseSpy).toHaveBeenLastCalledWith(
    expenses[0].id,
    expenses[0],
  );
});

test('should push history to / after onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenCalledWith('/')
});

test('should handle onClick to remove expense', () => {
  wrapper.find('button').prop('onClick')(expenses[0]);
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
