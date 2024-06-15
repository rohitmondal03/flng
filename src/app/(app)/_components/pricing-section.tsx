import { CheckIcon } from "lucide-react"

import type { TPricing } from "@/lib/@types/root.types"
import { Button } from "@/components/ui/button"
import { PRICING } from "@/config/marketing"
import { Badge } from "@/components/ui/badge"


export function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Badge>
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Flexible Pricing for Every Need
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose the plan that fits your business and scale as you grow.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {PRICING.map((pricing, index) => (
            <PricingCard key={index} {...pricing} />
          ))}
        </div>
      </div>
    </section>
  )
}



// Pricing card
const PricingCard = ({ title, description, features, price }: TPricing) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline justify-center">
            {typeof price === "number" ? (
              <p>
                <span className="text-4xl font-bold">Rs.{price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </p>
            ) : (
              <p className="font-bold text-4xl">
                {price}
              </p>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400">Customized pricing</p>
        </div>
        <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center"
            >
              <CheckIcon className="mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  )
}