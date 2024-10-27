import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './../../context/AppContext';

describe('ExpenseItem Component', () => {
  test('deletes an expense and updates the context', () => {
    const expenseToDelete = { id: '1', name: 'Rent', cost: 500 };
    const expenses = [expenseToDelete];
    const setExpenses = jest.fn();
    const budget = 1000;
    const setBudget = jest.fn();

    const { getByText } = render(
      <AppContext.Provider value={{ expenses, setExpenses, budget, setBudget }}>
        <ExpenseItem {...expenseToDelete} />
      </AppContext.Provider>
    );

    // Click Delete button
    fireEvent.click(getByText('x'));

    // Assert setExpenses was called with updated expenses
    expect(setExpenses).toHaveBeenCalledWith([]);
  });
});
