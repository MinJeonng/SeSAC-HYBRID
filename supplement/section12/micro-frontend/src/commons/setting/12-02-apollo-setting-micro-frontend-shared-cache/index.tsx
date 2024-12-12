'use client';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { print } from 'graphql'; //graphql 쿼리문을 문자열로 변환
import { useDeviceSettingMicroFrontend } from '../12-02-device-setting-micro-frontend/hooks';

const GLOBAL_STORAGE = new InMemoryCache();

interface IProps {
  children: React.ReactNode;
}

export default function ApolloSettingMicroFrontendSharedCache({
  children,
}: IProps) {
  const { fetchApp } = useDeviceSettingMicroFrontend();

  // operation : 내가 요청한 api
  // forward : 전송해주는것
  const deviceLink = new ApolloLink((operation, forward) => {
    //1. 요청해줘
    // 이 api를 checking할 수 있게 된다.
    return forward(operation).map((res) => {
      // 결과를 res로 해서 받을 수 있음

      //2. 응답 처리해줘 + operation.operationName: 내가 날린 api이름
      const operationName = operation.operationName;
      const isSharedCache = operationName === 'fetchSolplaceLogs';
      if (isSharedCache) {
        fetchApp({
          query: 'createDeviceCacheForApolloSet',
          variables: {
            operationName, //fetchSolplaceLogs
            variables: operation.variables, // 요청변수 -> {id : 1}
            printedQuery: print(operation.query), //FETCH_SOLPLACE_LOGS = gql` ...` 를 문자열로 변환
            data: res.data, // 결과로 받은 데이터 -> {title : '~~~~', contents : ...}
          },
        });
      }
      return res;
    });
  });

  const httpLink = new HttpLink({
    uri: 'https://main-hybrid.codebootcamp.co.kr/graphql',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([deviceLink, httpLink]),
    cache: GLOBAL_STORAGE,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
