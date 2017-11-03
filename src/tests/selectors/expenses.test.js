import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

// Test case for filtering text dummy values
const expenses = [{
  id: '1',
  description: 'Toy',
  note: '',
  amount: 250,
  createdAt: 0
}, {
  id: '2',
  description: 'Furniture',
  note: '',
  amount: 250000,
  createdAt: moment(0).subtract(7, 'days').valueOf()
}, {
  id: '3',
  description: 'Phone',
  note: '',
  amount: 7500,
  createdAt: moment(0).add(7, 'days').valueOf()
}];

test('should filter by text value', () => {
  const filters = {
    text: 'n',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
