import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by ID", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if ID not found", () => {
    const action = {
      type: "REMOVE_EXPENSE",
      id: -1
    };
  
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
  

  test("should add an expense", () => {
    const expense = {
      id: 4,
      description: 'new expense',
      note: '',
      amount: 100,
      createdAt : 0
    };
  
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });

  test("should edit an expense", () => {
    const description = 'updated rent';
  
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates : {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('updated rent');
  });

  test("should not edit an expense if ID not found", () => {

  
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });