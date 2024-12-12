import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReactNativeTagsPage() {
  const onPressBtn = () => {
    alert('버튼을 누르셨군요');
  };

  const onChangePw = (text: string) => {
    console.log('입력된 비밀번호는 : ', text);
  };
  const onScrollData = () => {
    console.log('스크롤을 내렸습니다.');
  };
  return (
    <View>
      {/* 1. 버튼 */}
      <Button title="이것은 버튼입니다." onPress={onPressBtn} />
      {/* 2. 투명한 버튼 : 자체버튼을 만들고 이걸 씌우는 형태로 더 많이 쓰임*/}
      <TouchableOpacity onPress={onPressBtn}>
        <Text>이것도 버튼입니다.</Text>
      </TouchableOpacity>

      {/* 3. 인풋  : secureTextEntry -> 비밀번호 설정시에 함*/}
      <TextInput
        onChangeText={onChangePw}
        secureTextEntry={true}
        style={styles.input}
      />

      {/* 4. 무한스크롤(react-native에는 무한 스크롤 기능이 들어가 있음) */}
      <FlatList
        data={[
          { number: 1, title: '게시글 제목 1' },
          { number: 2, title: '게시글 제목 2' },
          { number: 3, title: '게시글 제목 3' },
          { number: 4, title: '게시글 제목 4' },
          { number: 5, title: '게시글 제목 5' },
          { number: 6, title: '게시글 제목 6' },
          { number: 7, title: '게시글 제목 7' },
          { number: 8, title: '게시글 제목 8' },
          { number: 9, title: '게시글 제목 9' },
          { number: 10, title: '게시글 제목 10' },
        ]}
        renderItem={({ item }) => (
          <Text>
            글번호 : {item.number} 제목 : {item.title}{' '}
          </Text>
        )}
        onScroll={onScrollData}
        style={styles.boardList}
      />

      {/* 5. 안드로이드 노치  translucent : 노치가 태그들과 겹칠지 겹치지 않을지 여부 속성*/}
      <StatusBar
        translucent={false}
        barStyle="dark-content" //노치영역에 글자색(dark-content, light-content)
        backgroundColor="black" //노치 배경색 (transparent, yellow...)
      />

      {/* 6. IOS 노치 */}
      <SafeAreaView style={{ backgroundColor: 'black' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  boardList: {
    height: 100,
    backgroundColor: 'yellow',
    overflow: 'scroll',
  },
});
