import { ReactNode } from 'react';
import { HeaderGlobal } from './header';

interface IProps {
  children: ReactNode;
}

//글로벌 헤더(투명포함) + 로컬헤더(투명포함)
export default function LayoutTransparent({ children }) {
  return (
    <div>
      <HeaderGlobal />
      {children}
    </div>
  );
}
