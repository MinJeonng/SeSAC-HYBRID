import { gql, useApolloClient } from '@apollo/client';
import { useDeviceSettingMicroFrontend } from '../12-02-device-setting-micro-frontend/hooks';

export const useApolloSettingMicroFrontendSharedCache = () => {
  const client = useApolloClient();

  const { fetchApp } = useDeviceSettingMicroFrontend();

  const onLoadSharedCache = async () => {
    const result = await fetchApp({ query: 'fetchDeviceCacheForApolloSet' });
    const entries = Object.entries(result.data.fetchDeviceCacheForApolloSet);
    if (!entries.length) return;

    //operationName은 중복을 막기위한 key 관리용도 , 직접 사용하진 않음
    entries.map(([operationName, { printedQuery, data }]) => {
      client.writeQuery({
        query: gql`
          ${printedQuery}
        `,
        data,
      });
    });
  };
  // 이런 원리로 이루어진다.
  const onLoadSharedToken = () => {
    // fetchApp({
    //   query: 'fetchDeviceAuthForAccessTokenSet',
    // });
    // fetchApp({
    //   query: 'fetchDeviceAuthForRefreshTokenSet',
    // });
    // setAccessToken(); //zustand
    // setRefreshToken(); //zustand에서 설정
  };

  return {
    onLoadSharedCache,
    onLoadSharedToken,
  };
};
