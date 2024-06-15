import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/config/marketing";


export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container text-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-4">
            <Badge>
              Key Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Features for Effortless Collaboration
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Streamline your file sharing and collaboration with our cutting-edge features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-10">
          {FEATURES.map((feature, index) => (
            <FeaturesCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}




const FeaturesCard = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}