'use client';
import { useApolloClient } from '@apollo/client';

export default function MicroFrontendPage() {
  const client = useApolloClient();

  //무슨 캐시 들어가있는지 빼낼 ㅅ수 있음
  const onClickBtn = () => {
    alert(JSON.stringify(client.cache.extract()));
  };
  return (
    <>
      <div>내설정 메뉴</div>
      <button onClick={onClickBtn}>진짜로 들어왔는지 캐시 확인하기</button>
    </>
  );
}
