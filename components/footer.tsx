import Image from "next/image"
import { Input } from "./ui/input"
import GrayMail from "@/Images/gray-mail.svg"
import ShopLogo from "@/Images/shop-logo.svg"
import TwitterIco from "@/Images/twitter-icon.svg"
import FBIcon from "@/Images/facebook-icon.svg"
import InstaIco from "@/Images/insta-icon.svg"
import GithubIcon from "@/Images/github-icon.svg"
import Visa from "@/Images/visa.svg"
import MasterCard from "@/Images/master-card.svg"
import Paypal from "@/Images/paypal.svg"
import AppleCard from "@/Images/apple-card.svg"
import GPay from "@/Images/g-pay.svg"

export default function Footer() {
    return (
        <div className="relative" id="Footer">
            <div className='absolute left-[5%] md:left-[10%] top-[-130px] md:top-[-90px] w-[90%] flex px-[32px] md:px-[64px] py-[24px] md:py-[40px] md:w-[80%] bg-black flex-col md:flex-row md:justify-between min-h-[180px] mx-auto rounded-[20px] leading-9 items-center gap-[32px]'>
                <p className='max-w-[550px] font-bold font-sans text-[32px] md:text-[40px] text-white'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                <div className="flex flex-col gap-[14px]">
                    <div className="rounded-[62px] h-[50px] w-full md:w-[350px] bg-white flex ">
                        <Image src={GrayMail} alt="Gray Mail" className="mx-[15px]" />
                        <Input className="w-full md:w-[350px] text-[16px] font-sans h-[50px] rounded-[62px] border-none p-1" placeholder="Enter Your Email Address" />
                    </div>
                    <button className="font-medium font-sans rounded-[62px] flex justify-center items-center w-full md:w-[350px] h-[50px] bg-white">Subscribe to Newsletter</button>
                </div>
            </div>
            <div className='px-[15px] md:px-[100px] justify-evenly w-full min-h-[500px] bg-[#F0F0F0] pt-[300px] sm:pt-[200px] md:pt-[350px] lg:pt-[200px] flex flex-col gap-[90px] pb-[50px] lg:flex-row md:min-h-[550px]'>
                <div className="flex flex-col gap-[35px] h-[180px] max-w-[300px]">
                    <Image src={ShopLogo} alt="ShopLogo" />
                    <p className="text-[14px] font-sans text-gray-500 ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className="flex gap-[12px]">
                        <Image src={TwitterIco} alt="Twitter" />
                        <Image src={FBIcon} alt="FB" />
                        <Image src={InstaIco} alt="Insta" />
                        <Image src={GithubIcon} alt="Github" />
                    </div>
                </div>
                <div className="flex gap-[90px]">
                    <div className="flex flex-col gap-[24px]">
                        <p className="font-medium font-sans">COMPANY</p>
                        <p className="font-normal text-gray-500 font-sans">About</p>
                        <p className="font-normal text-gray-500 font-sans">Features</p>
                        <p className="font-normal text-gray-500 font-sans">Works</p>
                        <p className="font-normal text-gray-500 font-sans">Career</p>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <p className="font-medium font-sans">HELP</p>
                        <p className="font-normal text-gray-500 font-sans">Customer Support</p>
                        <p className="font-normal text-gray-500 font-sans">Delivery Details</p>
                        <p className="font-normal text-gray-500 font-sans">Terms & Conditions</p>
                        <p className="font-normal text-gray-500 font-sans">Privacy Policy</p>
                    </div>
                </div>
                <div className="flex gap-[90px]">
                    <div className="flex flex-col gap-[24px]">
                        <p className="font-medium font-sans">FAQ</p>
                        <p className="font-normal text-gray-500 font-sans">Account</p>
                        <p className="font-normal text-gray-500 font-sans">Managment Deliveries</p>
                        <p className="font-normal text-gray-500 font-sans">Orders</p>
                        <p className="font-normal text-gray-500 font-sans">Payments</p>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <p className="font-medium font-sans">RESOURCES</p>
                        <p className="font-normal text-gray-500 font-sans">Free eBooks</p>
                        <p className="font-normal text-gray-500 font-sans">Development Tutorials</p>
                        <p className="font-normal text-gray-500 font-sans">How To- Blog</p>
                        <p className="font-normal text-gray-500 font-sans">Youtube Playlist</p>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto h-[0.5px] bg-black/10"></div>
            <div className="bg-[#F0F0F0] flex flex-col md:flex-row justify-between p-[25px] md:px-[100px] pb-[70px] items-center md:pt-[70px]">
                <p className="text-black/60 font-normal font-sans">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex flex-wrap">
                    <Image src={Visa} alt="Visa" />
                    <Image src={MasterCard} alt="MasterCard" />
                    <Image src={Paypal} alt="Paypal" />
                    <Image src={AppleCard} alt="AppleCard" />
                    <Image src={GPay} alt="GPay" />
                </div>
            </div>
        </div>
    )
}
