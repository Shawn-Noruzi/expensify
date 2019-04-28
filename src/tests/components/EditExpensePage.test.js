import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpense";


let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {

  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[0]}
      history={history}
    />
  );
});

test("should render edit expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense correctly ", () => {
  wrapper.find('ExpenseForm').prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});



test("should handle startRemoveExpense correctly", () => {
    wrapper.find('button').simulate("click");
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
  });
