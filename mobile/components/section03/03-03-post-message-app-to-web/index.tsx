import { useRef } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const address = 'http://127.0.0.1:3000';
export default function PostMsgAppToWeb() {
  const webViewRef = useRef<WebView>(null);
  const onPressBtn = () => {
    webViewRef.current?.postMessage('app에서 web으로 데이터 보냅니다.');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      {/* 웹뷰가 전달해줘야함., onMessage를 쓸수없어서 그래서 컨트롤 하기 위해 ref생성*/}
      <WebView
        ref={webViewRef}
        source={{
          uri: `${address}/section03/03-03-post-message-app-to-web`,
        }}
      />
      <Button onPress={onPressBtn} title="web에게 데이터 주기" />
    </SafeAreaView>
  );
}
