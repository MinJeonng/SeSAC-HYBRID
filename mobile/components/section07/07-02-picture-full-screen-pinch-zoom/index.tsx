import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { useApis } from '@/apis/section07/07-02-picture-full-screen-pinch-zoom';

const address = 'http://127.0.0.1:3000';
// const address = 'http://10.0.2.2:3000';
// const address = 'http://172.16.0.69:8081';

// api는 api 폴더에 따로 저장

export default function PictureFullScreenPinchZoom() {
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
            uri: `${address}/section07/07-02-picture-full-screen-pinch-zoom`,
          }}
          onMessage={(event) => {
            if (!event.nativeEvent.data) return;
            const request = JSON.parse(event.nativeEvent.data); // 이걸 apis 폴더에 전달해야함
            onRequest(request.query, request.variables);
          }}
          //textZoom={100} //text크기 강제고정 -> 사용자 앱 내 브라우저 폰트 등 개별설정 막기 -> 필요한 경우가 대부분이다!
          // 사진 원본을 들어갔을때, 확대 축소 되게 만들어준 것.
          setBuiltInZoomControls={layout.isPinchZoom}
        />
      </SafeAreaView>
    </>
  );
}
