import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("App 렌더링");

  const [num, setNum] = useState(0);

  const onClickBtn = () => {
    setNum((prev) => prev + 1);
  };

  // 함수 메모이제이션
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickBtn}>버튼</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
