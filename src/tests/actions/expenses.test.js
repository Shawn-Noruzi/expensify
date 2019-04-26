import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("should setup RemoveExpense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123" });
});

test("should setupt editExpense action object", () => {
  const action = editExpense("thisisid", { note: "note test" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "thisisid",
    updates: {
      note: "note test"
    }
  });
});

test("addExpense -  correct new values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to db and redux store", (done) => {
  //how to create a fake redux store for testing
  const store = createMockStore({});
  const expenseData = {
    description: "descy",
    amount: 444,
    note: " no notes ",
    createdAt: 1000
  };  
  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(2);
    //forces jest to wait until this moment - why? because its not asynchronous unless we tell jest to be.
    done();
  });
});

test("should add expense with defaults to db and redux store", () => {});

// test("addExpense - correct default values", () => {
//   const action = addExpense();

//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
