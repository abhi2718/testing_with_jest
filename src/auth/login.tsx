import React from "react";
import EmailPasswordLogin from "./components/emailPassword";
import { useLoginViewModal } from "./loginViewModal";
function LoginScreen() {
  const {hanldeLoginApi} = useLoginViewModal()
  return (
    <div>
      <EmailPasswordLogin hanldeLoginApi={hanldeLoginApi} />
    </div>
  );
}

export default LoginScreen;
