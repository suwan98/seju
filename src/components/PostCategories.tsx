import {allPosts} from "contentlayer/generated";
import Link from "next/link";

function PostCategories() {
  const categoriesSet = new Set(allPosts.map((post) => post.category));
  const categories = [...categoriesSet];

  return (
    <>
      <section className="p-8 pb-12 text-center absolute top-[26rem] bottom-0 left-12 h-fit  text-primaryColor">
        <ul className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <Link href={`/posts/${category}`} key={index}>
              <li className="p-4 rounded-xl block delay-75 ease-in-out cursor-pointer bg-secondaryColor text-primaryColor custom-shadow">
                {category}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PostCategories;
