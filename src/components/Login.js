import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

//doesnt need access to state -> dont need to provide stateToProps
//needs dispatchToProps -> bc we want to dispatch an action (startLogin)

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <button className="button" onClick={startLogin}><span>Login</span></button>
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
