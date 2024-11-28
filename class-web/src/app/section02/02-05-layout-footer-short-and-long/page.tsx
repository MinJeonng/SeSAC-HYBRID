'use client';
import { Footer } from '@/commons/layout/02-05/footer';
import { useState } from 'react';

export default function LayoutFooterShortAndLongPage() {
  const [isLongContents, setIsLongContents] = useState(false);

  // 버튼을 클릭하면 내용이 쭉 길어지면서 scroll이 생김
  const onClickToggle = () => {
    setIsLongContents((prev) => !prev);
  };

  return (
    <>
      <main>
        <button onClick={onClickToggle}>[숏 컨텐츠 | 롱 컨텐츠(토글)]</button>
        <br />
        제목 : <input type="text" />
        <br />
        내용 : <input type="text" />
        <br />
        작성자 : <input type="text" />
        <br />
        {isLongContents &&
          new Array(10).fill(1).map(() => (
            <>
              제목 : <input type="text" />
              <br />
              내용 : <input type="text" />
              <br />
              작성자 : <input type="text" />
              <br />
            </>
          ))}
      </main>
      <Footer>
        <button>등록하기</button>
      </Footer>
    </>
  );
}
