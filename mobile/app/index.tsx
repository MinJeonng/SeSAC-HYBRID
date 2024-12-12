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

//[section04]
import DeviceSystemApi from '@/components/section04/04-01-device-system-api';

// [section05]
import ScheduleNotificationsPage from '@/components/section05/05-01-schedule-notifications';
import ScheduleNotificationsClickPage from '@/components/section05/05-02-schedule-notifications-click';

//[section06]
import OpenSettings from '@/components/section06/06-01-open-settings';

// [section07]
import PictureFullScreen from '../components/section07/07-01-picture-full-screen/02-after-index';
import PictureFullScreenPinchZoom from '@/components/section07/07-02-picture-full-screen-pinch-zoom';

// [section09]
import ViewTransitionPage from '@/components/section09/09-01-view-transition';

// [section10]
import LoginRefreshToken from '@/components/section10/10-01-login-refreshToken';

// [section11]
import PullToRefresh from '@/components/section11/11-01-pull-to-refresh';

// [section12]
import MicroFrontend from '@/components/section12/12-01-micro-frontend';
import MicroFrontendSharedCache from '@/components/section12/12-02-micro-frontend-shared-cache';

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

    <DeviceSystemApi />

    // <ScheduleNotificationsPage />
    // <ScheduleNotificationsClickPage />
    // <OpenSettings />
    // <PictureFullScreen />
    // <PictureFullScreenPinchZoom />

    // <ViewTransitionPage />

    // <LoginRefreshToken />
    // <PullToRefresh />

    // <MicroFrontend />
    // <MicroFrontendSharedCache />
  );
}
