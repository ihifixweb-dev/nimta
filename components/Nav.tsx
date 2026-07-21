'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Brand from '@/components/Brand';
import { navLinks } from '@/lib/data/navigation';
import { images } from '@/lib/data/images';

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav id="nav" role="navigation" aria-label="Main">
      <div className="nav-in">
        <Brand logoSrc={images.navLogo} />
        <div className={`nav-l${open ? ' open' : ''}`} id="navL">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.variant === 'apply' ? 'nav-apply' : ''}${isActive(link.href) ? ' on' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="nav-tog"
          id="navTog"
          aria-label="Menu"
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
