'use client';

import { useDeviceSetting } from '@/commons/settings/05-02-device-setting-redirect/hook';
import { useEffect } from 'react';

export default function ScheduleNotificationsPage() {
  const { fetchApp } = useDeviceSetting();

  useEffect(() => {
    fetchApp({ query: 'requestDeviceNotificationsForPermissionSet' });
    fetchApp({
      query: 'createDeviceNotificationsForHelloSet',
      variables: {
        name: '짝우',
        page: '05-02-schedule-notification-click-moved',
      },
    });
  }, []);

  return <div>처음 방문하셨군요! 환영합니다.</div>;
}
