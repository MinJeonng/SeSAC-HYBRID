'use client';
import { useDeviceSetting } from '@/commons/settings/05-02-device-setting-redirect/hook';
import { useState } from 'react';

export default function OpenSettingsPage() {
  //1. 권한설정 클릭시, 설정화면으로 이동
  //2. 현재 내가 foreground인지 background인지 감지하기

  const { fetchApp } = useDeviceSetting();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const onClickFullScreen = async () => {
    setIsFullScreen(true);
    await fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });
  };
  const onClickClose = async () => {
    setIsFullScreen(false);
    await fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });
  };

  return (
    <>
      {isFullScreen ? (
        <>
          {/* 모달 페이지 만들고 페러렐라우팅 */}
          <div className="flex-col justify-center flex bg-black w-lvw h-lvh">
            <button
              className="bg-white fixed left-5 top-10"
              onClick={onClickClose}
            >
              X
            </button>
            <img src="/images/스마일고양이.png" />
          </div>
        </>
      ) : (
        <div className="flex-col justify-center flex w-lvw h-lvh">
          <img src="/images/스마일고양이.png" />
          <button onClick={onClickFullScreen}>전체화면 보기</button>
        </div>
      )}
    </>
  );
}
