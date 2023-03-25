import { useEffect, useState } from "react";

const getFullNumber = (num: number) => (num < 10 ? "0" + num : num);

export const Clock = () => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setData(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <span>{getFullNumber(data.getHours())}:</span>
      <span>{getFullNumber(data.getMinutes())}:</span>
      <span>{getFullNumber(data.getSeconds())}</span>
    </>
  );
};
