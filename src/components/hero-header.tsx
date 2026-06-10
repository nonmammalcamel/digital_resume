'use client';

import { useEffect, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type HeroHeaderProps = {
  name: string;
  role: string;
  navItems: readonly NavItem[];
};

export function HeroHeader({ name, role, navItems }: HeroHeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateScrollProgress() {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(scrollTop / scrollableHeight);
    }

    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <header className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <nav className="hero-nav" aria-label="Resume sections">
          {navItems.map((item) => (
            <a className="hero-nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <h1 id="hero-title" className="hero-name">
          {name.toUpperCase()}
        </h1>

        <div className="hero-role">
          <span className="hero-prompt" aria-hidden="true">
            &gt;
          </span>

          <span className="hero-role-text">{role}</span>

          <span className="scroll-progress" aria-hidden="true">
            <span
              className="scroll-progress-fill"
              style={{ transform: `scaleX(${Math.max(scrollProgress, 0.08)})` }}
            />
          </span>
        </div>

        <div className="hero-rule" aria-hidden="true" />
      </div>
    </header>
  );
}