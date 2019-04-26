import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

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

test("should add expense to db and redux store", done => {
  //how to create a fake redux store for testing
  const store = createMockStore({});
  const expenseData = {
    description: "descy",
    amount: 444,
    note: " no notes ",
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      //forces jest to wait until this moment - why? because its not asynchronous unless we tell jest to be.
      done();
    });
});

test("should add expense with defaults to db and redux store", done => {
  //how to create a fake redux store for testing
  const store = createMockStore({});
  const expenseDefaults = {
    description : '',
    note : '',
    amount : 0,
    createdAt : 0
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
...expenseDefaults
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      //forces jest to wait until this moment - why? because its not asynchronous unless we tell jest to be.
      done();
    });
});

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
