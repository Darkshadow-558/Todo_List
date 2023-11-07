"use client"
import Image from "next/image";
import Avatar from "@/app/Images/avatar.jpg"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='w-full h-18 fixed px-20 pb-5 pt-10 flex justify-between items-center'>
        <div className="w-1/2 h-full flex justify-start items-center">
            <div className="w-14 h-14 rounded-full relative overflow-hidden drop-shadow-2xl bg-white">
                <Image src={Avatar} fill={true}/>
            </div>
            <div className=" h-full flex px-3 justify-center items-start flex-col">
                <h1 className=" text-slate-500 font-bold text-sm">It's, Sudarshan's</h1>
                <h1 className=" text-slate-600 font-extrabold text-2xl">BUCKET LIST</h1>
            </div>
        </div>
        <div className="w-1/2 h-full flex justify-end gap-10 pr-20 items-center">
          <Link href="/" className={`text-xl font-extrabold ${pathname === "/" ? "text-slate-400": "text-slate-600"}`}>Home</Link>
          <Link href="/Pages/List" className={`text-xl font-extrabold ${pathname === "/Pages/List" ? "text-slate-400": "text-slate-600"}`}>List</Link>
          <Link href="/Pages/About" className={`text-xl font-extrabold ${pathname === "/Pages/About" ? "text-slate-400": "text-slate-600"}`}>About</Link>
        </div>
    </div>
  )
}

export default Navbar