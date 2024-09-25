import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileSidebar = () => {
  return (
    <section className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={32} className="cursor-pointer lg:hidden text-bray-900" />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex cursor-pointer items-center gap-1 px-4"
            >
              <Image src="/icons/logo.svg" alt="Logo" width={34} height={34} />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Cookify
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 dark:text-white text-black">
                  <Link
                    href="/recipes/create-edit"
                    className="text-2xl font-semibold"
                  >
                    New Recipe
                  </Link>
                  <Link href="/categories" className="text-2xl font-semibold">
                    Categories
                  </Link>
                  <Link href="/recipes" className="text-2xl font-semibold">
                    Recipes
                  </Link>
                  <Link href="/about" className="text-2xl font-semibold">
                    About
                  </Link>
                  <Link href="/contact" className="text-2xl font-semibold">
                    Contact
                  </Link>
                </nav>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSidebar;
