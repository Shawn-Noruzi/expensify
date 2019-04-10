import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setupt RemoveExpense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123" });
});

test("should setupt editExpense action object", () => {
    const action = editExpense('thisisid', {note: 'note test'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'thisisid',
        updates: {
            note: 'note test'
        }

    });
  });
  

  test('addExpense -  correct new values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
  })
  
  test('addExpense - correct default values', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
        id : expect.any(String),
        description : "",
        note : "",
        amount : 0,
        createdAt : 0
    }}
    );
});

