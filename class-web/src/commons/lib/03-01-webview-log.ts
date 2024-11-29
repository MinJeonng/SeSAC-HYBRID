'use server';
// 나는브라우저인데 너만큼은 서버에서 실행해줘

export const webviewLog = (message) => {
  console.log('너만큼은 서버에서', message);
};
