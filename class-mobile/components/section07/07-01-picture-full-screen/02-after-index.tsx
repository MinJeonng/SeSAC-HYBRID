import { useApis } from '@/apis/section07/07-01-picture-full-screen';
import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const address = 'http://127.0.0.1:3000';
// const address = 'http://10.0.2.2:3000';

// api는 api 폴더에 따로 저장

export default function PictureFullScreen() {
  const webViewRef = useRef<WebView>(null); //이걸 apis 폴더에 전달해야함
  const { onRequest, layout } = useApis(webViewRef);

  return (
    <>
      {/* 노치에 태그들 겹치기 state */}
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'white' }} // 안드로이드 + IOS 노치 배경색
        edges={layout.isNotchTranslucent ? [] : undefined} // 안드로이드 + IOS 노치 겹치기
      >
        {/* 안드로이드 + IOS 노치글자색 */}
        <StatusBar style="dark" />
        <WebView
          ref={webViewRef}
          source={{
            uri: `${address}/section07/07-01-picture-full-screen`,
          }}
          onMessage={(event) => {
            if (!event.nativeEvent.data) return;
            const request = JSON.parse(event.nativeEvent.data); // 이걸 apis 폴더에 전달해야함
            onRequest(request.query, request.variables);
          }}
        />
      </SafeAreaView>
    </>
  );
}
