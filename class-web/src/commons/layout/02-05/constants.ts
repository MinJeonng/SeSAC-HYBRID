// prettier-ignore
export const HEADER_OPTIONS =({id})=> ({
  GLOBAL: {
    '/section02/02-02-layout-header-global': { title: '게시글 등록', hasLogo : true, hasBack : false },
    '/section02/02-04-layout-header-transparent' : {title : '사진상세', hasLogo : false, hasBack : true, isTransparent : true},
    '/section02/02-04-layout-header-untransparent' : {title : '게시글 등록', hasLogo : false, hasBack : true, isTransparent : false}
  },
   // [section02-03] 아래 해당
   LOCAL : {
    // 다이나믹 라우팅 페이지로 데이터로 받아온 title을 로컬 헤더에서 넘겨줘서 보여주게끔 하는 작업
    // 객체의 key가 변수일땐 []에 감싸줘야함, 이건 배열의 대괄호가 아님
   [ `section02/02-03-layout-header-local/${id}`]: {title : '', hasLogo : false, hasBack : true}
   
   }
});
