'use client';

import { webviewLog } from '@/commons/lib/03-01-webview-log';

export default function WebviewLogPage() {
  const onClickBtn = () => {
    console.log('이것은 웹뷰입니다. chrome'); //크롬 인스펙트 확인
    webviewLog('이것은 next에서 확인하는 웹뷰입니다'); // next서버 확인
  };
  return <button onClick={onClickBtn}>버튼 클릭하기</button>;
}
