import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (

          <Component {...props} />

      )
    }
  />
);
//need to figure out if users authenticated or not
const mapStateToProps = state => ({
  //just want boolean value here not the actual string value UID comes with.
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
