import {allPosts} from "contentlayer/generated";
import Link from "next/link";

function PostCategories() {
  const categoriesSet = new Set(allPosts.map((post) => post.category));
  const categories = [...categoriesSet];

  return (
    <>
      <section className="w-full text-center text-primaryColor pt-32">
        <ul className="flex gap-4 mobile:grid mobile:grid-cols-4">
          {categories.map((category, index) => (
            <Link href={`/posts/${category}`} key={index}>
              <li className="p-4 rounded-xl block delay-75 ease-in-out cursor-pointer bg-blue-400 text-secondaryColor custom-shadow hover:bg-blue-500 mobile:p-2 mobile:text-sm">
                #{category}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PostCategories;
