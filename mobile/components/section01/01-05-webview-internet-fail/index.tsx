import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

// const address = 'http://172.16.0.69:3000'; //내 핸드폰에서 접속하기
// const address = 'http://10.0.2.2:3000'; //안드로이드 애뮬레이터에서 접속하기
const address = 'http://127.0.0.1:3000'; //IOS시뮬레이터에서 접속하기

export default function WebViewInternetFailPage() {
  const [isError, setIsError] = useState(false);
  return (
    // flex : 1 -> 전체 크기로 보이게 해달라. 전체로 보여줘라.
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      {/* 이거 web-mobile 연결할때 web에서 yarn dev해서 열어놓고 mobile에서 실행하면됌 */}
      {isError && (
        <View>
          <Text>웹 뷰 접속에 실패했어요!</Text>
          <Text>인터넷 연결을 확인해주세요.</Text>
        </View>
      )}

      {!isError && (
        <WebView
          source={{ uri: `${address}/section01/01-05-webview-internet-fail` }}
          onError={() => setIsError(true)}

          // 아래 코드가 몇초 뒤에도 안나오면 에러문구가 나오게끔 해도 됌
          // onLoadStart={}
          // onLoadEnd={}
        />
      )}
    </SafeAreaView>
  );
}
