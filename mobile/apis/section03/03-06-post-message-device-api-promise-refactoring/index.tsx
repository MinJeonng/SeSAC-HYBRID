export const useApis = (webViewRef) => {
  //응답하는 함수
  const onResponse = (result) => {
    webViewRef.current?.postMessage(JSON.stringify(result));
  };

  //요청하는 함수
  const onRequest = (query) => {
    switch (query) {
      case 'fetchDeviceSystem': {
        onResponse({
          fetchDeviceSystem: { systemVersion: '18.0.1' },
        });

        break;
      }
      case 'fetchDeviceSystemPlatform': {
        onResponse({
          fetchDeviceSystemPlatform: { PlatformName: 'Iphone 12 mini' },
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
