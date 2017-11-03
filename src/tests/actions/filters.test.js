import moment from 'moment';
import { 
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate, 
  setEndDate,
} from '../../actions/filters';

// Actions/filters.js setTextFilter Test Case
test('should filter text action object with text value', () => {
  const text = 'Stuff';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

// Actions/filters.js setTextFilter  with Default Values Test Case 
test('should sort by date action object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

// Actions/filters.js sortByDate Test Case
test('should sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

// Actions/filters.js sortByAmount Test Case
test('should sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// Actions/filters.js setStartDate Test Case
test('should generate set start date action object', () =>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// Actions/filters.js setEndDate Test Case
test('should generate set end date action object', () =>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});