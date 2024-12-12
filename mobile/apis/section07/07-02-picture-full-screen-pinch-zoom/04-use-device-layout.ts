import { useState } from 'react';

export const useDeviceLayout = (onResponse) => {
  const [layout, setLayout] = useState({
    isNotchTranslucent: false,
    isPinchZoom: false,
  });

  const toggleDeviceLayoutForNotchTranslucentSet = () => {
    setLayout((prev) => ({
      ...prev,
      isNotchTranslucent: !prev.isNotchTranslucent,
    }));

    onResponse({
      toggleDeviceLayoutForNotchTranslucentSet: { message: '변경완료' },
    });
  };

  //07-02-picture-full-screen-pinch-zoom : 핀치 줌 토글 API 추가
  // toggle device layout
  const toggleDeviceLayoutForPinchZoomSet = () => {
    setLayout((prev) => ({
      ...prev,
      isPinchZoom: !prev.isPinchZoom,
    }));

    onResponse({
      toggleDeviceLayoutForPinchZoomSet: { message: '변경완료' },
    });
  };

  return {
    toggleDeviceLayoutForNotchTranslucentSet,
    layout,
    toggleDeviceLayoutForPinchZoomSet,
  };
};
