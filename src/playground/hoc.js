// higher order component (HOC) - component (HOC) that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>info</h1>
    <p>the info is {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info - dont share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenicated ?<WrappedComponent {...props} /> : <p>login to see info</p>}

    </div>
  );
};

//warning
const AdminInfo = withAdminWarning(Info);

//require authentication
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="there no details" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenicated={false} info="there no details" />,
  document.getElementById("app")
);
