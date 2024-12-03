'use client';

import { useEffect } from 'react';

// custom hook에도 쓰고 이 파일에서도 씀
export const requestAPIS = {};

//  레이아웃에 이걸 넣으면 어떤 곳에서도 useEffect가 발동되어서 해결
export default function DeviceSettingVariables({ children }) {
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기하기
    document.addEventListener('message', (message: any) => {
      const response = JSON.parse(message.data);
      const query = Object.keys(response)[0];
      const resolve = requestAPIS[query];
      resolve({ data: response });

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
  }, []);
  return <>{children}</>;
}
