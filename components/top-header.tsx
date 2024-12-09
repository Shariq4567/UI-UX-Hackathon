import Image from "next/image"
import Cross from "@/Images/cross.svg"

export default function TopHeader() {
    return (
        <>
            {/* For Mobile */}
            <div className='bg-black w-full flex justify-center items-center sm:hidden h-[34px]'>
                <p className='text-white text-[12px] font-normal'>Sign up and get 20% off to your first order. <span className='underline font-bold'>Sign Up Now</span></p>
            </div>

            {/* For Desktop */}
            <div className='hidden sm:flex bg-black w-full justify-start items-center h-[38px]'>
                <div className="w-[90%] relative">
                    <p className='text-white text-[14px] text-center font-normal'>Sign up and get 20% off to your first order. <span className="underline font-semibold">Sign Up Now</span></p>
                </div>
                <Image className="" src={Cross} alt="Cross" />
            </div>
        </>

    )
}
