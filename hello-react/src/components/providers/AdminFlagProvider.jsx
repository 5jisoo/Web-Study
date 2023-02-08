// Context의 프로바이더

import { createContext } from "react";

// 인수로 디폴트 값 설정 간으: 여기서는 빈 객체 사용
export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 동작 확인을 위해 적절한 객체를 정의
  const sampleObj = { sampleValue: "테스트" };

  // AdminFlagContext 안에 Provider가 있으므로 각각 children을 감쌈.
  // value 안에 글로벌로 다룰 실젯값을 설정
  return (
    <AdminFlagContext.Provider value={sampleObj}>
      {children}
    </AdminFlagContext.Provider>
  );
};
