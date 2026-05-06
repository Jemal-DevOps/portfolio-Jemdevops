// src/components/Navbar/Navbar.jsx
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#cicd', label: 'CI/CD' },
  { href: '#projects', label: 'Projects' },
  { href: '#casestudies', label: 'Cases' },
  { href: '#contact', label: 'Contact' },
];

// ✅ Changed to named export for consistency
export function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>JA.dev</div>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <div className={styles.toggleRow}>
            <span className={styles.toggleIcon}>🌙</span>
            <button
              className={styles.themeToggle}
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              data-light={theme === 'light'}
            />
            <span className={styles.toggleIcon}>☀️</span>
          </div>
          <a href="#contact" className={styles.hirBtn}>Hire Me</a>
        </div>
      </div>
    </nav>
  );
}