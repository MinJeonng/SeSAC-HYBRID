import { Button, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const address = 'http://127.0.0.1:3000';
export default function WebviewLogPage() {
  const onPressBtn = () => {
    console.log('webview log page: Button clicked');
  };
  return (
    // 그냥 SafeAreaView 이거를 하면 ios에서 노치가 겹치지 않게됌. 그냥 view를 해야지만 겹쳐져서 보이게됌
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{
          uri: `${address}/section03/03-01-webview-log`,
        }}
      />
      <Button onPress={onPressBtn} title={'모바일 로그를 확인하세요.'} />
    </SafeAreaView>
  );
}
