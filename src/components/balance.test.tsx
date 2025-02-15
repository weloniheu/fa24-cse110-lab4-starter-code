import React from 'react';
import { render } from '@testing-library/react';
import Remaining from './Remaining';
import ExpenseTotal from './Expense/ExpenseTotal';
import { AppContext } from './../context/AppContext';

describe('Budget Balance Verification', () => {
  test('calculates remaining balance correctly', () => {
    const expenses = [
      { id: '1', name: 'Apples', cost: 20 },
      { id: '2', name: 'Bananas', cost: 10 },
    ];
    const budget = 100;
    const setExpenses = jest.fn();
    const setBudget = jest.fn();

    const { getByText } = render(
      <AppContext.Provider value={{ expenses, setExpenses, budget, setBudget }}>
        <Remaining />
        <ExpenseTotal />
      </AppContext.Provider>
    );

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remainingBalance = budget - totalExpenses;

    // Assert Remaining balance is displayed correctly
    expect(getByText(`Remaining: $${remainingBalance}`)).toBeInTheDocument();

    // Assert Total Expenses is displayed correctly
    expect(getByText(`Spent so far: $${totalExpenses}`)).toBeInTheDocument();

    // Assert Budget equals Remaining + Spent
    expect(remainingBalance + totalExpenses).toEqual(budget);
  });
});
