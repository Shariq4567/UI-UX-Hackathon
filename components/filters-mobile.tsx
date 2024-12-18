'use client'
import Image from "next/image"
import Cross from "@/Images/black-cross.svg"
import RightArrow from "@/Images/right-arrow-head.svg"
import UpArrow from "@/Images/up-arrow-head.svg"
import Tick from "@/Images/tick.svg"

export default function FiltersMobile({ className }: { className: string }) {

    function hideFilters() {
        const filterSection = document.getElementById("MobileFilters")
        const casualSection = document.getElementById("CasualSection")
        const Footer = document.getElementById("Footer")
        if (filterSection && casualSection && Footer) {
            casualSection.style.display = "flex"
            filterSection.style.display = "none"
            Footer.style.display = "flex"
        }
    }

    return (
        <div id="MobileFilters" className={className}>
            <div className='flex justify-between'>
                <p className='text-[20px] font-sans font-bold'>Filters</p>
                <Image onClick={hideFilters} src={Cross} alt="Settings Icon" className="text-black/60" />
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                    <p className="font-sans text-[16px] font-normal text-black/60">T-Shirts</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-sans text-[16px] font-normal text-black/60">Shorts</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-sans text-[16px] font-normal text-black/60">
                        Shirts</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between">
                    <p className="font-sans text-[16px] font-normal text-black/60">Hoodie</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between">
                    <p className="font-sans text-[16px] font-normal text-black/60">Jeans</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex justify-between items-center">
                <p className="font-bold font-sans text-[20px]">Price</p>
                <Image src={UpArrow} alt="Up arrow" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-full h-[10px] bg-gray-300 rounded-full"></div>
                <div className="flex justify-evenly">
                    <p className="font-sans font-medium text-[14px]">$50</p>
                    <p className="font-sans font-medium text-[14px]">$200</p>
                </div>
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex justify-between items-center">
                <p className="font-bold font-sans text-[20px]">Colors</p>
                <Image src={UpArrow} alt="Up arrow" />
            </div>
            <div className="w-full flex flex-wrap gap-[12px]">
                <div className="w-[37px] h-[37px] rounded-full bg-green-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-red-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-yellow-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-orange-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-cyan-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-blue-500 flex justify-center items-center">
                    <Image src={Tick} alt="Tick" />
                </div>
                <div className="w-[37px] h-[37px] rounded-full bg-purple-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-pink-500"></div>
                <div className="w-[37px] h-[37px] rounded-full ring-1 ring-gray-500 bg-white"></div>
                <div className="w-[37px] h-[37px] rounded-full ring-1 ring-black bg-black"></div>
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex justify-between items-center">
                <p className="font-bold font-sans text-[20px]">Size</p>
                <Image src={UpArrow} alt="Up arrow" />
            </div>
            <div className='flex gap-[16px] flex-wrap'>
                <div className='font-sans flex justify-center items-center w-[86px] h-[46px] text-black/60 rounded-[62px] bg-[#f0f0f0]'>XX-Small</div>
                <div className='font-sans flex justify-center items-center w-[86px] h-[46px] text-black/60 rounded-[62px] bg-[#f0f0f0]'>X-Small</div>
                <div className='font-sans flex justify-center items-center w-[86px] h-[46px] text-black/60 rounded-[62px] bg-[#f0f0f0]'>Small</div>
                <div className='font-sans flex justify-center items-center w-[86px] h-[46px] text-black/60 rounded-[62px] bg-[#f0f0f0]'>Medium</div>
                <div className=' text-white w-[86px] h-[46px] flex justify-center items-center  rounded-[62px] bg-black font-sans'>Large</div>
                <div className='font-sans text-black/60 flex justify-center items-center  w-[86px] h-[46px] rounded-[62px] bg-[#f0f0f0]'>X-Large</div>
                <div className='font-sans text-black/60 flex justify-center items-center  w-[86px] h-[46px] rounded-[62px] bg-[#f0f0f0]'>2X-Large</div>
                <div className='font-sans text-black/60 flex justify-center items-center  w-[86px] h-[46px] rounded-[62px] bg-[#f0f0f0]'>3X-Large</div>
                <div className='font-sans text-black/60 flex justify-center items-center  w-[86px] h-[46px] rounded-[62px] bg-[#f0f0f0]'>4X-Large</div>
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex justify-between items-center">
                <p className="font-bold font-sans text-[20px]">Dress Style</p>
                <Image src={UpArrow} alt="Up arrow" />
            </div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                    <p className="font-sans text-[16px] font-normal text-black/60">Casual</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-sans text-[16px] font-normal text-black/60">Formal</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-sans text-[16px] font-normal text-black/60">
                        Party</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
                <div className="flex justify-between">
                    <p className="font-sans text-[16px] font-normal text-black/60">Gym</p>
                    <Image src={RightArrow} alt="Right-Arrow" />
                </div>
            </div>
            <div className="bg-black w-full rounded-[62px] text-white font-sans font-normal p-[16px] flex justify-center items-center">Apply Filter</div>
        </div>
    )
}
