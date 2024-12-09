'use client';
import { useEffect } from 'react';

export default function RoutingSettingViewTransition({ children }) {
  useEffect(() => {
    // 우린 link 로 만들었지만 html에선 a니까
    // a tag click 하면 view-transition animation
    window.addEventListener('click', (e) => {
      const isAnchor = e.target.closest('a');
      if (isAnchor) {
        document.startViewTransition(() => {
          //1. Link로 이동이 아닌 router로 이동
          //2. 나만의 Custom link 만들기
        });
      }
    });
  }, []);
  return <>{children}</>;
}
