import React from "react";
import { render, screen,within } from "@testing-library/react";
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
    const { users } = renderComponent();
    //const rows = screen.getAllByRole('row');
    // users.forEach((user) => {
    //   const row =
    // })
    //screen.logTestingPlaygroundURL()
    const tbody = screen.getByTestId('usersTable');
    const rows = within(tbody).getAllByRole('row');
    expect(rows).toHaveLength(users.length);
  });
  
  it("should show name and email of each user", () => {
    const { users } = renderComponent();
    users.forEach(user => {
      const nameCell = screen.getByRole('cell', {
        name: user.name
      });
      const emailCell = screen.getByRole('cell', {
        name: user.email
      });

      expect(nameCell).toBeInTheDocument();
      expect(emailCell).toBeInTheDocument();

    })
  });
})
