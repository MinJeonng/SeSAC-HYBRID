import Link from 'next/link';

export default function LayoutHeaderTransparentPage() {
  return (
    <div>
      {/* 투명한 헤더 아래에는 이미지가 보이게끔 */}
      <img src="/images/스마일고양이.png" width={300} />
      <Link href="/section02/02-04-layout-header-untransparent">
        투명하지 않은 헤더페이지로 이동
      </Link>
    </div>
  );
}
