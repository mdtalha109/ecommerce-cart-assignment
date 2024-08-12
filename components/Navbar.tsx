'use client'

import { useCartContext } from '@/context/CartContext';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <header className="bg-white border-b px-4 md:px-6 flex items-center h-14 md:h-16">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>

                <span className="font-semibold text-lg">Ecom Store</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 md:gap-6">
                <Link href="/" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    Home
                </Link>
                <Link href="/cart" className="text-muted-foreground hover:text-foreground" prefetch={true}>
                    Cart
                </Link>

            </nav>
        </header>
    );
};

export default Navbar;
