import { ReactNode } from 'react';
import { HeaderGlobal } from './header';

interface IProps {
  children: ReactNode;
}

///글로벌 헤더 + 로컬헤더 + 숏컨텐츠푸터 + 롱컨텐츠 푸터
export default function LayoutFooterShortAndLong({ children }: IProps) {
  return (
    // 여기 div가 footer의 부모가 되는 것
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh', //최소 높이가 100vh가 되는거고 컨텐츠가 많아지면 더 길어짐
      }}
    >
      <HeaderGlobal />
      {/* div이런걸로 감싸있으면 박스가 생기기에 fragment 사용 */}
      <>{children}</>
    </div>
  );
}
