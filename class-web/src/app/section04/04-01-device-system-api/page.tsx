'use client';

import { useDeviceSetting } from '@/commons/settings/03-06-device-setting/hook';

export default function DeviceSystemApi() {
  // useEffect를 전역적으로 할 수 있게 refactoring
  // customhook에 promise 연결

  const { fetchApp } = useDeviceSetting();

  //3. API 요청하는 기능들
  const onClickSystemVersion = async () => {
    const result = await fetchApp({ query: 'fetchDeviceSystem' });
    alert(result.data.fetchDeviceSystem.systemVersion);
  };
  const onClickSystemPlatform = async () => {
    const result = await fetchApp({ query: 'fetchDeviceSystemPlatform' });
    alert(result.data.fetchDeviceSystemPlatform.PlatformName);
  };
  const onClickLocation = async () => {
    const result = await fetchApp({ query: 'fetchDeviceLocation' });
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
