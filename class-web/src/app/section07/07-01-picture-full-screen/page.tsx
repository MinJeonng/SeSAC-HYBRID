'use client';
import { useDeviceSetting } from '@/commons/settings/05-02-device-setting-redirect/hook';
import { useState } from 'react';

export default function OpenSettingsPage() {
  //1. 권한설정 클릭시, 설정화면으로 이동
  //2. 현재 내가 foreground인지 background인지 감지하기

  const { fetchApp } = useDeviceSetting();
  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // const onClickFullScreen = async () => {
  //   //로딩 처리하기
  //   setIsLoading(true); //1

  //   //다음 틱으로 넘기기
  //   window.setTimeout(() => {
  //     setIsFullScreen(true);
  //     fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });

  //     //로딩 해제하기 - 화면이 그려진 다음에 해제하는게 깔끔하니까 한번 더 settimeout
  //     window.setTimeout(() => {
  //       setIsLoading(false);
  //     }, 0);
  //   }, 0); //2
  //   //-> 하나의 함수안에서 실행시간을 다르게 할 수 있는 방법중에 setTimeout을 0초로 설정하는 것이다. 이렇게 하면 1,2번의 실행시간이 다름 (근데 이건 NEXT만 쓸때)
  // };
  const onClickFullScreen = async () => {
    //로딩 처리하기
    setIsLoading(true);

    //다음 틱으로 넘기기
    window.setTimeout(() => {
      setIsFullScreen(true);
      fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });

      //로딩 해제하기 - 화면이 그려진 다음에 해제하는게 깔끔하니까 한번 더 settimeout
      window.setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 100);
  };

  const onClickClose = async () => {
    setIsFullScreen(false);
    await fetchApp({ query: 'toggleDeviceLayoutForNotchTranslucentSet' });
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
