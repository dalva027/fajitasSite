"use client"
import { cn } from "@/lib/utils"
import { BookOpen, Menu } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { Dialog, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
// import ModeToggle from "../mode-toggle"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import ModeToggle from "../mode-toggle"
import Image from "next/image"
import Logo from "@/public/logo-faj.png"


export function NavBar() {

    return ( 
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
            <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
                <Dialog >
                    
                    <SheetTrigger asChild className="min-[800px]:hidden transition">
                        <Menu   />
                        
                    </SheetTrigger>
                    <SheetTitle className="min-[800px]:hidden pr-5 transition italic text-black dark:text-white">
                        <Link href="/">
                            {/* <h1 className="font-bold">Fajitas</h1> */}
                            <Image
                                src={Logo}
                                alt="Fajitas"
                                width={65}
                                height={95}    
                            />
                        </Link>
                        </SheetTitle>
                    <SheetContent className="bg-white-500" side="left">
                        <SheetHeader>
                            <SheetTitle> Fajitas</SheetTitle>
                            <SheetDescription>
                                From our kitchen to your table 
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full font-bold">Home</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/menu">
                                    <Button variant="outline" className="w-full">Menu</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/contact">
                                    <Button variant="outline" className="w-full">Contact</Button>
                                </Link>
                            </DialogClose>
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Dialog>
                <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:hidden">      
                        <Link href="/" className="pl-2">
                            {/* <h1 className="font-bold">Fajitas</h1> */}
                            <Image
                                src={Logo}
                                alt="Fajitas"
                                width={100}
                                height={100}    
                            />
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <Link href="/menu">
                        <Button variant="ghost" className="font-bold">Menu</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="ghost" className="font-bold">Contact</Button>
                    </Link>
                    
                    <ModeToggle />
                </div>
            </div>
        </div>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"