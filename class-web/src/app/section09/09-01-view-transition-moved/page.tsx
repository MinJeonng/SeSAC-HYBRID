'use client';
import { useRoutingSettingViewTransition } from '@/commons/settings/09-01-routing-setting-view-transition/hooks';

export default function ViewTransitionMovedPage() {
  const { onRoutingBack } = useRoutingSettingViewTransition();
  return (
    <div>
      {/* 모바일 헤더 */}
      <button onClick={onRoutingBack}>{`<< 뒤로가기`}</button>
      {/* 모바일 컨텐츠 */}
      <div
        style={{
          width: '190px',
          height: '190px',
          backgroundColor: 'pink',
          margin: '10px',
        }}
      ></div>
      <div
        style={{
          width: '190px',
          height: '190px',
          backgroundColor: 'pink',
          margin: '10px',
        }}
      ></div>
      <div
        style={{
          width: '190px',
          height: '190px',
          backgroundColor: 'pink',
          margin: '10px',
        }}
      ></div>
    </div>
  );
}
