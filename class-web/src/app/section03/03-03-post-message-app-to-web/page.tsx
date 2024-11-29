'use client';
import { useEffect } from 'react';

export default function PostMsgAppToWeb() {
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기하기
    document.addEventListener('message', (message: any) => {
      alert(`mobile에서 보내준 데이터, ${message.data}`);
    });
    //2. IOS에서 수신 대기
    window.addEventListener('message', (message: any) => {
      alert(`mobile에서 보내준 데이터, ${message.data}`);
    });
  });
  return <div>저는 web입니다.</div>;
}
