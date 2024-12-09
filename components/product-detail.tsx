import Image from 'next/image'
import Breakcrumb from './breadcrumb'
import ProductShowcase from './product-showcase'
import FourStars from "@/Images/4star-w.svg"
import Color1 from "@/Images/color-1.svg"
import Color2 from "@/Images/color-2.svg"
import Color3 from "@/Images/color-3.svg"
import SettingsIcon from "@/Images/settings.svg"
import DownArrow from "@/Images/down-arrow.svg"
import ReviewPage from './review-page'
import ItemCard from './item-card'
import Item9 from "@/Images/item9.png"
import Item10 from "@/Images/item10.png"
import Item11 from "@/Images/item11.png"
import Item12 from "@/Images/item12.png"

export default function ProductDetail() {
    return (
        <div className='w-full flex justify-center flex-col gap-[25px] mb-[200px]'>
            <Breakcrumb />
            <div className='ml-3 lg:ml-[90px] flex flex-col gap-[20px] lg:gap-[40px] lg:flex-row w-[90%]'>
                <ProductShowcase />
                <div className='flex flex-col gap-[14px]'>
                    <p className='text-[24px] md:text-[40px] font-bold font-sans'>One Life Graphic T-shirt</p>
                    <div className='flex gap-[16px] text-[16px] font-sans'>
                        <Image src={FourStars} alt='Four Stars' />
                        <p>4.5/<span className='text-gray-500'>5</span></p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <p className="text-[24px] font-bold font-sans">$260</p>
                        <p className="text-[24px] font-bold font-sans text-black/40 line-through">$300</p>
                        <div className="w-[58px] h-[28px] bg-[#ff3333]/10 flex rounded-[62px] justify-center items-center">
                            <p className="font-sans font-medium text-[12px] text-[#ff3333]">-40%</p>
                        </div>
                    </div>
                    <p className='text-black/60 max-w-[350px] font-sans'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    <div className='w-[90%] bg-black/10 h-[0.5px]'></div>
                    <p className='text-black/60'>Select Colors</p>
                    <div className='flex gap-[16px]'>
                        <Image src={Color1} alt='Color1' />
                        <Image src={Color2} alt='Color2' />
                        <Image src={Color3} alt='Color3' />
                    </div>
                    <div className='w-[90%] bg-black/10 h-[0.5px]'></div>
                    <p className='text-black/60'>Choose Size</p>
                    <div className='flex gap-[16px] flex-wrap'>
                        <div className='font-sans flex justify-center items-center w-[86px] h-[46px] text-black/60 rounded-[62px] bg-[#f0f0f0]'>Small</div>
                        <div className='font-sans flex justify-center items-center w-[86px] h-[46px] text-black/60 rounded-[62px] bg-[#f0f0f0]'>Medium</div>
                        <div className=' text-white w-[86px] h-[46px] flex justify-center items-center  rounded-[62px] bg-black font-sans'>Large</div>
                        <div className='font-sans text-black/60 flex justify-center items-center  w-[86px] h-[46px] rounded-[62px] bg-[#f0f0f0]'>X-Large</div>
                    </div>
                    <div className='w-[90%] bg-black/10 h-[0.5px]'></div>
                    <div className="flex gap-[12px] flex-wrap">
                        <div className='w-[170px] min-w-[110px] flex-shrink h-[52px] rounded-[62px] bg-[#f0f0f0] flex justify-between items-center px-7'>
                            <p className='font-medium text-[25px]'>-</p>
                            <p className='font-medium text-[20px]'>1</p>
                            <p className='font-medium text-[25px]'>+</p>
                        </div>
                        <button className='w-[80%] lg:w-[400px] min-w-[236px] h-[52px] font-sans bg-black text-white rounded-full'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-[90%] md:w-[85%] pt-[60px] flex justify-around'>
                <p className='font-sans text-[16px] md:text-[20px] text-black/60'>Product Details</p>
                <p className='font-sans text-[16px] md:text-[20px] text-black font-medium'>Rating & Reviews</p>
                <p className='font-sans text-[16px] md:text-[20px] w-[100px] text-black/60'> FAQs</p>
            </div>
            <div className='mx-auto w-[90%] md:w-[85%] flex justify-evenly'>
                <div className='bg-black/10 w-[33%] h-[0.5px]'></div>
                <div className='bg-black/60 w-[33%] h-[0.5px]'></div>
                <div className='bg-black/10 w-[33%] h-[0.5px]'></div>
            </div>
            <div className='mx-auto flex-wrap w-[90%] md:w-[85%] flex justify-around items-center '>
                <p className='text-[24px] font-bold items-center flex flex-wrap font-sans'>All Reviews<span className='text-[16px] text-black/60 font-normal'> (451)</span></p>
                <div className="flex gap-[10px]">
                    <div className='w-[48px] h-[48px] rounded-full bg-[#f0f0f0] flex justify-center items-center'>
                        <Image src={SettingsIcon} alt='Settings Icon' />
                    </div>
                    <div className='p-[14px] hidden md:flex bg-[#f0f0f0] rounded-full gap-[20px]'>
                        <p className='font-semibold font-sans text-[16px]'>Latest</p>
                        <Image src={DownArrow} alt="Down Arrow" />
                    </div>
                    <div className='py-[14px] px-[20px] flex justify-center items-center bg-black rounded-full'>
                        <p className='text-white text-[12px] font-sans font-medium'>Write a Review</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <ReviewPage />
            </div>
            <div className='mx-auto h-[52px] w-[230px] border-[1px] border-gray-500 flex justify-center items-center rounded-full font-sans font-semibold'>Load More Reviews</div>
            <p className='text-[48px] font-black text-center'>You Might<br className='md:hidden' /> Also Like</p>
            <div className='w-[90%] gap-[20px] flex mx-auto ml-[25px] md:ml-[100px] overflow-scroll'>
                <ItemCard ItemImage={Item9} ProductTitle='Polo with Contrast Trims' Rating={4} InitialPrice={242} DiscountedPrice={212} DiscountPercent={20} />
                <ItemCard ItemImage={Item10} ProductTitle='Gradient Graphic T-shirt' Rating={3.5} InitialPrice={145} />
                <ItemCard ItemImage={Item11} ProductTitle='Polo with Tipping Details' Rating={4.5} InitialPrice={180} />
                <ItemCard ItemImage={Item12} ProductTitle='Black Striped T-shirt' Rating={5} InitialPrice={150} DiscountedPrice={120} DiscountPercent={30} />
            </div>
        </div>
    )
}
