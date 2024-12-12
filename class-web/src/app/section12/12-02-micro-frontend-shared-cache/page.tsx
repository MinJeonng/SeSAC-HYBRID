'use client';
import { gql, useApolloClient } from '@apollo/client';

const FETCH_SOLPLACE_LOGS = gql`
  query fetchSolplaceLogs {
    fetchSolplaceLogs {
      id
      contents
      title
    }
  }
`;

export default function MicroFrontendSharedCachePage() {
  const client = useApolloClient(); // 버튼 클릭해서 받아오기

  //버튼 눌러서 fetchBoard 조회
  const onClickButton = () => {
    client.query({
      query: FETCH_SOLPLACE_LOGS,
      fetchPolicy: 'network-only', // 클릭하면 cache랑 상관없이 무조건 새로 받아오게끔, 테스트 시 2번이상 계속 눌러도 새롭게 테스트 가능하도록
    });
  };

  return (
    <>
      <div>게시판 메뉴</div>
      <button onClick={onClickButton}>여행로그 조회하기</button>
    </>
  );
}
