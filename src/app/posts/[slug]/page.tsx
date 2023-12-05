"use client";

interface SlugPageProps {
  params: {
    slug: string;
  };
}

function page({params}: SlugPageProps) {
  return (
    <>
      <div>슬러그페이지</div>
    </>
  );
}

export default page;
