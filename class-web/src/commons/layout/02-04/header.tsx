'use client';

import { useParams, usePathname } from 'next/navigation';
import { HEADER_OPTIONS } from './constants';

// 1. 베이스 헤더
const HeaderBase = ({ hasLogo, hasBack, title, children, isTransparent }) => {
  return (
    <>
      <header
        style={{
          display: 'flex',
          width: '100vw',
          height: '3rem',
          gap: '0.312rem',

          //02-04-layout-header-transparent : 투명한 헤더를 적용 -> 투명이든 아니든 겹치게끔 하려면 fixed
          position: 'fixed', //1. 투명한 영역 아래에 사진, 지도 등이 보이기  2. 게시글등록 등 헤더 아래로 스크롤하기
          zIndex: 100, // header를 항상 위로 올리기 위해서 적용함. position으로 쌓임맥락을 형성한 다른 컴텐츠가 있더라도 위로올리게 적용
          backgroundColor: isTransparent ? 'transparent' : 'pink',

          // + 헤더가 투명할때는 사진이나 지도가 겹치는게 맞는데, 투명하지 않을때는 헤더 밑에 게시물이 겹치지 않게 아래에 있는 하단레이어를 추가한 것
        }}
      >
        {hasLogo && <div>logo</div>}
        {hasBack && <div>[ 뒤로가기 버튼 ]</div>}
        {title ? <div>{title}</div> : ''}
        {/* 북마크 or children은 위치 확인해서 넣으면됌 */}
        {children ? <>{children}</> : <></>}
      </header>
      {/* 02-04 : 하단레이어 추가 */}
      {isTransparent ? <></> : <div style={{ height: '3rem' }}></div>}
    </>
  );
};

// 2. 글로벌 헤더
export function HeaderGlobal() {
  const params = useParams();
  const pathname = usePathname();

  const options = HEADER_OPTIONS(params).GLOBAL[pathname];
  return (
    <div style={{ display: options ? 'block' : 'none' }}>
      <HeaderBase {...options} />
    </div>
  );
}

// 3. 로컬 헤더

export function HeaderLocal({ children, ...rest }) {
  const params = useParams();
  const pathname = usePathname();
  // 내가 접속한 페이지가 로컬에 있으면  해당 헤더가 나오는 것
  // 로컬은 option이 없어야지 로컬이니까
  const options = HEADER_OPTIONS(params).LOCAL[pathname];
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
