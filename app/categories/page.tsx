import Filters from "@/components/filters"
import Breadcrumb2 from "@/components/breadcrumb2"
import Casual from "@/components/casual"
import FiltersMobile from "@/components/filters-mobile"

export default function Categories() {
    return (
        <div className="flex flex-col md:flex-row w-full gap-[20px]">
            <div className="md:hidden">
                <Breadcrumb2 />
                <FiltersMobile className='mb-[300px] mt-[70px] w-full min-h-96 md:w-[290px] p-6 md:ml-[100px] border-[1px] border-black/10 rounded-[20px] gap-[24px] hidden md:hidden flex-col' />
            </div>
            <div className='w-full md:w-[370px] flex-col gap-[24px] hidden md:flex'>
                <Breadcrumb2 />
                <Filters />
            </div>
            <Casual className="flex flex-col" />
        </div>
    )
}
