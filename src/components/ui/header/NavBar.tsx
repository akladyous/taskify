"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { ThemeToggler } from "@/components/theme/ThemeToggler";
import { UserButton } from "@clerk/nextjs";
import { navItems } from "@/lib/appConfig";
import CurrentUser from "./CurrentUser";
import "./navbar.css";
import { cn } from "@/lib/utils";

export default function NavBar() {
    const hamburgerRef = useRef<any>();
    const menuRef = useRef<any>();

    const handleClick = useCallback(() => {
        if (menuRef.current) {
            menuRef.current.classList.toggle("hidden");
            const menu: HTMLDivElement | null = document.querySelector(".nav-menu");

            menu?.style.height === "100%" ? "4rem" : "100%";
        }
    }, []);

    return (
        <header className="">
            <nav className="navbar">
                <div className="nav-brand">
                    <Link className="text-lg" href={"/"}>
                        Taskify
                    </Link>
                </div>
                <div className="md:hidden">
                    <HamburgerMenu className="w-6 h-6 cursor-pointer block" handler={handleClick} ref={hamburgerRef} />
                </div>
                <div className="nav-menu w-full hidden md:flex md:w-auto" ref={menuRef}>
                    <ul role="list" className="pt-4 md:flex md:items-center md:justify-between md:pt-0 text-base">
                        {navItems.map((item, i) => (
                            <li
                                role="listitem"
                                key={i}
                                className="block md:p-4 hover:md:border-l-0 hover:md:border-b-2 | py-1 my-1 pl-1 hover:border-l-4 hover:border-gray-300">
                                <Link href={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="text-base md:flex md:items-center md:justify-between md:pt-0 md: space-x-2">
                        <div className="md:block ">
                            <CurrentUser />
                        </div>
                        <div className="md:block  hidden">
                            <ThemeToggler />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
