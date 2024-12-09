import Image from "next/image"
import ReviewStars from "@/Images/review-stars.svg"
import GreenTick from "@/Images/green-tick.svg"


export default function ReviewCard({ Name, Review }) {
    return (
        <div className='min-w-[320px] w-[400px] p-[25px] flex flex-col gap-[12px] border-[1px] border-gray-300 rounded-[20px]'>
            <Image src={ReviewStars} alt="Review Stars" />
            <div className="flex gap-[5px]">
                <p className="text-[20px] font-sans font-bold">{Name}</p>
                <Image src={GreenTick} alt="Tick" />
            </div>
            <p className="text-[16px] font-sans text-black/60">{Review}</p>
        </div>
    )
}
