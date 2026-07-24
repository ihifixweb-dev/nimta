export function isApplyHref(href: string) {
  return (
    href === '/apply' ||
    href.startsWith('/apply?') ||
    href.startsWith('/apply#')
  );
}
