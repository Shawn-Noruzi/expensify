import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

//doesnt need access to state -> dont need to provide stateToProps
//needs dispatchToProps -> bc we want to dispatch an action (startLogin)

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Wizard</h1>
      <button className="button" onClick={startLogin}><span>Login with Google</span></button>
    </div>
    <div className="box-layout__box">
      <p className="box-layout__paragraph">1. Enter your expenses.</p>
      <p className="box-layout__paragraph">2. Choose how to filter them.</p>
      <p className="box-layout__paragraph">3. View how your expenses are being distributed cost wise on the pie chart</p>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
