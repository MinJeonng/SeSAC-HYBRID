'use client';

declare const window: Window & {
  // 여기에 하나가 더 추가가 됐어. Window에
  ReactNativeWebView: {
    // 데이터를 주고받을땐 반드시 string 타입으로 주고 받아야함
    postMessage: (msg: string) => void;
  };
};

import { useEffect } from 'react';

const requestAPIS = {
  // fetchDeviceSystem: null, => API 요청시에 null 대신에 resolve 들어옴 . 매번 하나하나 각각의 api를 요청할 수 없음
  // 각 요청한 API별로 resolve가 다름 , 여기선 확인하기 쉽게 resolve 옆에 숫자 붙임
};
export default function PostMsgDeviceAPIPromise() {
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기하기
    document.addEventListener('message', (message: any) => {
      // 문자열로 들어온거 객체로 변환해서 변수에 담기
      const response = JSON.parse(message.data);
      // 객체에서 키 뽑기
      const query = Object.keys(response)[0]; //예를 들어 fetchDeviceLocation안을 배열로 만들어서 몇번째인지 쓸 수 있음, 각자에 해당하는 값을 가져와야함
      const resolve = requestAPIS[query]; //fetchDeviceLocation 라고 하면 resolve3 이 매칭되게 됌
      resolve({ data: response }); // 안에 객체부분이 03에 result에 들어가게 되는 것 -> 아래가 예시, 저게 result에 들어가게 되는 것
      // resolve({
      //   data: {
      //     fetchDeviceLocation: {
      //       lat: 37,
      //       lng: 127,
      //     },
      //   },
      // });
      delete requestAPIS[query];
    });

    //2. IOS에서 수신 대기
    window.addEventListener('message', (message: any) => {
      const response = JSON.parse(message.data);
      const query = Object.keys(response)[0]; //이건 다 예시 : fetchDeviceLocation
      const resolve = requestAPIS[query]; //예시 : resolve3
      resolve({ data: response });
      delete requestAPIS[query];
    });
  });

  //3. API 요청하는 기능들
  // 요청을 하면 응답이 02번이나 01번에서 지금까지 주었고 거기서 해결했는데 그걸 01.02번에서 데이터를 받으면
  // 그걸 다시 여기 기능들에다가 넘겨주자는 것 : Promise

  const onClickSystemVersion = async () => {
    const result = await new Promise((resolve1) => {
      // resolve 를 01,02번 쪽에서 받아줘야함
      requestAPIS['fetchDeviceSystem'] = resolve1; // 여기서 결과를 받음
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          // 여기선 요청
          query: 'fetchDeviceSystem',
        })
      );
    });
    alert(result.data.fetchDeviceSystem.systemVersion);
  };
  const onClickSystemPlatform = async () => {
    const result = await new Promise((resolve2) => {
      requestAPIS['fetchDeviceSystemPlatform'] = resolve2;
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          query: 'fetchDeviceSystemPlatform',
        })
      );
    });
    alert(result.data.fetchDeviceSystemPlatform.PlatformName);
  };
  const onClickLocation = async () => {
    const result = await new Promise((resolve3) => {
      requestAPIS['fetchDeviceLocation'] = resolve3;
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          query: 'fetchDeviceLocation',
        })
      );
    });
    alert(result.data.fetchDeviceLocation.lat);
    alert(result.data.fetchDeviceLocation.lng);
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
