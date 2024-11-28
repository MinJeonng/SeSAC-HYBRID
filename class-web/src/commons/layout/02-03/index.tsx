import { ReactNode } from 'react';
import { HeaderGlobal } from './header';

interface IProps {
  children: ReactNode;
}

//글로벌 헤더 + 로컬헤더
// 글로벌 헤더가 나타나야할땐 나타나고 아닐땐 로컬만 나타나게 header.ts에서 적용
export default function LayoutGlobalLocal({ children }: IProps) {
  return (
    <div>
      <HeaderGlobal />
      {children}
    </div>
  );
}
