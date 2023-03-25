import React from "react";
import { useState } from "react";
export default {
  title: "React.memo demo",
};

const SecretNewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const NewMessagesCounter = React.memo(SecretNewMessagesCounter);

const SecretUsers = (props: { users: Array<string> }) => {
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(SecretUsers);

export const Example1 = () => {
  console.log("Users");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Artem", "Bob", "Alex", "Tom"]);

const addUser=()=> {
    setUsers([...users, "Sveta" + new Date().getTime()])
}

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button onClick={addUser}>Add user</button>
      <NewMessagesCounter count={count} />
      <Users users={users} />
    </>
  );
};
