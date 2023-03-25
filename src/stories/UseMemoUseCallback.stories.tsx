import React, { useCallback } from "react";
import { useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  /* ///факториал это n! = 1 * 2 * ... * n */

  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResult = tempResult * i;
    }
    return tempResult;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input
        value={a}
        onChange={(e) => {
          setA(Number(e.currentTarget.value));
        }}
      />
      <input
        value={b}
        onChange={(e) => {
          setB(+e.currentTarget.value);
        }}
      />
      <hr />

      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
};

const SecretUsers = (props: { users: Array<string> }) => {
  console.log("SecretUsers");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};
const Users = React.memo(SecretUsers);

export const HelpToReactMemo = () => {
  console.log("HelpToReactMemo");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Artem", "Bob", "Alex", "Tom"]);

  const newArray = useMemo(() => {
    return users.filter((u) => u.toLocaleLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    setUsers([...users, "Sveta" + new Date().getTime()]);
  };

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
      <button onClick={addUser}>add user</button>

      <Users users={newArray} />
    </>
  );
};

export const LikeUseCallback = () => {
  console.log("LikeUseCallback");
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "HTML"]);

  
  const memoizedAddBook = useMemo(() => {
    return () => {
      console.log(books);
      setBooks([...books, "Angular"]);
    };
  }, [books]);


  const memoizedAddBook2 = useCallback(() => {
    console.log(books)
    setBooks([...books, "Angular"]);
  }, [books]);


  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}

      <Books addBook={memoizedAddBook} />
    </>
  );
};

type BooksPropsType = {
  addBook: () => void;
};
const BooksSecret = (props: BooksPropsType) => {
  console.log("BookSecret");
  return (
    <>
      <button onClick={() => props.addBook()}>add book</button>
    </>
  );
};
const Books = React.memo(BooksSecret);
