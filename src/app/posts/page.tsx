import { getPost } from "@/lib/api";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getPost();
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {posts.map((post) => (
        <div
          className="bg-white p-5 rounded-lg shadow hover:scale-105 transition duration-300"
          key={post.id}
        >
          <h2 className="text-blue-400 line-clamp-1 mb-3 ">{post.title}</h2>
          <p className="text-gray-500 line-clamp-3 mb-3">{post.body}</p>
          <Link
            href={`/posts/${post.id}`}
            className="flex text-blue-500 hover:text-blue-700 text-xs gap-5 items-center font-bold"
          >
            Read More
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  );
}
