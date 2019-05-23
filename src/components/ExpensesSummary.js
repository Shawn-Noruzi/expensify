import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

//expenseCount - how many visisble expenses
//expensesTotal - total of visible expenses?
//2 snapshot tests
//stateless functional component used here because we dont want this component to be able to
//change the state.

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount} </span> {expenseWord} totalling{" "}
          <span>{formattedExpensesTotal}</span>

          <div className="page-header__actions">
            <Link className="button" to="/create"><span>Add Expense</span></Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
