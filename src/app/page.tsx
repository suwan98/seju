import Image from "next/image";

export default function Home() {
  const imageSrcBase = {
    src: "/assets/image/profile.jpg",
  };

  return (
    <>
      <section className="flex gap-4 items-center justify-center mobile:flex-col">
        <a
          href="https://github.com/suwan98"
          target="_blank"
          className="hover:scale-105 delay-75 ease-in-out transition-all">
          <Image
            src={imageSrcBase.src}
            alt="나"
            width="300"
            height="300"
            className="rounded-3xl custom-shadow cursor-pointer mobile:max-w-[9.375rem] mobile:max-h-[9.375rem]"
          />
        </a>

        <div className="pl-4">
          <h2 className="mt-2 text-3xl font-bold pb-8">
            프론트엔드 개발자 꿈나무
            <span className="text-blue-500 pl-2">고수완</span>입니다
          </h2>

          <hr className="pb-8" />
          <article className="mobile:text-lg mobile:font-medium">
            <p>
              트러블슈팅, 사이드프로젝트 과정, 학습한 내용들에 대한 고군분투가
              담겨있는 블로그입니다.
            </p>
            <p>기록하고 학습하는것을 즐기는,</p>
            <p>프론트엔드 개발자를 지향(志向) 하고 있습니다</p>
            <p>
              좋은 코드가 결국 최종적으로 UX까지도 영향을 끼친다고 생각합니다.
            </p>
            <p>
              따라서 가치있는 코드를 만들어 유저경험을 가장 우선시 하는 개발자가
              되고 싶습니다
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
