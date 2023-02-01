/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // scss와 동일하게 작성하기
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // 인라인 스타일 - 자바스크립트 객체로 정의하기
  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion입니다</p>
      <SButton>버튼</SButton>
    </div>
  );
};

// 별도 패키지인 @emotion/styled 사용.
// styled-components 작성 하기
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
