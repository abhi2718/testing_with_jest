import { useState } from "react";
import UserForm from "./userForm";
import UserList from "./userList";
import { User } from "./types/user";

function App() {
  const [users, setUsers] = useState<User[] | []>([]);
  const addUser = (user: User) => {
    setUsers((oldState) => {
      return [...oldState, user];
    });
  };
  return (
    <div>
      <h1>Add User</h1>
      <UserForm addUser={addUser} />
      <h2>Users List</h2>
      <UserList users={users} />
    </div>
  );
}

export default App;
