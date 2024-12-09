import ItemCard from "./item-card"
import Item1 from "@/Images/item1.png"
import Item2 from "@/Images/item2.png"
import Item3 from "@/Images/item3.png"
import Item4 from "@/Images/item4.png"

export default function NewArrivals() {
    return (
        <div className='w-full bg-white flex flex-col gap-[40px]'>
            <p className='text-center text-[32px] md:text-[48px] font-bold font-sans'>New Arrivals</p>
            <div className='flex gap-[20px] ml-[40px] md:ml-[100px] overflow-x-scroll'>
                <ItemCard ItemImage={Item1} ProductTitle={"T-shirt with Tape details"} Rating={4.5} InitialPrice={120} />
                <ItemCard ItemImage={Item2} ProductTitle={"Skinny Fit Jeans"} Rating={3.5} InitialPrice={260} DiscountPercent={20} DiscountedPrice={240} />
                <ItemCard ItemImage={Item3} ProductTitle={"Checkered Shirt"} Rating={4.5} InitialPrice={180} />
                <ItemCard ItemImage={Item4} ProductTitle={"Sleeve Striped T-shirt"} Rating={4.5} InitialPrice={160} DiscountPercent={30} DiscountedPrice={130} />
            </div>
            <div className="flex justify-center items-center px-10">
                <button className="w-full sm:w-[220px] h-[52px] rounded-[62px] border-gray-500 border-[1px] font-sans font-medium mx-auto">View All</button>
            </div>
        </div>
    )
}
