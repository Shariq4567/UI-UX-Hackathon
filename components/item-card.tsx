import Image, { StaticImageData } from "next/image"
import FiveStarRating from "@/Images/5star.svg"
import FourAndAHalfStarRating from "@/Images/4-5stars.svg"
import FourStarRating from "@/Images/4-star.svg"
import ThreeAndAHalfStarRating from "@/Images/3-5star.svg"
import ThreeStarRating from "@/Images/3-star.svg"
import Link from "next/link"

export default function ItemCard({ ItemImage, ProductTitle, Rating, InitialPrice, DiscountedPrice, DiscountPercent }: {
    ItemImage: StaticImageData, ProductTitle: string, Rating: number, InitialPrice: number, DiscountedPrice: number, DiscountPercent: number
}) {

    function handleRating() {
        if (Rating === 5) return FiveStarRating
        if (Rating === 4.5) return FourAndAHalfStarRating
        if (Rating === 4) return FourStarRating
        if (Rating === 3.5) return ThreeAndAHalfStarRating
        return ThreeStarRating
    }

    return (
        <Link href="product-detail">
            <div className="rounded-t-[20px] min-w-[200px] max-w-[200px] min-h-[280px] md:min-h-[400px] md:min-w-[295px] md:max-w-[295px] flex flex-col gap-[16px]">
                <div className="bg-[#f0eeed] w-full h-[200px] md:min-h-[295px] rounded-[20px] overflow-clip">
                    <Image src={ItemImage} alt={ProductTitle} />
                </div>
                <div className="gap-[8px]">
                    <p className="text-[20px] font-bold font-sans">{ProductTitle}</p>
                    <div className="flex gap-[13px]">
                        <Image src={handleRating() || FiveStarRating} alt="Rating" />
                        <p>{Rating}<span className="text-gray-600">/5</span></p>
                    </div>
                    {DiscountedPrice ? <div className="flex gap-[10px] items-center">
                        <p className="text-[24px] font-bold font-sans">${DiscountedPrice}</p>
                        <p className="text-[24px] font-bold font-sans text-black/40 line-through">${InitialPrice}</p>
                        <div className="w-[58px] h-[28px] bg-[#ff3333]/10 flex rounded-[62px] justify-center items-center">
                            <p className="font-sans font-medium text-[12px] text-[#ff3333]">-{DiscountPercent}%</p>
                        </div>
                    </div> : <div className="flex">
                        <p className="text-[24px] font-bold font-sans">${InitialPrice}</p>
                    </div>}

                </div>

            </div>
        </Link>
    )
}
