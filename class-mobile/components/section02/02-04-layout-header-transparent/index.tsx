import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

// const address = 'http://172.16.0.69:3000'; //내 핸드폰에서 접속하기
// const address = 'http://10.0.2.2:3000'; //안드로이드 애뮬레이터에서 접속하기
const address = 'http://127.0.0.1:3000'; //IOS시뮬레이터에서 접속하기

export default function LayoutHeaderTransparent() {
  return (
    // flex : 1 -> 전체 크기로 보이게 해달라. 전체로 보여줘라.
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{ uri: `${address}/section02/02-04-layout-header-transparent` }}
      />
    </SafeAreaView>
  );
}
