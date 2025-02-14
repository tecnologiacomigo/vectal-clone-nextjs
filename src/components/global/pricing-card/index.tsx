import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gem } from "lucide-react"
import { CheckIcon } from "lucide-react"

interface PricingCardsProps {
  email?: string | null
}

export const PricingCards = ({ email }: PricingCardsProps) => {
  return (
    <div className="flex flex-col items-center gap-8 h-screen mt-16">
        <h1 className="text-6xl font-extrabold text-white">vectal.ai</h1>
      <h1 className="text-gray-400">Pricing</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        <Card className="w-[300px] bg-[#151515] border-0 transition-transform duration-200 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl">Monthly</CardTitle>
            <div className="text-4xl font-bold">$30<span className="text-sm font-normal">/mo</span></div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Unlimited o3-mini</span>
              <span className="bg-blue-500 text-xs px-2 py-0.5 rounded">NEW</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Unlimited DeepSeek R1</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Automatic task sorting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Direct access to David on Discord</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Cancel anytime</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-9 bg-white text-black hover:bg-white hover:text-black">
              <span className="text-black transition-transform duration-200 hover:scale-105">Choose Monthly</span>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[300px] bg-[#151515] border-0 transition-transform duration-200 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl">Annual</CardTitle>
            <div className="text-4xl font-bold">$270<span className="text-sm font-normal">/year</span></div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Unlimited o3-mini</span>
              <span className="bg-blue-500 text-xs px-2 py-0.5 rounded">NEW</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Unlimited DeepSeek R1</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Automatic task sorting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Direct access to David on Discord</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500 size-4"/>
              <span>Save $90 a year</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white text-black hover:bg-white hover:text-black">
              <span className="text-black transition-transform duration-200 hover:scale-105">Choose Annual</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}