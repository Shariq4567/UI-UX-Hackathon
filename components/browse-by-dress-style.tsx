import Image from "next/image"
import Casual from "@/Images/casual.png"
import Formal from "@/Images/formal.png"
import FormalWide from "@/Images/formal-w.png"
import Party from "@/Images/party.png"
import PartyWide from "@/Images/party-w.png"
import Gym from "@/Images/gym.png"

export default function BrowseByDressStyle() {
    return (

        <div className="w-[85%] px-[25px] pb-[25px] md:px-[80px] md:pb-[80px] mx-auto flex flex-col bg-[#F0F0F0] rounded-[40px] justify-evenly">
            <p className="text-[32px] text-center md:text-[48px] font-bold font-sans py-[30px]">Browse By Dress Style</p>
            {/* For Mobile */}
            <div className="flex md:hidden flex-col items-center justify-between gap-[20px]">
                <Image src={Casual} alt="Casual" />
                <Image src={Formal} alt="Formal" />
                <Image src={Party} alt="Party" />
                <Image src={Gym} alt="Gym" />
            </div>

            {/* For Desktop */}
            <div className="hidden md:flex flex-col gap-5">
                <div className="flex gap-5">
                    <Image src={Casual} alt="Casual" className="w-[40%]" />
                    <Image src={FormalWide} alt="Formal" className="w-[60%]" />
                </div>

                <div className="flex gap-5">
                    <Image src={PartyWide} alt="Party" className="w-[60%]" />
                    <Image src={Gym} alt="Gym" className="w-[40%]" />
                </div>
            </div>
        </div>
    )
}
