import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import { SiDiscord, SiGithub, SiNexusmods } from "@icons-pack/react-simple-icons";

export const NAVLINKS = [
  {
    title: "Home",
    href: `/`,
  },
  {
    title: "Docs",
    href: `/docs/getting-started`,
  },
  {
    title: "FAQ",
    href: `/blog/faq`,
  }
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0 items-center">
              <Link
                href="https://github.com/hierocles/messier"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <SiGithub className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <SiNexusmods className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <SiDiscord className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link href="/blog/changelog" className="text-xs text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded-md h-full">v0.1-prerelease</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 h-full">
      <Image
        src="/logo.svg"
        alt="Messier Logo"
        width={140}
        height={40}
        className="w-[140px] h-[40px] mt-1"
      />
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-base text-[14.5px] dark:text-stone-300/85 text-stone-800 h-full"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
