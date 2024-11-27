export default function RatioScalingPage() {
  return (
    //1. 피그마에 제시된 사이즈가 (360*840) 이라고 가정
    //-> 하지만 아래 화면은 비율이 늘어나지 않음
    // <div style={{ width: '100vw', height: '100vh', backgroundColor: 'pink' }}>
    //   <div
    //     style={{ width: '300px', height: '400px', backgroundColor: 'seagreen' }}
    //   >
    //     square
    //   </div>
    // </div>

    // 2.  비율 늘리기 -> px 방식을 rem으로 변경(html 폰트사이즈에 의존)
    //=> 해야할 일 :
    //1. html 폰트사이즈를 화면사이즈에 비례하도록 변경
    //2. 모든 컴포넌트 단위를 rem으로 적용
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'pink' }}>
      {/* rem은 비율이니까 고정된 값이 아니니까, root-fontsize의 픽셀값을 계산해줘서 그거랑 rem을 곱해서 화면에 보이는
      px을 정해다고 생각하면 된다. 그러면 모든 디바이스에도 비슷한 비율이 보일테니
      */}
      <div
        style={{
          width: '18.75rem',
          height: '25rem',
          backgroundColor: 'seagreen',
        }}
      >
        square
      </div>
    </div>
  );
}
