import { stringify } from "querystring";
import { useEffect } from "react";
import { useState } from "react";
export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1);

  console.log("Simple Example");

  // useEffect(()=> {
  //   console.log("useEffect");
  //   // запрос на сервер
  //   //установка интервалов
  //   // работа с базой днных локальных в браузере
  //   // обращение к дом на прямую чтобы получить id(редко)
  // })
  useEffect(() => {
    console.log("useEffect every render");
    document.title = count.toString();
  });

  useEffect(() => {
    console.log("useEffect every only first render (componentDidMount)");
    document.title = count.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect every only first render and every count change");
    document.title = count.toString();
  }, [count]);
  return (
    <>
      Hello {count}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export const SimpleTimeOutExample = () => {
  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1);

  console.log("SimpleTimeOutExample");

  useEffect(() => {
    setTimeout(() => {
      console.log("setTimeout");
      document.title = count.toString();
    });
  }, [count]);

  return (
    <>
      Hello {count}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export const SimpleSetIntervalExample = () => {
  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1);

  console.log("SimpleSetIntervalExample");

  useEffect(() => {
    setInterval(() => {
      console.log("tick" + count);
      setCount((state) => state + 1);
    }, 1000);
  }, []);

  return (
    <>
      Hello, count: {count} - fake: {fake}
    </>
  );
};
