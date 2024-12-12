import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ApolloSettingMicroFrontendSharedCache from '@/commons/setting/12-02-apollo-setting-micro-frontend-shared-cache';
import DeviceSettingMicroFrontend from '@/commons/setting/12-02-device-setting-micro-frontend';

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1. 12-01-micro-frontend */}
        {/* {children} */}

        {/* 2. 12-02-micro-frontend-shared-cache */}
        <ApolloSettingMicroFrontendSharedCache>
          <DeviceSettingMicroFrontend>{children}</DeviceSettingMicroFrontend>
        </ApolloSettingMicroFrontendSharedCache>
      </body>
    </html>
  );
}