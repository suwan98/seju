import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";

const getPosts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

export default getPosts;
