// prettier-ignore
export const HEADER_OPTIONS =(params)=> ({
  GLOBAL: {
    '/section02/02-02-layout-header-global': { title: '게시글 등록', hasLogo : true, hasBack : false },
    '/section02/02-04-layout-header-transparent' : {title : '사진상세', hasLogo : false, hasBack : true, isTransparent : true},
    '/section02/02-04-layout-header-untransparent' : {title : '게시글 등록', hasLogo : false, hasBack : true, isTransparent : false},
    '/section02/02-05-layout-footer-short-and-long': {title : '게시글 등록', hasLogo : false, hasBack : true, isTransparent : false}
  },
   // [section02-03] 아래 해당
   LOCAL : {
   [ `/section02/02-03-layout-header-local/${params.id}`]: {title : '', hasLogo : false, hasBack : true}
   
   }
});
