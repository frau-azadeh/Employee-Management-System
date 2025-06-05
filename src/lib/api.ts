import { PostPage } from "@/type/type";
import axios, { AxiosError } from "axios";

const jsonApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export async function getPost(): Promise<PostPage[]> {
  const res = await jsonApi.get<PostPage[]>("/posts");
  return res.data;
}

export async function getPostById(id: string): Promise<PostPage | null>{
  const postId = Number(id);
  if(!Number.isInteger(postId)){
    console.warn(`Invalid by id=${id}`)
    return null
  }
  try {
    const response = await jsonApi.get<PostPage>(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    if(error instanceof AxiosError){
      const status = error.response?.status
      if(status === 404){
        console.warn(`Post not found: id=${postId}`)
      }
      else{
        console.error(`Failed to fetch id=${postId}`,error.message)
      }
    }
    return null
  }
}
