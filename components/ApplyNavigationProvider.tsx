'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';

type ApplyNavigationContextValue = {
  isNavigating: boolean;
  startNavigation: () => void;
};

const ApplyNavigationContext = createContext<ApplyNavigationContextValue | null>(
  null,
);


export function ApplyNavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
  }, []);

  useEffect(() => {
    if (pathname === '/apply') {
      setIsNavigating(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isNavigating) {
      return;
    }

    const timeout = window.setTimeout(() => setIsNavigating(false), 15000);
    return () => window.clearTimeout(timeout);
  }, [isNavigating]);

  return (
    <ApplyNavigationContext.Provider value={{ isNavigating, startNavigation }}>
      {children}
      {isNavigating ? (
        <div
          className="apply-nav-overlay"
          role="status"
          aria-live="polite"
          aria-label="Loading application page"
        >
          <div className="apply-nav-overlay-in">
            <span className="apply-link-spinner" aria-hidden="true" />
            Opening application form...
          </div>
        </div>
      ) : null}
    </ApplyNavigationContext.Provider>
  );
}

export function useApplyNavigation() {
  const context = useContext(ApplyNavigationContext);

  if (!context) {
    throw new Error(
      'useApplyNavigation must be used within ApplyNavigationProvider',
    );
  }

  return context;
}
