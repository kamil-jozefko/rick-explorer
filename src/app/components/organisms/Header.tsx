"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../molecules/DarkModeToggle";

interface Route {
    href: string;
    label: string;
}

interface HeaderProps {
    routes: Route[];
}

const Header: React.FC<HeaderProps> = ({ routes }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white backdrop-blur-md px-4 shadow-md">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full">
                <Link href="/" aria-label="Go to homepage">
                    <span className="text-xl font-bold whitespace-nowrap">
                        Rick & Morty Explorer
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-sm font-medium text-white dark:text-gray-300 hover:underline transition"
                        >
                            {route.label}
                        </Link>
                    ))}
                    <DarkModeToggle />
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white shadow-md py-4 px-4 flex flex-col gap-4 z-40">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-base font-medium hover:underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {route.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <DarkModeToggle />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
