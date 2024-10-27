// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import AddExpenseForm from './AddExpenseForm';
// import { AppContext } from './../../context/AppContext';
// import { Expense } from './../../types/types';

// describe('AddExpenseForm Component', () => {
//   test('adds a new expense and updates the context', () => {
//     const setExpenses = jest.fn();
//     const expenses: Expense[] = [];
//     const budget = 1000;
//     const setBudget = jest.fn();


//     const { getByPlaceholderText, getByText } = render(
//       <AppContext.Provider value={{ expenses, setExpenses, budget, setBudget }}>
//         <AddExpenseForm />
//       </AppContext.Provider>
//     );

//     // Input an expense
//     fireEvent.change(getByPlaceholderText('Enter expense name'), {
//       target: { value: 'Bananas' },
//     });

//     // Input the cose
//     fireEvent.change(getByPlaceholderText('Enter amount'), {
//       target: { value: '10' },
//     });

//     // click save to add expense
//     fireEvent.click(getByText('Save'));



//     // Assert setExpenses was called with new expense
//     expect(screen.getByText("Bananas")).toBeInTheDocument();
//   });
// });
