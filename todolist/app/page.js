import Image from "next/image";
import Link from "next/link";
import Bucket from "@/app/Images/bucket.svg";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-200 flex gap-10 justify-normal pl-40 items-center ">
        <div className="w-1/2 h-1/2 flex flex-col gap-6 bg-slate-300 rounded-md drop-shadow-2xl p-10 ">
          <h1 className=" font-extrabold text-slate-700 text-3xl">
            Create Your Bucket List.
          </h1>
          <p className="font-bold text-slate-500 w-4/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            animi non libero exercitationem consectetur illo ad fugit
            accusantium tempora? Ipsum quia omnis sunt quisquam iusto impedit
            fuga consequuntur qui! Voluptas!
          </p>
          <Link
            href="/Pages/List"
            className="p-3 rounded-lg text-slate-700 font-bold w-fit h-fit bg-slate-100"
          >
            Create List
          </Link>
        </div>
        <div className=" h-96 w-96 relative ">
          <Image src={Bucket} fill={true} />
        </div>
      </div>
    </>
  );
}
