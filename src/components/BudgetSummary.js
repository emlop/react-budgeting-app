import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const BudgetSummary = ({ expenseCount, expensesTotal }) => {
  const budgetWord = expenseCount === 1 ? 'budget' : 'budgets';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {budgetWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStatetoProps)(BudgetSummary);