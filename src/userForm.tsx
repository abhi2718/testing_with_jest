import React, { useState } from "react";
import { User } from "./types/user";

interface UserFormProps {
  addUser: (user: User) => void;
}
function UserForm(props: UserFormProps) {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // if (!userDetails.name.length) {
    //   new Error('Name is required!')
    // }
    event.preventDefault();
    props.addUser(userDetails);
  };
  const handleInputChnage = (label: string, text: string) => {
    setUserDetails((prev) => ({ ...prev, [label]: text }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => handleInputChnage("name", e.target.value)}
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleInputChnage("email", e.target.value)}
            type="email"
            id="email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
