import Image from "next/image"
import HeroHeaderText from "@/Images/hero-header-text.svg"
import HeroImage from "@/Images/HeroImage.png"
import Vercase from "@/Images/vercase.svg"
import ZARA from "@/Images/zara.svg"
import Gucci from "@/Images/gucci.svg"
import Prada from "@/Images/prada.svg"
import CalvinKlein from "@/Images/calvin-klein.svg"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div>

            <div className="px-10 w-full bg-[#f2f0f1] flex justify-center items-center flex-wrap lg:flex-nowrap">
                <div className="mt-[40px] lg:w-[50%] flex flex-col gap-[32px]">
                    <Image src={HeroHeaderText} alt="Find Clothes That Matches Your Style" />
                    <p className="font-sans text-[16px] text-gray-500
                ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link href="/categories">
                        <button className="text-white bg-black w-full h-[52px] font-sans text-[16px] md:w-[210px] rounded-full hover:bg-gray-800 transition-colors">Shop Now</button>
                    </Link>
                    <div className="mx-auto flex justify-between gap-[30px] md:hidden">
                        <div>
                            <p className="font-bold text-[24px] font-sans">200+</p>
                            <p className="font-normal font-sans text-gray-500">International Brands</p>
                        </div>
                        <div className="gap-[30px]">
                            <p className="font-bold text-[24px] font-sans">2,000+</p>
                            <p className="font-normal font-sans text-gray-500">High Quality Products</p>
                        </div>
                    </div>
                    <div className="mx-auto md:hidden">
                        <p className="font-bold text-[24px] font-sans">30,000+</p>
                        <p className="font-normal font-sans text-gray-500">Happy Customers</p>
                    </div>
                </div>
                <Image src={HeroImage} alt="Hero Image" />
            </div>
            <div className="w-full gap-[10px] min-h-[112px] bg-black flex justify-around flex-wrap items-center">
                <Image src={Vercase} alt="Vercase" />
                <Image src={ZARA} alt="Zara" />
                <Image src={Gucci} alt="Gucci" />
                <Image src={Prada} alt="Prada" />
                <Image src={CalvinKlein} alt="Calvin-Klein" />
            </div>
        </div>
    )
}
