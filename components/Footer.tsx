import Link from 'next/link';
import Brand from '@/components/Brand';
import { images } from '@/lib/data/images';
import {
  footerBottom,
  footerBrand,
  footerColumns,
  footerContact,
} from '@/lib/data/navigation';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-g">
          <div>
            <Brand
              dark
              asLink={false}
              name={footerBrand.name}
              subtitle={footerBrand.subtitle}
              logoSrc={images.footerLogo}
            />
            <p className="foot-desc">{footerBrand.description}</p>
            <div className="foot-contact">
              <a href={footerContact.phoneHref}>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18L5 2.18a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>{' '}
                {footerContact.phone}
              </a>
              <a href={footerContact.emailHref}>
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>{' '}
                {footerContact.email}
              </a>
              <a href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>{' '}
                {footerContact.address}
              </a>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="foot-col">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-btm">
          <div className="foot-btm-l">{footerBottom.copyright}</div>
          <div className="foot-lnks">
            {footerBottom.links.map((link) => (
              <Link key={link.href + link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
