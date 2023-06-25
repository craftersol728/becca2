import React, { useEffect, useRef, ReactNode } from 'react';
import '../../styles/components/_scroll-bar.scss'

interface ScrollbarProps {
  children?: ReactNode;
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children }) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    const scrollbarDiv = scrollbarRef.current;

    if (scrollbarDiv) {
      // do something with scrollbarDiv, isChrome, isSafari
    }
  }, []);

  return (
    <div className="scrollbar" ref={scrollbarRef}>
      {children}
    </div>
  );
};

export default Scrollbar;
