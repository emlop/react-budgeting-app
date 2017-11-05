import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import BudgetSummary from './BudgetSummary';

const BudgetDashboardPage = () => (
  <div>
    <BudgetSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default BudgetDashboardPage;