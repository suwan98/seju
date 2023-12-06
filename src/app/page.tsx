import Image from "next/image";

export default function Home() {
  const imageSrcBase = {
    src: "/assets/profile.jpg",
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-center">
        <Image
          src={imageSrcBase.src}
          alt="나"
          width="300"
          height="300"
          className="rounded-3xl mr-8"
        />
        <div>
          <h2 className="bg-inherit">프론트엔드 기술블로그입니다</h2>
          <p className="pt-8">
            트러블슈팅, 사이드프로젝트 과정, 학습한 내용에 대한 정리가 담겨있는
            블로그입니다 😉
          </p>
        </div>
      </div>
    </>
  );
}
