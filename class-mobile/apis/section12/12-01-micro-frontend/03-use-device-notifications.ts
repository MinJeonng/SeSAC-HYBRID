import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

//1. 알림 수신 대기(IOS는 필수)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useDeviceNotificationsClick = (onResponse) => {
  //2. 알람 스케줄 생성  - 내가 스스로 받는경우
  const createDeviceNotificationsForHelloSet = async (variables) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${variables.name}님 회원가입을 축하합니다.`,
        body: '앞으로의 여정을 함께 하게되어 반갑습니다.',
        //05-02 : 알림 클릭시 제공할 데이터
        // 다이나믹 경로다 -> 하면 variables에 page도 같이 넘겨보내주는 것이 효율적
        // 정적 경로이면 하드코딩이 나을수도
        data: {
          // page: '/section05/05-02-schedule-notification-click-moved', //웹 뷰 페이지 경로
          page: `${variables.page}`,
        },
      },
      trigger: null, //얼마 뒤에 보내줄거냐, trigger null하면 바로
    });
    onResponse({
      createDeviceNotificationsForHelloSet: {
        message: '알림 등록 완료',
      },
    });
  };

  // 3. 알람 권한 요청
  const requestDeviceNotificationsForPermissionSet = async () => {
    await Notifications.requestPermissionsAsync();

    onResponse({
      requestDeviceNotificationsForPermissionSet: {
        message: 'Permission',
      },
    });
  };

  // 4. 알람 클릭을 대기하는 기능(05-02)
  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener((response) => {
      // 알림을 클릭하게 되면 응답이 인수로 : response로 들어오게 됌 -> data가 들어오게 되는 것
      // 여기선 page가 들어오는 것
      const notificationData = response.notification.request.content.data;

      //앱에 응답 보내기
      //1.요청없이 응답만 보내기 가능하도록 해야함,
      //2. 그런 응답들에 대해서 api key들 처럼 redirect key를 만들어줘야함(응답만 보낸 경우 웹뷰에서 수신가능하도록 만들기)
      onResponse({ redirect: notificationData.page }); //1

      //
    });
  }, []);

  return {
    createDeviceNotificationsForHelloSet,
    requestDeviceNotificationsForPermissionSet,
  };
};
