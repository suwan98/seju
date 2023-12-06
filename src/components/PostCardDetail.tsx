import {parseISO, format} from "date-fns";
import Link from "next/link";

function PostCardDetail({post}) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">{post.title}</h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{__html: post.body.html}}
      />
    </div>
  );
}

export default PostCardDetail;
