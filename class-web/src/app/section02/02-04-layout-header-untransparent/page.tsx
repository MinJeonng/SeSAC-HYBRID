import Link from 'next/link';

export default function LayoutHeaderUnTransparentPage() {
  return (
    <div>
      <div>내용입니다.</div>
      <div>내용입니다.</div>
      <div>내용입니다.</div>
      <div>내용입니다.</div>
      <div>내용입니다.</div>
      <Link href="/section02/02-04-layout-header-transparent">
        투명한 헤더 페이지로 이동하기
      </Link>
    </div>
  );
}
