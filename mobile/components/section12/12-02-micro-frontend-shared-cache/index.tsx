import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { Text, View } from 'react-native';
import { useApis } from '@/apis/section12/12-02-micro-frontend-shared-cache';

const address = 'http://127.0.0.1:3000'; // (게시판 서비스)
const AddAddress = 'http://127.0.0.1:3500'; //supplement 웹뷰 주소 (내설정 서비스)

// const address = 'http://10.0.2.2:3000';
// const address = 'http://172.16.0.69:8081';

// api는 api 폴더에 따로 저장

export default function MicroFrontendSharedCache() {
  const webViewRef = useRef<WebView>(null); //이걸 apis 폴더에 전달해야함
  const { onRequest, layout, onResponse } = useApis(webViewRef);
  const [menu, setMenu] = useState('게시판');

  // 버튼을 누르면 메뉴 바뀌는 함수
  // selectedMenu : 우리가 주고싶은거 , 그 뒤에 괄호 : event - 내가 선택한 text
  const onPressMenu = (selectedMenu: string) => () => {
    setMenu(selectedMenu);
  };

  // 12-02-micro-frontend, menu 바뀔때마다 알림, 변경됨 메뉴에 캐시 동기화하기
  useEffect(() => onResponse({ menuChange: true }), [menu]);

  return (
    <>
      {/* 노치에 태그들 겹치기 state */}
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'white' }} // 안드로이드 + IOS 노치 배경색
        edges={layout.isNotchTranslucent ? [] : undefined} // 안드로이드 + IOS 노치 겹치기
      >
        <StatusBar style="dark" />

        {/* 웹뷰가 두개가 생겨야 하니까   : 12-01 수업에서 추가됌*/}
        {/* 메뉴 1 : 게시판 메뉴 웹뷰 */}
        <WebView
          ref={menu === '게시판' ? webViewRef : null} //보여지고 있는 웹뷰에만 모바일 디바이스랑 연결되게.
          source={{
            uri: `${address}/section12/12-02-micro-frontend-shared-cache`,
          }}
          onMessage={(event) => {
            if (!event.nativeEvent.data) return;
            const request = JSON.parse(event.nativeEvent.data); // 이걸 apis 폴더에 전달해야함
            onRequest(request.query, request.variables);
          }}
          style={{ display: menu === '게시판' ? 'flex' : 'none' }} //12-01에서 추가
          // setBuiltInZoomControls={layout.isPinchZoom}
        />

        {/* 메뉴 2 : 내설정 메뉴 웹뷰 */}
        <WebView
          ref={menu === '내설정' ? webViewRef : null}
          source={{
            uri: `${AddAddress}/section12/12-02-micro-frontend-shared-cache`,
          }}
          onMessage={(event) => {
            if (!event.nativeEvent.data) return;
            const request = JSON.parse(event.nativeEvent.data); // 이걸 apis 폴더에 전달해야함
            onRequest(request.query, request.variables);
          }}
          style={{ display: menu === '내설정' ? 'flex' : 'none' }} //12-01에서 추가
          // setBuiltInZoomControls={layout.isPinchZoom}
        />

        {/* 12-01에서 사용 */}
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {/* 두개의 바텀 내비게이션 만듦 */}
          {/* onPressMenu('게시판') --> selectedMenu에는 게시판이 들어가고, 보기에는 생략되었지만
          뒤에 괄호에는 event가 알아서 들어가게됌 */}
          <Text onPress={onPressMenu('게시판')}>[ 게시판 ]</Text>
          <Text onPress={onPressMenu('내설정')}>[ 내설정 ]</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
