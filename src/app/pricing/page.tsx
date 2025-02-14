'use client'

import { PricingCards } from "@/components/global/pricing-card"
import { useSearchParams } from "next/navigation"

export default function PricingPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a]">
      <PricingCards email={email} />
    </div>
  )
}