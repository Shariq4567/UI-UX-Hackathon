import React from 'react'
import Image from 'next/image'
import Minus from "@/Images/minus.svg"
import Plus from "@/Images/plus.svg"
import Item10 from "@/Images/item10.png"
import Item3 from "@/Images/item3.png"
import Item2 from "@/Images/item2.png"
import DustbinIcon from "@/Images/dustbin-icon.svg"

export default function CartCard() {
    return (
        <div className='p-[14px] gap-[20px] md:-[20px] w-full md:w-[715px] border-[0.5px] border-gray-300 rounded-[20px] flex flex-col'>
            <div className='w-full flex gap-[16px]'>
                <div className='rounded-[9px] min-w-[100px] flex justify-center items-center min-h-[100px] md:w-[124px] bg-[#f0f0f0] md:h-[124px]'>
                    <Image className='rounded-[9px]' src={Item10} alt="Checkered T-shirt" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-[2px]'>
                        <p className="text-[16px] md:text-[20px] font-bold font-sans">Gradient Graphic T-shirt</p>
                        <p className='text-[14px] font-sans'>
                            Size:
                            <span className='text-gray-500'> Large</span>
                        </p>
                        <p className='text-[14px] font-sans'>
                            Color:
                            <span className='text-gray-500'> White</span>
                        </p>
                    </div>
                    <p className="text-[20px] md:text-[24px] font-bold font-sans">$145</p>
                </div>
                <div className='flex w-full flex-col h-[170px] justify-between ml-auto'>
                    <Image className='ml-auto' src={DustbinIcon} alt='Trash Icon' />
                    <div className='w-[100px] ml-auto h-[44px] flex items-center justify-around rounded-full bg-[#f0f0f0]'>
                        <Image src={Minus} alt='Minus' />
                        <p className='font-sans font-semibold text-[18px]'>1</p>
                        <Image src={Plus} alt='plus' />
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-300 h-[0.5px]'></div>
            <div className='w-full flex gap-[16px]'>
                <div className='rounded-[9px] min-w-[100px] flex justify-center items-center min-h-[100px] md:w-[124px] bg-[#f0f0f0] md:h-[124px]'>
                    <Image className='rounded-[9px]' src={Item3} alt="Checkered T-shirt" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-[2px]'>
                        <p className="text-[16px] md:text-[20px] font-bold font-sans">Checkered Shirt</p>
                        <p className='text-[14px] font-sans'>
                            Size:
                            <span className='text-gray-500'> Medium</span>
                        </p>
                        <p className='text-[14px] font-sans'>
                            Color:
                            <span className='text-gray-500'> Red</span>
                        </p>
                    </div>
                    <p className="text-[20px] md:text-[24px] font-bold font-sans">$180</p>
                </div>
                <div className='flex w-full flex-col h-[170px] justify-between ml-auto'>
                    <Image className='ml-auto' src={DustbinIcon} alt='Trash Icon' />
                    <div className='w-[100px] ml-auto h-[44px] flex items-center justify-around rounded-full bg-[#f0f0f0]'>
                        <Image src={Minus} alt='Minus' />
                        <p className='font-sans font-semibold text-[18px]'>1</p>
                        <Image src={Plus} alt='plus' />
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-300 h-[0.5px]'></div>
            <div className='w-full flex gap-[16px]'>
                <div className='rounded-[9px] min-w-[100px] flex justify-center items-center min-h-[100px] md:w-[124px] bg-[#f0f0f0] md:h-[124px]'>
                    <Image className='rounded-[9px]' src={Item2} alt="Checkered T-shirt" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-[2px]'>
                        <p className="text-[16px] md:text-[20px] font-bold font-sans">Skinny Fit Jeans</p>
                        <p className='text-[14px] font-sans'>
                            Size:
                            <span className='text-gray-500'> Large</span>
                        </p>
                        <p className='text-[14px] font-sans'>
                            Color:
                            <span className='text-gray-500'> Blue</span>
                        </p>
                    </div>
                    <p className="text-[20px] md:text-[24px] font-bold font-sans">$240</p>
                </div>
                <div className='flex w-full flex-col h-[170px] justify-between ml-auto'>
                    <Image className='ml-auto' src={DustbinIcon} alt='Trash Icon' />
                    <div className='w-[100px] ml-auto h-[44px] flex items-center justify-around rounded-full bg-[#f0f0f0]'>
                        <Image src={Minus} alt='Minus' />
                        <p className='font-sans font-semibold text-[18px]'>1</p>
                        <Image src={Plus} alt='plus' />
                    </div>
                </div>
            </div>
        </div>
    )
}
