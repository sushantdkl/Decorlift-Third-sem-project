<<<<<<< HEAD
// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left corner
  }, [pathname]);

  return null; // This component renders nothing
=======
// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left corner
  }, [pathname]);

  return null; // This component renders nothing
>>>>>>> 870caabfc862db6c31f275a100a811a424e06bb2
}