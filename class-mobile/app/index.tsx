// [section01]
import ConfirmSetting from '@/components/section01/01-01-helloworld';
import ReactNativeTagsPage from '@/components/section01/01-02-react-native-tags';
import WebviewPage from '@/components/section01/01-03-web-view';
import WebViewWithNextPage from '@/components/section01/01-04-webview-with-next';
import WebViewInternetFailPage from '@/components/section01/01-05-webview-internet-fail';

export default function startPage() {
  return (
    // <ConfirmSetting />
    // <ReactNativeTagsPage />

    // <WebviewPage />
    // <WebViewWithNextPage />
    <WebViewInternetFailPage />
  );
}
