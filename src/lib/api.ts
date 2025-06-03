import { PostPage } from "@/type/type";
import axios from "axios";
import { AxiosError } from "axios";

const jsonAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
})

export async function getPost(): Promise<PostPage[]> {
    const res = await jsonAPI.get<PostPage[]>("/posts");
    return res.data
}

export async function getPostById(id: string): Promise<PostPage | null> {
    const postId = Number(id);
    if (isNaN(postId)) return null;
  
    try {
      const res = await jsonAPI.get<PostPage>(`/posts/${postId}`);
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
  
      if (err.response?.status === 404) {
        console.warn(`This post with id=${postId} not found`);
        return null;
      }
  
      console.error("error with get post", err.message);
      return null;
    }
  }
  