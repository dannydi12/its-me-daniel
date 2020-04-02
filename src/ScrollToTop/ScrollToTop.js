import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls back to top on a new page. Had to override scroll behavior when going to /attribution.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}