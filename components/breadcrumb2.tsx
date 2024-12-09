import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Breadcrumb2() {
    return (
        <div>
            <Breadcrumb className='w-full mt-[25px] pl-[16px] md:pl-[90px] font-sans'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Casual</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
