import { PostPage } from "@/type/type";
import axios from "axios";

const jsonAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
})

export async function getPost(): Promise<PostPage[]> {
    const res = await jsonAPI.get<PostPage[]>("/posts");
    return res.data
}