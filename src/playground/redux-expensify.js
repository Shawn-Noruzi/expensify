import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
//SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_DATE

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SORT_AMOUNT

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SET_START_DATE

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//SET_END_DATE

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//FILTERS REDUCER

const filtersReducerDefaultState = {
  text: "",
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state.expenses,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state.filters,
        sortBy: "date"
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state.filters,
        sortBy: "amount"
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//timestamps (any + or - number)
//January 1st 1970 (unix epoch)

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = typeof text !== "string" || expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//STORE CREATION

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 900, createdAt: -9009})
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 1000, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//store.dispatch(setTextFilter("house"));
// store.dispatch(setTextFilter());
 store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(335));

const demoState = {
  expenses: [
    {
      id: "Name",
      description: "January rent",
      note: "Final payment for address",
      amount: 54500, //penny
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
