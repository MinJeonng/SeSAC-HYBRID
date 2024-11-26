import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
export default function WebviewPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      {/* 웹뷰안에서 네이버를 볼 수 있음 */}
      <WebView source={{ uri: 'https://www.naver.com' }} />
    </SafeAreaView>
  );
}
