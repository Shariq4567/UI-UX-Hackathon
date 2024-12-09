import { Input } from "./ui/input"
import CouponIcon from "@/Images/coupon-icon.svg"
import Image from "next/image"
import RightArrow from "@/Images/right-arrow-white.svg"

export default function OrderSummary() {
    return (
        <div className="w-full md:w-[460px] h-[500px] gap-[24px] border-gray-300 border-[0.5px] rounded-[20px] flex flex-col p-[20px]">
            <p className="text-[20px] md:text-[24px] font-bold font-sans">Order Summary</p>
            <div className="flex justify-between">
                <p className="text-black/60 text-[16px] md:text-[20px] font-sans">Subtotal</p>
                <p className="text-[16px] font-bold font-sans">$565</p>
            </div>
            <div className="flex justify-between">
                <p className="text-black/60 text-[16px] md:text-[20px] font-sans">Discound (-20%)</p>
                <p className="text-[16px] font-bold text-red-500 font-sans">-$113</p>
            </div>
            <div className="flex justify-between">
                <p className="text-black/60 text-[16px] md:text-[20px] font-sans">Delivery Fee</p>
                <p className="text-[16px] font-bold font-sans">$15</p>
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex justify-between">
                <p className="text-black/90 text-[16px] md:text-[20px] font-sans">Total</p>
                <p className="text-[20px] md:text-[24px] font-bold font-sans">$467</p>
            </div>
            <div className="flex gap-[12px]">
                <div className="w-full md:w-[280px] text-[16px] font-sans h-[50px] rounded-[62px] border-none flex gap-2">
                    <Image src={CouponIcon} alt="Coupon Icon" />
                    <Input className="w-full md:w-[280px] text-[16px] font-sans h-[50px] rounded-[62px] border-none p-1" placeholder="Add Promo Code" />
                </div>
                <div className="w-[120px] flex justify-center items-center rounded-full h-[50px] bg-black text-white font-sans font-normal">Apply</div>
            </div>
            <div className="w-full flex justify-center items-center rounded-full h-[50px] bg-black text-white font-sans font-normal gap-2">
                <p className="font-sans">Go to Checkout</p>
                <Image src={RightArrow} alt="Right Arrow" className="p-[0.7px]" />
            </div>

        </div>
    )
}
