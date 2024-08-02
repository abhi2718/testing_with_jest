import React, { memo } from "react";

interface IEmailPasswordLogin {
  hanldeLoginApi: (payload: { email: string; password: string }) => void;
}
function EmailPasswordLogin(props: IEmailPasswordLogin) {
  const { hanldeLoginApi } = props;
  return (
    <div>
      <h4>Email Password Login</h4>
    </div>
  );
}

export default memo(EmailPasswordLogin);
