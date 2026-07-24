'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import {
  useApplyNavigation,
} from '@/components/ApplyNavigationProvider';
import { isApplyHref } from '@/lib/is-apply-href';

type ApplyLinkProps = ComponentProps<typeof Link>;

function getHrefString(href: ApplyLinkProps['href']) {
  if (typeof href === 'string') {
    return href;
  }

  if (href && typeof href === 'object' && 'pathname' in href && href.pathname) {
    return href.pathname;
  }

  return '';
}

export default function ApplyLink({
  href,
  onClick,
  className,
  children,
  ...props
}: ApplyLinkProps) {
  const pathname = usePathname();
  const { isNavigating, startNavigation } = useApplyNavigation();
  const hrefString = getHrefString(href);
  const appliesLoader = isApplyHref(hrefString);
  const isLoading = appliesLoader && isNavigating;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !appliesLoader || pathname === '/apply') {
      return;
    }

    startNavigation();
  };

  return (
    <Link
      href={href}
      className={`${className ?? ''}${isLoading ? ' is-loading' : ''}`.trim()}
      onClick={handleClick}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="apply-link-spinner" aria-hidden="true" />
          <span className="apply-link-label">{children}</span>
        </>
      ) : (
        children
      )}
    </Link>
  );
}
