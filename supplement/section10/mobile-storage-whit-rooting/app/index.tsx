import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Text } from 'react-native';

export default function startPage() {
  useEffect(() => {
    // 1.AsyncStorage에 저장하기 => 루팅(루트권한획득) 시 탈취가능
    // accessToken|sdlkjweijckwekwekfm 이런식으로 터미널에서 명령어 몇개 쓰면 가능
    AsyncStorage.setItem('accessToken', 'sdlkjweijckwekwekfm');
  }, []);
  return (
    <>
      <Text>안녕하세요 실행 완료되었습니다.</Text>
    </>
  );
}
