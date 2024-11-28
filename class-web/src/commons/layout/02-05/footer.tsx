export function Footer({ children }) {
  return (
    <>
      {/* div 역할 : 
      1. 숏컨텐츠라면 : 부모사이즈에 맞게 최대로 늘리는 역할
      2. 롱컨텐츠라면 : 부모사이즈를 넘어섰으므로 무시해달라는 의미
      */}
      <div style={{ flex: 1 }} />
      <footer
        style={{
          height: '3.125rem', //50px
          width: '100vw',
          backgroundColor: 'pink',
        }}
      >
        {children}
      </footer>
    </>
  );
}
