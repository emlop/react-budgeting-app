import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { BudgetSummary } from '../../components/BudgetSummary';

test('should render BudgetSummary with one expense', () => {
  const wrapper = shallow(<BudgetSummary expenseCount={1} expensesTotal={255} />)
  expect(wrapper).toMatchSnapshot();
});

test('should render BudgetSummary with multiple expense', () => {
  const wrapper = shallow(<BudgetSummary expenseCount={25} expensesTotal={255234245} />)
  expect(wrapper).toMatchSnapshot();
  });