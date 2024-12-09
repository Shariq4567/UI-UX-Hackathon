import ReviewCard from "./review-card"
import Image from "next/image"
import LeftArrow from "@/Images/left-arrow.svg"
import RightArrow from "@/Images/right-arrow.svg"

export default function OurHappyCustomers() {
    return (
        <div className="w-full flex flex-col gap-[40px] pb-[180px]">
            <div className="flex justify-between">
                <p className="text-[32px] md:text-[48px] font-bold font-sans mx-[30px] md:mx-[80px] ">Our Happy Customers.</p>
                <div className="flex gap-[16px] mr-[30px] md:mr-[80px]">
                    <Image src={LeftArrow} alt="Left Arrow" />
                    <Image src={RightArrow} alt="Right Arrow" />
                </div>
            </div>
            <div className="overflow-scroll flex mx-[30px] md:mx-[80px] gap-[20px]">
                <ReviewCard Name="Sarah M." Review='"I&rsquo;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&rsquo;ve bought has exceeded my expectations.”' />
                <ReviewCard Name="Alex K." Review='"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”' />
                <ReviewCard Name="James L." Review='"As someone who&rsquo;s always on the lookout for unique fashion pieces, I&rsquo;m thrilled to have stumbled upon Shopco The selection of clothes is not only diverse but also on-point with the latest trends&rsquo;' />
                <ReviewCard Name="Shariq S." Review='"I&rsquo;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&rsquo;ve bought has exceeded my expectations.”' />
            </div>
        </div>
    )
}
