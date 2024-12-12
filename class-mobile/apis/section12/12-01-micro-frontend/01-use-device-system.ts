import { Platform, Linking, AppState } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

// 난여기서 api를 만들고 있는 것

export const useDeviceSystem = (onResponse) => {
  const isAndroid = Platform.OS === 'android';
  const isIos = Platform.OS === 'ios';

  const fetchDeviceSystemForAppSet = () => {
    onResponse({
      fetchDeviceSystemForAppSet: {
        appVersion:
          (isAndroid && Constants.expoConfig?.android?.versionCode) ||
          (isIos && Constants.expoConfig?.ios?.buildNumber),
      },
    });
  };

  const fetchDeviceSystemForPlatformSet = () => {
    onResponse({
      fetchDeviceSystemForPlatformSet: {
        os: Platform.OS,
        osVersion: Device.osVersion, // IOS 10.3
        modelName: Device.modelName, // iPhone 7 Plus
      },
    });
  };

  //06-01-open-setting-> 셋팅 화면 열기 (내가 원래 보고 있던 화면 위에 셋팅화면이 열리는 것)
  const openDeviceSystemForSettingSet = async () => {
    await Linking.openSettings(); //setting화면으로 넘어감
    onResponse({
      openDeviceSystemForSettingSet: {
        message: '이동완료',
      },
    });
  };
  //AppState 조회
  const FetchDeviceSystemForAppStateSet = () => {
    const isForeground = AppState.currentState === 'active'; //active가 아니면 background로취급
    onResponse({
      FetchDeviceSystemForAppStateSet: {
        isForeground, //이걸로 백그라운드인지 포그라운드인지 알 수 있게 해줌
      },
    });
  };

  return {
    fetchDeviceSystemForAppSet,
    fetchDeviceSystemForPlatformSet,
    openDeviceSystemForSettingSet,
    FetchDeviceSystemForAppStateSet,
  };
};
