import React from "react";
import { useSelector } from "react-redux";

import Login from "./Login";
import Account from "./Account";
import SignUp from "./SignUp";

function AccountDetails() {
  const session = useSelector(state => state.session);
  const [isSigningUp, setIsSigningUp] = React.useState(false);

  if (session) {
    return <Account />;
  }

  return isSigningUp ? (
    <SignUp onChangeToLogin={() => setIsSigningUp(false)} />
  ) : (
    <Login onChangeToSignUp={() => setIsSigningUp(true)} />
  );
}

export default AccountDetails;
