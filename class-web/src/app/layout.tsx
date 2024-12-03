import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import LayoutComponent from '@/commons/layout/02-02';
import LayoutGlobalLocal from '@/commons/layout/02-03';
import LayoutTransparent from '@/commons/layout/02-04';
import LayoutFooterShortAndLong from '@/commons/layout/02-05';
import DeviceSetting from '@/commons/settings/03-06-device-setting';
import DeviceSettingVariables from '@/commons/settings/05-01-device-setting-addVariables';

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
        <DeviceSettingVariables>{children}</DeviceSettingVariables>
      </body>
    </html>
  );
}
