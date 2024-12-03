// [section01]
import ConfirmSetting from '@/components/section01/01-01-helloworld';
import ReactNativeTagsPage from '@/components/section01/01-02-react-native-tags';
import WebviewPage from '@/components/section01/01-03-web-view';
import WebViewWithNextPage from '@/components/section01/01-04-webview-with-next';
import WebViewInternetFailPage from '@/components/section01/01-05-webview-internet-fail';
// [section02]
import RatioScalingPage from '@/components/section02/02-01-ratio-scaling';
import LayoutHeaderGlobal from '@/components/section02/02-02-layout-header-global';
import LayoutHeaderLocal from '@/components/section02/02-03-layout-header-local';
import LayoutHeaderTransparent from '@/components/section02/02-04-layout-header-transparent';
import LayoutFooterShortAndLong from '@/components/section02/02-05-layout-footer-short-long';
// [section03]
import WebviewLogPage from '@/components/section03/03-01-webview-log';
import PostMsgWebToApp from '@/components/section03/03-02-post-message-web-to-app';
import PostMsgAppToWeb from '@/components/section03/03-03-post-message-app-to-web';
import PostMsgDeviceAPI from '@/components/section03/03-04-post-message-device-api';
import PostMsgDeviceAPIPromise from '@/components/section03/03-05-post-message-device-api-promise';
import PostMsgDeviceAPIPromiseRefactoring from '@/components/section03/03-06-post-message-device-api-promise-refactoring';

// [section05]
import ScheduleNotificationsPage from '@/components/section05/05-01-schedule-notifications';
import ScheduleNotificationsClickPage from '@/components/section05/05-02-schedule-notifications-click';

export default function startPage() {
  return (
    // <ConfirmSetting />
    // <ReactNativeTagsPage />

    // <WebviewPage />
    // <WebViewWithNextPage />
    // <WebViewInternetFailPage />
    // <RatioScalingPage />
    // <LayoutHeaderGlobal />

    // <LayoutHeaderLocal />
    // <LayoutHeaderTransparent />
    // <LayoutFooterShortAndLong />
    // <WebviewLogPage />
    // <PostMsgWebToApp />
    // <PostMsgAppToWeb />
    // <PostMsgDeviceAPI />
    // <PostMsgDeviceAPIPromise />
    // <PostMsgDeviceAPIPromiseRefactoring />

    // <ScheduleNotificationsPage />
    <ScheduleNotificationsClickPage />
  );
}
