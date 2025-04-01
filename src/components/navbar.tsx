'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const activeLinkClass = 'font-bold underline text-black h-full';
    const defaultLinkClass = 'text-black h-full';
    const hoverLinkClass = 'hover:bg-stone-300';

    return (
        <nav className="flex items-center bg-white h-16 px-30">
            <div className="px-5 py-2 mr-3">
                <Link href="/">
                    <img src="/attendant-logo.png" className="w-12 h-12" />
                </Link>
            </div>
            <div className="flex h-full text-md">
                <Link href="/dashboard" className={`flex items-center justify-center px-3 rounded transition-colors ${pathname === '/dashboard' ? activeLinkClass : defaultLinkClass} ${hoverLinkClass}`}>
                    Dashboard
                </Link>
                <Link href="/dashboard/invoices" className={`flex items-center justify-center px-3 rounded transition-colors ${pathname === '/dashboard/invoices' ? activeLinkClass : defaultLinkClass} ${hoverLinkClass}`}>
                    Invoices
                </Link>
                <Link href="/customers" className={`flex items-center justify-center px-3 rounded transition-colors ${pathname === '/customers' ? activeLinkClass : defaultLinkClass} ${hoverLinkClass}`}>
                    Customers
                </Link>
            </div>
        </nav>
    )
}