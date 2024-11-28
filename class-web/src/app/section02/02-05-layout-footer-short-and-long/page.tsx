import { useState } from 'react';

export default function LayoutContentsShortLongPage() {
  const [isLongContents, setIsLongContents] = useState(false);

  const onClickToggle = () => {
    setIsLongContents((prev) => !prev);
  };

  return (
    <div>
      <button>[숏 컨텐츠 | 롱 컨텐츠]</button>
    </div>
  );
}
