import GoBack from "@/components/GoBack";
import Image from "next/image";

export default function NotFoundPage(){
    return(
        <div className="flex flex-col justify-center items-center mx-auto h-screen">
           <Image
            src={"/not-found.png"}
            alt="not-found"
            width={400}
            height={400}
            className="rounded-2xl shadow hover:scale-105"
           />
           <GoBack/>
        </div>
    )
}