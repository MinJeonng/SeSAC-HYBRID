'use client';

import { usePathname } from 'next/navigation';
import { HEADER_OPTIONS } from './constants';

export default function HeaderGlobal() {
  const pathname = usePathname();
  const options = HEADER_OPTIONS.GLOBAL[pathname]; //{ title: '게시글 등록', hasLogo : false, hasBack : true } 이게 나오게 된다.
  return (
    <header
      style={{
        display: 'flex',
        width: '100vw',
        backgroundColor: 'silver',
        // 3rem이 50px...
        height: '3rem',
        gap: '0.312rem',
      }}
    >
      {options.hasLogo && <div>logo</div>}
      {options.hasBack && <div>[ 뒤로가기 버튼 ]</div>}
      {options.title ? <div>{options.title}</div> : ''}
    </header>
  );
}
