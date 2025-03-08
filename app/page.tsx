import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";
import Image from "next/image";
import Starfield from 'react-starfield';


export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12 relative">
      <div className="absolute inset-0 -z-10">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="hsl(20 14.3% 4.1%)"
        />
      </div>

      <Image
        src="/splash.svg"
        alt="Messier Logo"
        width={452}
        height={378}
        className="w-[452px] h-[378px]"
        quality={100}
      />
      <p className="sm:text-lg max-w-[800px] text-muted-foreground pt-4 pb-4">
        A feature-packed, deleveled, hardcore Wabbajack modlist for Starfield.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg", variant: "outline" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
