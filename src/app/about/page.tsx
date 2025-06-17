import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Globe } from 'lucide-react'
export default function About() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="margin-auto w-[90vw] md:w-[60vw] lg:w-[50vw] h-[450px] hover:bg-gray-100 border-1 md:border-2 border-gray-200 shadow-sm flex flex-wrap  items-center justify-center gap-2 mt-10 mb-10 rounded-lg">
                    <Image
                        src="/images/profile.jpg" 
                        alt="Avatar"
                        className="rounded-[50%] h-30 w-30"
                        width={120} 
                        height={120} 
                    />
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-xl text-center my-1 font-bold">About Me</h1>
                        <p className="text-justify my-3">
                            My name is Abdulsalam Akinyoola I love breaking down complex concepts.
                            I write about Networking, Cloud, DevOps, and even sometimes web development. 
                            You can connect with me by following any of the links below.
                        </p>
                        <hr className="border-gray-300 my-3" />
                        <div className="flex gap-7 w-full my-3 justify-center"> 
                            <Link href="https://github.com/abdulsalamdev"  target="_blank">
                                <Github className="h-6 w-6 hover:text-[#8A63F7]" />
                            </Link>
                            <Link href="https://abdulsalamakinyoola.vercel.app"  target="_blank">
                                <Globe className="h-6 w-6 hover:text-[#F4B400]" />
                            </Link>
                            <Link href="https://twitter.com/Abdulsalamdev"  target="_blank">
                                <Twitter className="h-6 w-6 hover:text-[#1DA1F2]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}