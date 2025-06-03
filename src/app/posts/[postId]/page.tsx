import GoBack from "@/components/GoBack";
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
    <div className=" flex flex-col mx-auto  justify-center h-screen">
      <div className="bg-white p-5 rounded-xl shadow hover:scale-105">
        <h1 className="text-blue-500 mt-5 mb-5">{post.title}</h1>
        <p className="text-gray-700 text-base">{post.body}</p>
      </div>
      <GoBack />
    </div>
  );
}
