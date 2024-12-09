'use client';
import { useDeviceSetting } from '@/commons/settings/05-02-device-setting-redirect/hook';
import { useState } from 'react';

export default function OpenSettingsPage() {
  const { fetchApp } = useDeviceSetting();
  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onClickFullScreen = async () => {
    //로딩 처리하기
    setIsLoading(true);

    //다음 틱으로 넘기기
    window.setTimeout(() => {
      setIsFullScreen(true);
      fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });
      fetchApp({ query: 'toggleDeviceLayoutForPinchZoomSet' }); // 이게 들어가게되면 true로 변하게 되는 것
      // meta tag 수정
      document.querySelector("meta[name='viewport']")?.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=3.0, user-scalable=yes' // 비율 지정한 그 이상으로는 적용안됌
      );

      //로딩 해제하기 - 화면이 그려진 다음에 해제하는게 깔끔하니까 한번 더 settimeout
      window.setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 100);
  };

  const onClickClose = async () => {
    setIsLoading(true);

    window.setTimeout(() => {
      setIsFullScreen(false);
      fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });
      fetchApp({ query: 'toggleDeviceLayoutForPinchZoomSet' });
      document
        .querySelector("meta[name='viewport']")
        ?.setAttribute(
          'content',
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=3.0, user-scalable=no'
        );

      window.setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 100);
  };

  if (isLoading) return <></>; //로딩중일땐 빈화면 보이게끔. 빈화면이 보이는 동안에 노치없애고, 풀스크린으로 전환하는 것. 사람들 눈에는 안보임
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
