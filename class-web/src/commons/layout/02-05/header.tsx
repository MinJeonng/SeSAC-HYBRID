'use client';

import { useParams, usePathname } from 'next/navigation';
import { HEADER_OPTIONS } from './constants';

// 1. 베이스 헤더 - 이걸로 글로벌, 로컬헤더 만듦
const HeaderBase = ({ hasLogo, hasBack, title, children, isTransparent }) => {
  return (
    <header
      style={{
        display: 'flex',
        width: '100vw',
        backgroundColor: 'silver',
        // 3rem이 50px...
        height: '3rem',
        gap: '0.312rem',

        //02-04
        position: 'fixed', //1. 투명한 영역 아래에 사진, 지도 등이 보이기 2. 게시글등록 등 헤더 아래로 스크롤하기
        zIndex: 100, //position으로 쌓임맥락을 형성한 다른 컴텐츠가 있더라도 위로올려
        backgroundColor: isTransparent ? 'transparent' : 'pink',
      }}
    >
      {hasLogo && <div>logo</div>}
      {hasBack && <div>[ 뒤로가기 버튼 ]</div>}
      {title ? <div>{title}</div> : ''}
      {/* 북마크 or children은 위치 확인해서 넣으면됌 */}
      {children ? <>{children}</> : <></>}
    </header>
    {isTransparent ? <></> :<div style={{height : '3.125rem'}}></div>}
  );
};

// 2. 글로벌 헤더
export function HeaderGlobal() {
  const { id } = useParams();
  const pathname = usePathname();
  // 내가 접속한 페이지가 글로벌에 있으면  해당 헤더가 나오는 것
  // 즉, options가 있으면 global페이지에 있다는 것!!!
  const options = HEADER_OPTIONS({ id }).GLOBAL[pathname];
  return (
    <div style={{ display: options ? 'block' : 'none' }}>
      <HeaderBase {...options} />
    </div>
  );
}

// 3. 로컬 헤더

export function HeaderLocal({ children, ...rest }) {
  const { id } = useParams();
  const pathname = usePathname();
  // 내가 접속한 페이지가 로컬에 있으면  해당 헤더가 나오는 것
  // 로컬은 option이 없어야지 로컬이니까
  const options = HEADER_OPTIONS({ id }).LOCAL[pathname];
  // 이렇게 rest로 하면 넘겨주는 props 모두 하나로 퉁치고 가져올 수 있음
  return (
    //  이 부분 다시 확인해보기
    <div style={{ display: options ? 'block' : 'none' }}>
      <HeaderBase {...rest} {...options}>
        {children}
      </HeaderBase>
    </div>
  );
}
