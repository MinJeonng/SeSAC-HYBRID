import { useState } from 'react';

export const useDeviceLayout = (onResponse) => {
  const [layout, setLayout] = useState({
    isNotchTranslucent: false,
    // notchContent: 'dark-content', //light-content, dark-content
    // notchBackgroundColor: 'transparent', // white, black, ....
  });

  // toggle로 노치를 껐다 켰다 하기 ,노치가 겹치게 가능하냐 안가능하냐..
  const toggleDeviceLayoutForNotchTranslucentSet = () => {
    setLayout((prev) => ({
      ...prev,
      isNotchTranslucent: !prev.isNotchTranslucent,
    }));

    onResponse({
      toggleDeviceLayoutForNotchTranslucentSet: { message: '변경완료' },
    });
  };
  return {
    toggleDeviceLayoutForNotchTranslucentSet,
    layout,
  };
};
