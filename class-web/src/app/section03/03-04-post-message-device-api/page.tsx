'use client';

declare const window: Window & {
  // 여기에 하나가 더 추가가 됐어. Window에
  ReactNativeWebView: {
    // 데이터를 주고받을땐 반드시 string 타입으로 주고 받아야함
    postMessage: (msg: string) => void;
  };
};

import { useEffect } from 'react';

export default function PostMsgDeviceAPI() {
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기하기
    document.addEventListener('message', (message: any) => {
      alert(`mobile에서 보내준 데이터, ${message.data}`);
    });

    //2. IOS에서 수신 대기
    window.addEventListener('message', (message: any) => {
      alert(`mobile에서 보내준 데이터, ${message.data}`);
    });
  });

  //3. API 요청하는 기능들
  const onClickSystemVersion = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        query: 'fetchDeviceSystem',
      })
    );
  };
  const onClickSystemPlatform = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        query: 'fetchDeviceSystemPlatform',
      })
    );
  };
  const onClickLocation = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        query: 'fetchDeviceLocation',
      })
    );
  };
  return (
    <>
      <button onClick={onClickSystemVersion}>App - 핸드폰 버전정보</button>
      <br />
      <button onClick={onClickSystemPlatform}>App - 핸드폰 기종정보</button>
      <br />
      <button onClick={onClickLocation}>App - 핸드폰 위치정보</button>
    </>
  );
}
