'use client'
import ItemCard from "./item-card"
import Image from "next/image"
import Item2 from "@/Images/item2.png"
import Item3 from "@/Images/item3.png"
import Item4 from "@/Images/item4.png"
import Item6 from "@/Images/item6.png"
import Item7 from "@/Images/item7.png"
import Item8 from "@/Images/item8.png"
import Item10 from "@/Images/item10.png"
import Item11 from "@/Images/item11.png"
import Item12 from "@/Images/item12.png"
import LeftArrow from "@/Images/left-arrow.svg"
import RightArrow from "@/Images/right-arrow.svg"
import DownArrowHead from "@/Images/down-arrow.svg"
import Settings from "@/Images/settings.svg"

export default function Casual({ className }: { className: string }) {

    function toggleFilters() {
        const FilterSection = document.getElementById("MobileFilters")
        const CasualSection = document.getElementById("CasualSection")
        const Footer = document.getElementById("Footer")
        if (FilterSection && CasualSection && Footer) {
            FilterSection.style.display = "flex"
            CasualSection.style.display = "none"
            Footer.style.display = "none"
        }
    }

    return (
        <div id="CasualSection" className={className}>
            <div className="flex pt-[65px] items-center px-[3%] justify-between">
                <p className="text-[24px] md:text-[32px] font-bold font-sans ">Casuals</p>
                <div className="flex gap-2">
                    <p className="text-[16px] font-sans text-gray-500">Showing 1-10 of 100 Products</p>
                    <p className="hidden md:flex font-sans gap-1 text-gray-500">Sort by:<span className="flex text-black items-center font-semibold gap-1">Most Popular<span><Image src={DownArrowHead} alt="Down arrow" /></span></span></p>
                    <div className="flex md:hidden w-[32px] h-[32px] rounded-full bg-[#f0f0f0] p-2 justify-center items-center" onClick={toggleFilters}>
                        <Image src={Settings} alt="Setting" />
                    </div>
                </div>
            </div>
            <div className='pb-[32px] w-full flex flex-wrap gap-[20px] pt-[20px] justify-center'>
                <div className="hidden md:flex flex-wrap gap-[20px] justify-center">
                    <ItemCard ItemImage={Item10} ProductTitle='Gradient Graphic T-shirt' Rating={3.5} InitialPrice={145} />
                    <ItemCard ItemImage={Item11} ProductTitle='Polo with Tipping Details' Rating={4.5} InitialPrice={180} />
                    <ItemCard ItemImage={Item12} ProductTitle='Black Striped T-shirt' Rating={5} InitialPrice={150} DiscountedPrice={120} DiscountPercent={30} />
                </div>
                <ItemCard ItemImage={Item7} ProductTitle={"Loose Fit Bermuda Shorts"} Rating={3} InitialPrice={80} />
                <ItemCard ItemImage={Item8} ProductTitle={"Faded Skinny Jeans"} Rating={4.5} InitialPrice={210} />
                <ItemCard ItemImage={Item2} ProductTitle={"Skinny Fit Jeans"} Rating={3.5} InitialPrice={260} DiscountPercent={20} DiscountedPrice={240} />
                <ItemCard ItemImage={Item3} ProductTitle={"Checkered Shirt"} Rating={4.5} InitialPrice={180} />
                <ItemCard ItemImage={Item4} ProductTitle={"Sleeve Striped T-shirt"} Rating={4.5} InitialPrice={160} DiscountPercent={30} DiscountedPrice={130} />
                <ItemCard ItemImage={Item6} ProductTitle={"Courage Graphic T-shirt"} Rating={4} InitialPrice={145} />
            </div>
            <div className="w-[90%] mx-auto h-[0.5px] bg-gray-300"></div>
            <div className="w-full flex justify-between pb-44 items-center px-[16px] md:px-[16px] pt-[20px]">
                <div className="flex justify-between p-3 gap-[8px] border-gray-300 border-[1px] rounded-[8px]">
                    <Image className="h-[20px] w-[20px]" src={LeftArrow} alt="Left Arrow" />
                    <p className="font-medium font-sans text-[14px]">Previous</p>
                </div>
                <div className=" flex justify-between gap-[2px]">
                    <div className="w-[40px] h-[40px] flex justify-center items-center font-medium font-sans bg-black/10 border-[1px] rounded-[8px]">
                        1
                    </div>
                    <div className="w-[40px] h-[40px] hidden sm:flex justify-center items-center font-medium font-sans text-black/50 rounded-[8px]">
                        2
                    </div>
                    <div className="w-[40px] h-[40px] hidden md:flex justify-center items-center font-medium font-sans text-black/50 rounded-[8px]">
                        3
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center font-medium font-sans text-black/50 rounded-[8px]">
                        ...
                    </div>
                    <div className="w-[40px] h-[40px] hidden md:flex justify-center items-center font-medium font-sans text-black/50 rounded-[8px]">
                        8
                    </div>
                    <div className="w-[40px] h-[40px] hidden sm:flex justify-center items-center font-medium font-sans text-black/50 rounded-[8px]">
                        9
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center font-medium font-sans text-black/50 rounded-[8px]">
                        10
                    </div>
                </div>
                <div className="flex justify-between p-3 gap-[8px] border-gray-300 border-[1px] rounded-[8px]">
                    <p className="font-medium font-sans text-[14px]">Next</p>
                    <Image className="h-[20px] w-[20px]" src={RightArrow} alt="Right Arrow" />
                </div>
            </div>
        </div >
    )
}
