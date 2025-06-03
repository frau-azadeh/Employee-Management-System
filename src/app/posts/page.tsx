import { getPost } from "@/lib/api";
import { ChevronsRightIcon } from "lucide-react";
import Link from "next/link";
export default async function PostsPage() {
  const posts = await getPost();
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-lg bg-white p-4 shadow hover:scale-105"
        >
          <span className="text-blue-500 line-clamp-1 font-bold mb-2">
            {post.title}
          </span>
          <p className="text-gray-800 text-base line-clamp-3 leading-6">
            {post.body}
          </p>
          <Link
            href={`/posts/${post.id}`}
            className="text-xs text-blue-700 hover:text-blue-900 transition duration-300 flex items-end gap-6 mt-3"
          >
            Read More <ChevronsRightIcon className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  );
}
