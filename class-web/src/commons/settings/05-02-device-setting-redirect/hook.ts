import { requestAPIS } from '.';

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (msg: string) => void;
  };
};

export const useDeviceSetting = () => {
  // fetch를 app에 요청한다 는 의미의 함수
  const fetchApp = async ({ query, variables = {} }) => {
    const result = await new Promise((resolve) => {
      requestAPIS[query] = resolve; //이걸 index.tsx에 보내주는 곳
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ query, variables })
      );
    });
    return result;
  };

  return { fetchApp };
};
