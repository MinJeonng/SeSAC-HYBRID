import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import LayoutComponent from '@/commons/layout/02-02';
// import LayoutGlobalLocal from '@/commons/layout/02-03';
// import LayoutTransparent from '@/commons/layout/02-04';
// import LayoutFooterShortAndLong from '@/commons/layout/02-05';
// import DeviceSetting from '@/commons/settings/03-06-device-setting';
// import DeviceSettingVariables from '@/commons/settings/05-01-device-setting-addVariables';
import DeviceSettingRedirect from '@/commons/settings/05-02-device-setting-redirect';
import DeviceSettingViewTransition from '@/commons/settings/09-01-device-setting-view-transition';
import RoutingSettingViewTransition from '@/commons/settings/09-01-routing-setting-view-transition';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

//07-02-picture-full-screen-pitch-zoom => 모바일 웹 뷰 기능으로 부족함 대응(ios에서 Pinch 적용안되는 이슈)
export const viewport: Viewport = {
  width: 'device-width',
  // height: 'device-height',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1) 02-02-layout-header-global 에서 사용한 레이아웃 */}
        {/* <LayoutComponent>{children} </LayoutComponent> */}

        {/* 2) 02-03-layout-header-local 수업 이후에 적용 */}
        {/* <LayoutGlobalLocal>{children}</LayoutGlobalLocal> */}

        {/* 3) 02-04-layout-header-transparent */}
        {/* <LayoutTransparent>{children}</LayoutTransparent> */}

        {/* 4) 02-05-layout-footer-short-and-long */}
        {/* <LayoutFooterShortAndLong>{children}</LayoutFooterShortAndLong> */}

        {/* 5. 03-01-webview-log 이후 -> 레이아웃 의존하지 않고 수업 */}
        {/* {children} */}

        {/* 6. 03-06-post-message-device-api-promise-refactoring */}
        {/* <DeviceSetting>{children}</DeviceSetting> */}

        {/* 7. 05-01-schedule-notification 이후 */}
        {/* <DeviceSettingVariables>{children}</DeviceSettingVariables> */}

        {/* 8. 05-02-schedule-notification-click 이후 */}
        <DeviceSettingRedirect>{children}</DeviceSettingRedirect>

        {/* 11. 09-01-view-transition 이후 */}
        <DeviceSettingViewTransition>
          <RoutingSettingViewTransition>
            {children}
          </RoutingSettingViewTransition>
        </DeviceSettingViewTransition>
      </body>
    </html>
  );
}
