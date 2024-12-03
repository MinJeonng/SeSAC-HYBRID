import * as Notifications from 'expo-notifications';

//1. 알림 수신 대기(IOS는 필수)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useDeviceNotifications = () => {
  //2. 알람 스케줄 생성  - 내가 스스로 받는경우
  const createDeviceNotificationsForHelloSet = (variables) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: `${variables.name}님 회원가입을 축하합니다.`,
        body: '앞으로의 여정을 함께 하게되어 반갑습니다.',
      },
      trigger: null, //얼마 뒤에 보내줄거냐, trigger null하면 바로
    });
    return {
      createDeviceNotificationsForHelloSet: {
        message: '알림 등록 완료',
      },
    };
  };

  // 3. 알람 권한 요청
  const requestDeviceNotificationsForPermissionSet = async () => {
    await Notifications.requestPermissionsAsync();

    return {
      requestDeviceNotificationsForPermissionSet: {
        message: 'Permission',
      },
    };
  };

  return {
    createDeviceNotificationsForHelloSet,
    requestDeviceNotificationsForPermissionSet,
  };
};
