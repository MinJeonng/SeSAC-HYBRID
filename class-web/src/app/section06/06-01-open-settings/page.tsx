'use client';
import { useDeviceSetting } from '@/commons/settings/05-02-device-setting-redirect/hook';

export default function OpenSettingsPage() {
  //1. 권한설정 클릭시, 설정화면으로 이동
  //2. 현재 내가 foreground인지 background인지 감지하기

  const { fetchApp } = useDeviceSetting();
  const onClickApis = async () => {
    // 1. 셋팅화면 보여줘
    await fetchApp({ query: 'openDeviceSystemForSettingSet' });

    //  주의 : 아래의 코드는 셋팅 화면에서 돌아온 후 실행되는 것 아님!
    //        셋팅화면이 내 앱 위에 올라왔을 뿐, 내 앱은 백그라운드에서 여전히 동작중
    //        따라서, 현재 함수내의 코드들 모두 실행됌(setting 화면이랑 상관없이)

    // 2. foreground로 돌아왔는지 아닌지 확인해줘
    const interval = setInterval(async () => {
      const result = await fetchApp({
        query: 'FetchDeviceSystemForAppStateSet',
      });
      const isForeground =
        result.data.FetchDeviceSystemForAppStateSet.isForeground;
      console.log(isForeground);
      //- 백그라운드 상태면 3,4번이 실행되면 안됌
      if (!isForeground) return;

      // 3. foreground로 돌아왔다면 변경된 권한 조회해줘(위치 또는 알림 등등...)
      // 처리로직
      console.log('권한을 다시 조회할게요, 추후엔 여기에 처리로직이 실행됌');

      // 4. 종료되면 interval 삭제
      clearInterval(interval);
    }, 1000);
  };
  return <button onClick={onClickApis}>[ 권한 설정 ]</button>;
}
