import { useEffect, useRef } from 'react';

export const useKeyboardNavigation = (sectionIds) => {
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Block if user is typing in a form field or code editor
      const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable;
      if (isTyping || isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); // Stop default page scroll

        // Find which section is currently in view
        const viewportThreshold = window.innerHeight * 0.35;
        let currentIndex = 0;

        for (let i = 0; i < sectionIds.length; i++) {
          const el = document.getElementById(sectionIds[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= viewportThreshold) {
              currentIndex = i;
            }
          }
        }

        // Determine target index
        let targetIndex = currentIndex;
        if (e.key === 'ArrowDown' && currentIndex < sectionIds.length - 1) {
          targetIndex = currentIndex + 1;
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          targetIndex = currentIndex - 1;
        }

        // Smooth scroll if changed
        if (targetIndex !== currentIndex) {
          isScrolling.current = true;
          const targetEl = document.getElementById(sectionIds[targetIndex]);
          targetEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Unlock after animation completes
          setTimeout(() => { isScrolling.current = false; }, 750);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sectionIds]);
};