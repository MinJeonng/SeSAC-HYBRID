import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const useDeviceAuth = (onResponse) => {
  const [accessToken, setAccessToken] = useState('');
  const updateDeviceAuthForAccessTokenSet = (variables) => {
    setAccessToken(variables.accessToken);
    onResponse({
      updateDeviceAuthForAccessTokenSet: {
        message: '저장완료',
      },
    });
  };
  const updateDeviceAuthRefreshTokenSet = async (variables) => {
    //1. AsyncStorage => 앱의 로컬스토리지

    // 비밀번호나 토큰 관련된건 아래와 같이 하면 좋지않음
    // AsyncStorage.setItem('refreshToken', variables.refreshToken);

    //2. SecureStorage => 암호화된 스토리지
    // => 안드로이드는 SharedPreferences 저장소에 들어가게 됌 (keystore로 암호화되어 저장됌)
    // => iOS는 Keychain Storage 저장소에 들어가게 됌 (Keychain에 암호화되어 저장됨)

    await SecureStore.setItemAsync('refreshToken', variables.refreshToken);

    onResponse({
      updateDeviceAuthRefreshTokenSet: {
        message: '저장완료',
      },
    });
  };
  const fetchDeviceAuthForAccessTokenSet = () => {
    onResponse({
      fetchDeviceAuthForAccessTokenSet: {
        accessToken,
      },
    });
  };
  const fetchDeviceAuthRefreshTokenSet = async () => {
    const refreshToken = await SecureStore.getItemAsync('refreshToken');
    onResponse({
      fetchDeviceAuthRefreshTokenSet: {
        refreshToken,
      },
    });
  };

  return {
    updateDeviceAuthForAccessTokenSet,
    updateDeviceAuthRefreshTokenSet,
    fetchDeviceAuthForAccessTokenSet,
    fetchDeviceAuthRefreshTokenSet,
  };
};
