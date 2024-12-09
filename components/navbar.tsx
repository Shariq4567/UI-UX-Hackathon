import ShopLogo from "@/Images/shop-logo.svg"
import MenuIcon from "@/Images/menu-icon.svg"
import SearchIcon from "@/Images/search-icon.svg"
import CartIcon from "@/Images/cart-icon.svg"
import ProfileIcon from "@/Images/profile-icon.svg"
import Image from "next/image"
import DownArrow from "@/Images/down-arrow.svg"
import GraySearchIcon from "@/Images/gray-search-icon.svg"
import Link from "next/link"
import { Input } from "./ui/input"

export default function Navbar() {
    return (
        <>
            {/* For Mobile */}
            <div className="h-[64px] w-full flex justify-center items-center lg:hidden gap-[96px] flex-wrap">
                <div className="flex gap-[16px]">
                    <Image src={MenuIcon} alt="Menu Icon" />
                    <Link href="/">
                        <Image src={ShopLogo} alt="Shop Logo" />
                    </Link>
                </div>
                <div className="flex gap-[12px]">
                    <Image src={SearchIcon} alt="Search Icon" />
                    <Link href="/cart">
                        <Image src={CartIcon} alt="Cart Icon" />
                    </Link>
                    <Image src={ProfileIcon} alt="Profile Icon" />
                </div>
            </div>

            {/* For Desktop */}
            <div className="w-full hidden lg:flex">
                <div className="w-full h-[100px] flex gap-[40px] justify-center items-center">
                    <Link href="/">
                        <Image src={ShopLogo} alt="Shop Logo" />
                    </Link>
                    <div className="flex gap-[24px]">
                        <div className="flex flex-wrap">
                            <p className="text-[16px] font-sans">Shop</p>
                            <Image src={DownArrow} alt="Down Arrow" />
                        </div>
                        <p className="text-[16px] font-sans">On Sale</p>
                        <p className="text-[16px] font-sans">New Arrivals</p>
                        <p className="text-[16px] font-sans">Brands</p>
                    </div>
                    <div className="flex w-[577px] bg-[#F0F0F0] rounded-full">
                        <Image src={GraySearchIcon} className="mx-[16px]" alt="Search Icon" />
                        <Input placeholder="Search for products..." className="h-[48px] border-0 bg-[#F0F0F0] rounded-full text-[16px] font-sans flex-shrink" />
                    </div>
                    <div className="flex gap-[14px]">
                        <Link href="/cart">
                            <Image src={CartIcon} alt="Cart Icon" />
                        </Link>
                        <Image src={ProfileIcon} alt="Profile Icon" />
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto h-[0.5px] bg-gray-300"></div>
        </>


    )
}
