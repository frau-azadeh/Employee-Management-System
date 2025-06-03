// src/app/posts/[postId]/page.tsx
import { getPostById } from "@/lib/api";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    postId: string;
  };
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const post = await getPostById(params.postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.body}</p>
    </div>
  );
}
