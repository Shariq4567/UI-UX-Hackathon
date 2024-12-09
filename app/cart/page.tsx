import Breadcrumb3 from "@/components/breadcrumb3"
import CartCard from "@/components/cart-card"
import OrderSummary from "@/components/order-summary"

export default function Cart() {
    return (
        <div className='flex flex-col gap-[24px] h-[1500px] lg:h-[1000px] px-[16px] md:px-[100px]'>
            <Breadcrumb3 />
            <p className="text-[32px] md:text-[40px] font-bold font-sans">Your Cart</p>
            <div className="flex gap-[20px] lg:justify-center items-center lg:items-start flex-col lg:flex-row">
                <CartCard />
                <OrderSummary />
            </div>
        </div>
    )
}
