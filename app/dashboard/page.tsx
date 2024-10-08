import { Suspense } from "react" 
import LatestInvoices from "../ui/dashboard/latest-invoices"
import RevenueChart from "../ui/dashboard/revenue-chart"
import { lusitana } from "../ui/fonts"
import { LatestInvoicesSkeleton, RevenueChartSkeleton, CardSkeleton } from "../ui/skeletons"
import CardWrapper from "../ui/dashboard/cards"

export default async function DashPage() {
    return (
        <>
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Dashboard
                </h1>
                
                <div className="grip gap-6 sm:grid-cols-2 md:grid-cols-4">
                    <Suspense fallback={<CardSkeleton/>}>
                        <CardWrapper/>
                    </Suspense>
                    
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                    <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                    </Suspense>
                    <Suspense fallback={<LatestInvoicesSkeleton/>}>
                        <LatestInvoices/>
                    </Suspense>
                     
                </div>
                    
        </>
        
    )
}