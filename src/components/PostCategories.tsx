import {allPosts} from "contentlayer/generated";
import Link from "next/link";

function PostCategories() {
  const categoriesSet = new Set(allPosts.map((post) => post.category));
  const categories = [...categoriesSet];

  return (
    <>
      <section className="border w-fit p-8 pb-12 text-center absolute top-36 bottom-0 left-0">
        <h2 className="text-3xl font-bold mb-8">카테고리</h2>
        <ul className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <li className="border p-4 rounded-xl" key={index}>
              <Link href={`/posts/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PostCategories;
