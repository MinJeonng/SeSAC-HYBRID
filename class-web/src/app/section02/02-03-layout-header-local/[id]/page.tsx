'use client';
import { HeaderLocal } from '@/commons/layout/02-03/header';
import { useEffect, useState } from 'react';

export default function LayoutHeaderLocalPage() {
  const [title, setTitle] = useState('');
  useEffect(() => {
    //3초가 걸려서 아이디가 boardId인 게시글 조회
    setTimeout(() => {
      // 이렇게 제목을 받았다고 가정하고 이걸 header에 넣고싶은 것
      // 1. localheader를 만드는 방법 props로 넘겨주기 : 다이나믹 라우팅을 사용한 동적사용에 주로 사용됌
      //2. globalheader를 사용하는 방법 : 정적인 경우에 사용
      const result = '짱구가쓴글';
      setTitle(result);
    }, 3000);
  }, []);
  return (
    <div>
      <HeaderLocal title={title}>
        {/* 이 밑에는 Props.children으로 들어가게 됌 */}
        <button>[북마크]</button>
        {title && <div>{title}</div>}
      </HeaderLocal>
      <div>내용입니다</div>
      <div>내용입니다</div>
      <div>내용입니다</div>
      <div>내용입니다</div>
      <div>내용입니다</div>
    </div>
  );
}
