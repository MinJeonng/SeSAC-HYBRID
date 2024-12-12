import Constants from 'expo-constants';
import * as Device from 'expo-device'; //앱 버전, 기기네임
import { Platform } from 'react-native';

export const useApis = (webViewRef) => {
  const isAndroid = Platform.OS === 'android';
  const isIos = Platform.OS === 'ios';

  //응답하는 함수
  const onResponse = (result) => {
    webViewRef.current?.postMessage(JSON.stringify(result));
  };

  //요청하는 함수
  // 각 기기의 버전을 알 수 있는 방법
  // 안드로이드 : versionCode
  // iOS : buildNumber

  const onRequest = (query) => {
    switch (query) {
      case 'fetchDeviceSystem': {
        onResponse({
          fetchDeviceSystem: {
            systemVersion:
              (isAndroid && Constants.expoConfig?.android?.versionCode) ||
              (isIos && Constants.expoConfig?.ios?.buildNumber),
          },
        });
        break;
      }
      case 'fetchDeviceSystemPlatform': {
        onResponse({
          fetchDeviceSystemPlatform: {
            os: Platform.OS,
            osVersion: Device.osVersion, // IOS 10.3 ...
            PlatformName: Device.modelName, // iphone 7 plus ...
          },
        });
        break;
      }
      case 'fetchDeviceLocation': {
        onResponse({
          fetchDeviceLocation: {
            lat: 37,
            lng: 127,
          },
        });
        break;
      }
    }
  };
  return { onRequest, onResponse };
};
