import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { PiXLogo } from 'react-icons/pi';
import { Coffee } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="container mx-auto py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-orange-800">
        Poopetti
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/docs" className="flex items-center space-x-2 text-orange-700">
          <BookOpen className="w-5 h-5" />
          <span className="hidden md:block">Docs</span>
        </Link>
        <Link
          href="https://github.com/enszrlu/poopetti"
          className="flex items-center space-x-2 text-orange-700"
          target="_blank"
        >
          <SiGithub className="w-5 h-5" />
          <span className="hidden md:block">GitHub</span>
        </Link>
        {/* Twitter */}
        <Link href="https://x.com/AlexZDevs" target="_blank">
          <Button
            variant="outline"
            className="flex items-center space-x-2 bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200"
          >
            <PiXLogo className="w-5 h-5" />
            <span className="hidden md:block">Twitter</span>
          </Button>
        </Link>
        <Link href="https://buymeacoffee.com/enszrlu">
          <Button
            variant="outline"
            className="flex items-center space-x-2 bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200"
          >
            <Coffee className="w-5 h-5" />
            <span className="hidden md:block">Buy Me a Coffee</span>
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
