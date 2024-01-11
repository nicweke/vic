import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, AudioLines, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Great Sound",
    Icon: AudioLines,
    description: "Experience quality sound experience from where you are."

  },
  {
    name: "Instant Downloads",
    Icon: ArrowDownToLine,
    description: "Get your musical assets delivered to you in seconds."

  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of our environment."

  },
]


export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-9xl tracking-tight font-bold text-gray-900 sm:text-6xl">
            Your online plug for high-quality{" "}<span className="text-violet-600">musical assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to <b className="text-gray-900 font-bold">Vic</b>. Your trusted and verified instruments marketplace</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}> See Trending</Link>
            <Button variant="secondary"> Our quality promise &rarr;</Button>
          </div>
        </div>


        {/* TODO: List Products */}
      </MaxWidthWrapper>


      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-0">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{perk.description}</p>
                </div>

              </div>
            ))}
          </div>
        </MaxWidthWrapper>

      </section>
    </>
  )
}
