import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
// import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickBtn = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      {/* <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
      <button onClick={onClickBtn}>버튼</button>
      <p>{num}</p> */}
      {/* <CssModules></CssModules> */}
      {/* <StyledJsx></StyledJsx> */}
      {/* <StyledComponents></StyledComponents> */}
      {/* <Emotion></Emotion> */}
      <TailwindCss></TailwindCss>
    </>
  );
};
