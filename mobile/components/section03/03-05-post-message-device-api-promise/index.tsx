import { useRef } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const address = 'http://127.0.0.1:3000';

export default function PostMsgDeviceAPIPromise() {
  const webViewRef = useRef<WebView>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      <WebView
        ref={webViewRef}
        source={{
          uri: `${address}/section03/03-05-post-message-device-api-promise`,
        }}
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;
          // 문자열로 받은거 객체로 변경해야함
          const request = JSON.parse(event.nativeEvent.data);
          switch (request.query) {
            case 'fetchDeviceSystem': {
              webViewRef.current?.postMessage(
                JSON.stringify({
                  fetchDeviceSystem: { systemVersion: '18.0.1' }, //expo-constants 라이브러리 설치 후 조회 가능
                })
              );
              break;
            }
            case 'fetchDeviceSystemPlatform': {
              webViewRef.current?.postMessage(
                JSON.stringify({
                  fetchDeviceSystemPlatform: { PlatformName: 'Iphone 12 mini' }, //expo-device 라이브러리 설치 후 조회 가능
                })
              );
              break;
            }
            case 'fetchDeviceLocation': {
              webViewRef.current?.postMessage(
                JSON.stringify({
                  fetchDeviceLocation: {
                    // expo-location 라이브러리 설치 후 조회 가능
                    lat: 37,
                    lng: 127,
                  },
                })
              );
              break;
            }
          }
        }}
      />
    </SafeAreaView>
  );
}
