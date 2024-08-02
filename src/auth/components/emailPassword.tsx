import React, { memo } from "react";

function EmailPasswordLogin() {
  return (
    <div>
          <h4>Email Password Login</h4>
          <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
          </form>
    </div>
  );
}

export default memo(EmailPasswordLogin);
