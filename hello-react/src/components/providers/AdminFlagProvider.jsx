// Context의 프로바이더

import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 관리자 플래그
  const [isAdmin, setIsAdmin] = useState(false);

  // AdminFlagContext 안에 Provider가 있으므로 각각 children을 감쌈.
  // value 안에 글로벌로 다룰 실젯값을 설정
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
