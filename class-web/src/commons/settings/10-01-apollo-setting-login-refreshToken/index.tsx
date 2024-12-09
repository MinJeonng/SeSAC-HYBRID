'use client';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { useAccessTokenStore } from '../stores/22-01-accessToken-store';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from '../libraries/26-02-get-accessToken-refresh';
import { useEffect } from 'react';
import { useLoadStore } from '../stores/26-02-load-store';

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderAndErrorSettingRefresh(
  props: IApolloSetting
) {
  const { accessToken, setAccessToken } = useAccessTokenStore(); //global access token
  const { setIsLoaded } = useLoadStore();

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //1. 에러를 캐치
    if (typeof graphQLErrors !== 'undefined') {
      for (const err of graphQLErrors) {
        //1-2. 해당 에러가 토큰 만료 에러인지 확인
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          return fromPromise(
            getAccessToken().then(async (newAccessToken) => {
              // refreshToken으로 accessToken 재발급
              setAccessToken(newAccessToken ?? '');
              await fetchApp({
                query: 'updateDeviceAuthForAccessTokenSet',
                variables: {
                  accessToken: newAccessToken,
                },
              });
            })
          );
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'https://main-practice.codebootcamp.co.kr/graphql', //업로드가 가능한 uri
    headers: { Authorization: `Bearer ${accessToken}` }, // 토큰저장
    credentials: 'include',
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 즉, state가 변해서 rerender된다고 하더라도 global이기때문에 바뀌지 않는다. + 컴포넌트는 새로 만들어져도 globalState는 유지된다.
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
