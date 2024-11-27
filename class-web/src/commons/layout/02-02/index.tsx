import { ReactNode } from 'react';
import HeaderGlobal from './header';

interface IProps {
  children: ReactNode;
}

export default function LayoutComponent({ children }: IProps) {
  return (
    <div>
      <HeaderGlobal />
      {children}
    </div>
  );
}
