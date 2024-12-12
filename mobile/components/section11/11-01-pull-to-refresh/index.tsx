import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { useApis } from '@/apis/section11/11-01-pull-to-refresh';
import { FlatList } from 'react-native';

const address = 'http://127.0.0.1:3000';
// const address = 'http://10.0.2.2:3000';
// const address = 'http://172.16.0.69:8081';

// api는 api 폴더에 따로 저장

export default function PullToRefresh() {
  const webViewRef = useRef<WebView>(null); //이걸 apis 폴더에 전달해야함
  const { onRequest, layout } = useApis(webViewRef);

  return (
    <>
      {/* 노치에 태그들 겹치기 state */}
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'white' }} // 안드로이드 + IOS 노치 배경색
        edges={layout.isNotchTranslucent ? [] : undefined} // 안드로이드 + IOS 노치 겹치기
      >
        <StatusBar style="dark" />

        {/**1. 웹뷰를 통째로 리프레시 하는 방법 */}
        {/* <WebView pullToRefreshEnabled /> */}

        {/**2. <FlatList/> 활용하여 react-native 에서 제공하는 리프레시 하는 방법 */}
        {/* <FlatList data={[]} refreshControl={} onRefresh={} /> */}

        {/* 3. 웹 뷰 내에서 목록만 리프레시 하는 방법 */}
        {/* class-web에서 진행할 예정 */}

        <WebView
          ref={webViewRef}
          source={{
            uri: `${address}/section11/11-01-pull-to-refresh`,
          }}
          onMessage={(event) => {
            if (!event.nativeEvent.data) return;
            const request = JSON.parse(event.nativeEvent.data); // 이걸 apis 폴더에 전달해야함
            onRequest(request.query, request.variables);
          }}
          setBuiltInZoomControls={layout.isPinchZoom}
        />
      </SafeAreaView>
    </>
  );
}
