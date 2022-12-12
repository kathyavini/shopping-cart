import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This is the React v5 solution since I'm not yet using a data router, see https://reactrouter.com/en/main/components/scroll-restoration
export function ScrollToTop() {
  const { pathname } = useLocation();

  // Note is does have to be a Layout Effect as described in https://stackoverflow.com/questions/70193712/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
