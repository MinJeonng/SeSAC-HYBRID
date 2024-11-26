import { SafeAreaView, StatusBar } from 'react-native';
import WebView from 'react-native-webview';

export default function WebViewWithNextPage() {
  return (
    // flex : 1 -> 전체 크기로 보이게 해달라. 전체로 보여줘라.
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      {/* 이거 web-mobile 연결할때 web에서 yarn dev해서 열어놓고 mobile에서 실행하면됌 */}
      <WebView
        source={{
          //1. 내 핸드폰
          // 내 핸드폰에서 localhost에 연결된 컴퓨터를 연결해야함  => qr코드 아래에 나오는 IP주소
          // 172.16.11.245 이런 ip주소는 네트워크에 따라 계속 바뀔 수 있음
          // uri : "http://172.16.11.245:3000/section01/01-04-webview-with-next"

          //2. 안드로이드 애뮬레이터
          // 안드로이드 기계에서 localhost는 => 10.0.2.2
          uri: 'http://10.0.2.2:3000/section01/01-04-webview-with-next',

          //3. IOS 시뮬레이터 -> 127.0.0.1 (ios에서 localhost)
          // uri : "http://127.0.0.1:3000/section01/01-04-webview-with-next"
        }}
      />
    </SafeAreaView>
  );
}
