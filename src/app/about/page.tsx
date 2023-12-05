import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "기록하고 학습하는것을 즐기는, 프론트엔드 개발자를 지향(志向) 하고 있는 고수완입니다",
};

function page() {
  return (
    <>
      <section className="mb-12">
        <h3 className="text-4xl font-semibold">
          <div className="flex gap-4 flex-col">
            <p>기록하고 학습하는것을 즐기는,</p>
            <p>프론트엔드 개발자를 지향(志向) 하고 있는</p>
            <p>고수완입니다</p>
          </div>
        </h3>
      </section>
    </>
  );
}

export default page;
