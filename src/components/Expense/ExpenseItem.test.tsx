import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpenseItem from './ExpenseItem';
import Remaining from '../Remaining';
import ExpenseTotal from './ExpenseTotal';
import { AppContext } from './../../context/AppContext';

describe('ExpenseItem Component', () => {
  test('deletes an expense and updates the context', () => {
    const expenseToDelete = { id: '1', name: 'Junk Food', cost: 500 };
    const initialExpenses = [expenseToDelete];
    const budget = 1000;

    const Wrapper = () => {
      const [expenses, setExpenses] = useState(initialExpenses);
      const [currentBudget, setBudget] = useState(budget);

      return (
        <AppContext.Provider value={{ expenses, setExpenses, budget: currentBudget, setBudget }}>
          <ExpenseItem {...expenseToDelete} />
          <Remaining />
          <ExpenseTotal />
        </AppContext.Provider>
      );
    };

    const { getByText } = render(<Wrapper />);

    // check the intial state with expense to be deleted for remaining and spent so far
    expect(getByText(`Remaining: $500`)).toBeInTheDocument();
    expect(getByText(`Spent so far: $500`)).toBeInTheDocument();

    // Click Delete button to remove item
    fireEvent.click(getByText('x'));

    // After deletion check if the values have changed Assert updated Remaining balance and Total Expenses
    expect(getByText(`Remaining: $1000`)).toBeInTheDocument();
    expect(getByText(`Spent so far: $0`)).toBeInTheDocument();

  });
});
