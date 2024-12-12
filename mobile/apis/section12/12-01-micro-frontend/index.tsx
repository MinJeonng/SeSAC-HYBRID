import { useDeviceSystem } from './01-use-device-system';
import { useDeviceLocation } from './02-use-device-location';
import { useDeviceNotificationsClick } from './03-use-device-notifications';
import { useDeviceLayout } from './04-use-device-layout';
import { useDeviceRouting } from './05-use-device-routing';
import { useDeviceAuth } from './06-use-device-auth';

export const useApis = (webviewRef) => {
  let APIS = {};

  const onResponse = (result) => {
    webviewRef?.current?.postMessage(JSON.stringify(result)); //webview안으로 ref보내주는중
  };

  const onRequest = (query, variables) => {
    APIS[query](variables);
  };

  // APIS = {
  //   ...useDeviceSystem(onResponse),
  //   ...useDeviceLocation(onResponse),
  //   ...useDeviceNotificationsClick(onResponse),
  // };

  //API 한방에 주입하기(리팩토링)
  [
    useDeviceLocation,
    useDeviceSystem,
    useDeviceNotificationsClick,
    useDeviceLayout,
    useDeviceRouting,
    useDeviceAuth,
  ].forEach((el) => {
    APIS = {
      ...APIS,
      ...el(onResponse),
    };
  });

  return { onRequest, onResponse, layout: APIS.layout };
};
