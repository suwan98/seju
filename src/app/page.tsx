import Image from "next/image";

export default function Home() {
  const imageSrcBase = {
    src: "/assets/me.jpg",
  };

  return (
    <>
      <div className="m-8 flex gap-4 w-full">
        <Image src={imageSrcBase.src} alt="나" width="300" height="300" />
        <div>
          <h2 className="text-2xl font-semibold">
            프론트엔드 기술블로그입니다
          </h2>
          <p className="pt-8">
            트러블슈팅, 사이드프로젝트 과정, 학습한 내용에 대한 정리가 담겨있는
            블로그입니다 😉
          </p>
        </div>
      </div>
    </>
  );
}
