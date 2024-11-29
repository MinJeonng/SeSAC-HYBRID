import { Button, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const address = 'http://127.0.0.1:3000';
export default function PostMsgWebToApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      <WebView
        source={{
          uri: `${address}/section03/03-02-post-message-web-to-app`,
        }}
        // 웹이 앱한테 데이터를 줄 것
        // 여기서 event라는 걸로 받음
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;
          console.log(`web에서 보내준 데이터: ${event.nativeEvent.data} `);
          alert(`web에서 보내준 데이터 : ${event.nativeEvent.data}`);
        }}
      />
    </SafeAreaView>
  );
}
