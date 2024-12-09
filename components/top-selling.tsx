import ItemCard from "./item-card"
import Item5 from "@/Images/item5.png"
import Item6 from "@/Images/item6.png"
import Item7 from "@/Images/item7.png"
import Item8 from "@/Images/item8.png"

export default function TopSelling() {
    return (
        <div className='w-full bg-white flex flex-col gap-[40px]'>
            <p className='text-center text-[32px] md:text-[48px] font-bold font-sans'>Top Selling</p>
            <div className='flex gap-[20px] ml-[40px] md:ml-[100px] overflow-x-scroll'>
                <ItemCard ItemImage={Item5} ProductTitle={"Vertical Stipped Shirt"} Rating={5.0} InitialPrice={232} DiscountedPrice={212} DiscountPercent={20} />
                <ItemCard ItemImage={Item6} ProductTitle={"Courage Graphic T-shirt"} Rating={4} InitialPrice={145} />
                <ItemCard ItemImage={Item7} ProductTitle={"Loose Fit Bermuda Shorts"} Rating={3} InitialPrice={80} />
                <ItemCard ItemImage={Item8} ProductTitle={"Faded Skinny Jeans"} Rating={4.5} InitialPrice={210} />
            </div>
            <div className="flex justify-center items-center px-10">
                <button className="w-full sm:w-[220px] h-[52px] rounded-[62px] border-gray-500 border-[1px] font-sans font-medium mx-auto">View All</button>
            </div>
        </div>
    )
}
