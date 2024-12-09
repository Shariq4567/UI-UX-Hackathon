import Image from "next/image"
import FourStars from "@/Images/4star-w.svg"
import Tick from "@/Images/green-tick.svg"

export default function ReviewCard2({ Name, Date, Review }: { Name: string, Date: number, Review: string }) {
    return (
        <div className='p-[30px] w-[90%] md:max-w-[600px] md:min-w-[290px] border-[1px] border-black/10 rounded-[20px] flex flex-col gap-[12px]'>
            <div className='w-full flex justify-between'>
                <Image src={FourStars} alt="Four Stars" />
                <p className="font-black text-gray-500">...</p>
            </div>
            <p className="font-bold font-sans text-[20px] flex items-center gap-2">{Name}<span><Image src={Tick} alt="Tick" /></span></p>
            <p className="font-medium font-sans text-[16px] text-black/60">
                {Review}
            </p>
            <p className="font-sans text-black/60">Posted on August {Date}, 2023</p>
        </div>
    )
}
