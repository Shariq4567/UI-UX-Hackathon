import Image from "next/image"
import ProductImage1 from "@/Images/product-image-1.png"
import ProductImage2 from "@/Images/product-image-2.png"
import ProductImage3 from "@/Images/product-image-3.png"

export default function ProductShowcase() {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row gap-[15px]">
                <div className="flex lg:flex-col gap-[15px]">
                    <div className='w-[110px] lg:w-[152px] lg:h-[167px] h-[105px] bg-[#F3F1EF] rounded-[20px] flex items-center justify-center'>
                        <Image src={ProductImage1} alt="ProductImage1" />
                    </div>
                    <div className='w-[110px] lg:w-[152px] lg:h-[167px] h-[105px] bg-[#F3F1EF] rounded-[20px] flex items-center justify-center'>
                        <Image src={ProductImage2} alt="ProductImage1" />
                    </div>
                    <div className='w-[110px] lg:w-[152px] lg:h-[167px] h-[105px] bg-[#F3F1EF] rounded-[20px] flex items-center justify-center'>
                        <Image src={ProductImage3} alt="ProductImage1" />
                    </div>
                </div>
                <div className="bg-[#F3F1EF] rounded-[20px] lg:rounded-none
                 min-w-[300px] lg:w-[444px] lg:h-[530px] w-[360px] h-[290px] flex justify-center items-center">
                    <Image src={ProductImage1} alt="ProductImage1" />
                </div>
            </div >
        </div>

    )
}
