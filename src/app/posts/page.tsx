import { getPost } from "@/lib/api"
import Link from "next/link";

export default async function PostPage() {
    const posts = await getPost();
    return(
        <div >
            {posts.map((post)=>(
                <div key={post.id}>
                    <span>{post.title}</span>
                    <p>{post.body}</p>
                    <Link href={`/posts/${post.id}`}> Read More</Link>
                </div>
    ))}
        </div>
    )
}