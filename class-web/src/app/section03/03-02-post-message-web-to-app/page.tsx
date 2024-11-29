'use client';
declare const window: Window & {
  // 여기에 하나가 더 추가가 됐어. Window에
  ReactNativeWebView: {
    // 데이터를 주고받을땐 반드시 string 타입으로 주고 받아야함
    postMessage: (msg: string) => void;
  };
};
export default function PostMsgWebToApp() {
  const sendMsgToApp = () => {
    // ReactNativeWebView : react-native 웹 위에서 앱을 켰기 때문에 사용
    // 데이터를 주고받을땐 반드시 string 타입으로 주고 받아야함
    window.ReactNativeWebView.postMessage('app에게 주는 데이터 mock');
  };
  return <button onClick={sendMsgToApp}>App에게 데이터 주기</button>;
}
