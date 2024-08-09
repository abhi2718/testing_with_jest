import { User } from "./types/user";
function UserList({ users }: { users: User[] }) {
  const renderedUsers = users.map((user, index: number) => {
    return (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
