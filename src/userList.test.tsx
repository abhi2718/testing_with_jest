import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./userList";
const renderComponent = () => {
  const users = [
    {
      name: "Abhishek",
      email: "abhiwebdev2718@gmail.com",
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
    },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
};

describe('<UserList />', () => {
  it("should show one row for each user", () => {
    renderComponent();
  });
  
  it("should show name and email of each user", () => {
    const { users } = renderComponent();
  });
})
