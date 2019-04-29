import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

//doesnt need access to state -> dont need to provide stateToProps
//needs dispatchToProps -> bc we want to dispatch an action (startLogin)

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);