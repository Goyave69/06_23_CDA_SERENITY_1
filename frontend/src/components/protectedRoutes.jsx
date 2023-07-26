import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ component: Component, adminRequired, ...rest }) => {
  const { token, isUserAdmin } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          adminRequired ? (
            isUserAdmin() ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;