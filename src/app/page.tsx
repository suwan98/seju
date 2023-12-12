import PageIntroduce from "@/components/Home/PageIntroduce";
import CursorBlinker from "@/components/common/CursorBlinker";
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
          <article className="mobile:text-lg mobile:font-medium flex items-center min-w-[45rem] text-lg">
            <PageIntroduce />
            <CursorBlinker />
        </article>
        </div>
      </section>
    </>
  );
}
