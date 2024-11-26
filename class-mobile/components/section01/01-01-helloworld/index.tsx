import { Text, View } from 'react-native';

/**
 * click이 아니라 press
 * 웹뷰 안에 기능을 넣는 건 동일한데 그걸 위해 components가 필요한 것
 */
export default function ConfirmSetting() {
  return (
    // 여기선 div가 아니라 View 임
    <View>
      <Text>hello,world</Text>
    </View>
  );
}
