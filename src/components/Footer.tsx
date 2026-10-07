import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../portfolioData';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <GithubIcon size={16} />;
      case 'linkedin': return <LinkedinIcon size={16} />;
      case 'instagram': return <InstagramIcon size={16} />;
      default: return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-monogram monogram-sm">
              <span>NR</span>
            </div>
            <div>
              <span className="footer-name">{PERSONAL_INFO.name}</span>
              <p className="footer-tagline">
                Engineering student learning, building, and solving problems.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={`Namitha's ${link.name}`}
                title={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Footer Row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} {PERSONAL_INFO.name}. Crafted with React, TypeScript & CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <span className="rotate-180">
              <ArrowDownIcon size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
