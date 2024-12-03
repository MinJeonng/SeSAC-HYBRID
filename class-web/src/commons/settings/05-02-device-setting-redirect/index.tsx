'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// custom hook에도 쓰고 이 파일에서도 씀 -> 즉 requestAPIS는 공유하는 것
export const requestAPIS = {};

//  레이아웃에 이걸 넣으면 어떤 곳에서도 useEffect가 발동되어서 해결
export default function DeviceSettingRedirect({ children }) {
  const router = useRouter();
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기하기
    document.addEventListener('message', (message: any) => {
      if (!message.data) return;
      const response = JSON.parse(message.data);
      if (response.redirect) {
        // page가 있으면 일로 리다이렉트
        return router.push(response.redirect);
      }

      // 없으면 아래생성해서 하기
      const query = Object.keys(response)[0];
      const resolve = requestAPIS[query];
      resolve({ data: response });

      delete requestAPIS[query];
    });

    //2. IOS에서 수신 대기
    window.addEventListener('message', (message: any) => {
      if (!message.data) return;
      const response = JSON.parse(message.data);

      if (response.redirect) return router.push(response.redirect);

      const query = Object.keys(response)[0]; //이건 다 예시 : fetchDeviceLocation
      const resolve = requestAPIS[query]; //예시 : resolve3
      resolve({ data: response });
      delete requestAPIS[query];
    });
  }, []);
  return <>{children}</>;
}
