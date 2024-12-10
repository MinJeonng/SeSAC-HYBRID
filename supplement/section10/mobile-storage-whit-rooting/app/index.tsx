import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function startPage() {
  useEffect(() => {
    // 1.AsyncStorage에 저장하기 => 루팅(루트권한획득) 시 탈취가능
    // accessToken|sdlkjweijckwekwekfm 이런식으로 터미널에서 명령어 몇개 쓰면 가능
    AsyncStorage.setItem('accessToken', 'sdlkjweijckwekwekfm');

    //2. SecureStore에 저장하기 -> 루팅 시 탈취되어도 암호화되어있음 -> 앱을 꺼도 남아있음 기계에 있는거라서
    SecureStore.setItemAsync('accessSecureToken', 'skdfiejfwliodkfj');
  }, []);
  return (
    <>
      <Text>안녕하세요 실행 완료되었습니다.</Text>
    </>
  );
}

/**
 * SecureStore 하면 아래처럼 token을 확인할 수가 없음
 * 
 * emu64a:/data/data/host.exp.exponent/shared_prefs # cat %40anonymous%2Fmobile-storage-whit-rooting-c28f9c3e-fea5-44d6-8902-dc1a9ac7a7d4-SecureStore.xml 
<?xml version='1.0' encoding='utf-8' standalone='yes' ?>
<map>
    <string name="key_v1-accessSecureToken">{&quot;ct&quot;:&quot;5l33h+R7Z3VjcZU3SWeIsIOzCKlbQjrkZ2Jmfzz85oY=&quot;,&quot;iv&quot;:&quot;Ct4nJE6stvb9N3P3&quot;,&quot;tlen&quot;:128,&quot;scheme&quot;:&quot;aes&quot;,&quot;usesKeystoreSuffix&quot;:true,&quot;keystoreAlias&quot;:&quot;key_v1&quot;,&quot;requireAuthentication&quot;:false}</string>
</map>
emu64a:/data/data/host.exp.exponent/shared_prefs
 * 
 */
