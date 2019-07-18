import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let
  setTextFilterSpy,
  sortByDateSpy,
  sortByAmountSpy,
  setStartDateSpy,
  setEndDateSpy,
  wrapper;

beforeEach(() => {
  setTextFilterSpy = jest.fn();
  sortByDateSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={ filters }
      setTextFilter={ setTextFilterSpy }
      setStartDate={ setStartDateSpy }
      setEndDate={ setEndDateSpy }
      sortByAmount={ sortByAmountSpy }
      sortByDate={ sortByDateSpy }
    />
  );
});

test('should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should simulate text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('should handle text change', () => {
  const event = {
    target: { value: 'Text' }
  };
  wrapper.find('input').prop('onChange')(event);
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(event.target.value);
});

test('should simulate sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDateSpy).toHaveBeenLastCalledWith();
});

test('should sort by date', () => {
  const event = {
    target: { value: 'date' }
  };
  wrapper.find('select').prop('onChange')(event);
  expect(sortByDateSpy).toHaveBeenCalledWith();
});

test('should simulate sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmountSpy).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
  const event = {
    target: { value: 'amount' }
  };
  wrapper.find('select').prop('onChange')(event);
  expect(sortByAmountSpy).toHaveBeenCalledWith();
});

test('should handle date changes', () => {
  const data = {
    startDate: moment(0),
    endDate: moment(0).days(3, 'days'),
  };
  wrapper.find('DateRangePicker').prop('onDatesChange')(data);
  expect(setStartDateSpy).toHaveBeenCalledWith(data.startDate);
  expect(setEndDateSpy).toHaveBeenCalledWith(data.endDate);
});

test('should handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
