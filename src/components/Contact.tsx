import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowUpRightIcon, CopyIcon, CheckIcon, SparklesIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <GithubIcon size={22} />;
      case 'linkedin': return <LinkedinIcon size={22} />;
      case 'instagram': return <InstagramIcon size={22} />;
      default: return null;
    }
  };

  const handleCopyLink = (url: string, name: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(name);
      setTimeout(() => setCopiedLink(null), 2500);
    });
  };

  return (
    <section id="contact" className="section-padding contact-section" aria-label="Contact and Social Profiles">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Open to engineering internships, student projects, and peer learning opportunities.
          </p>
        </div>

        <div className="contact-card-wrapper">
          {/* Main Welcome Invitation Banner */}
          <div className="contact-invite-banner">
            <div className="invite-glow" aria-hidden="true"></div>
            <div className="invite-content">
              <span className="invite-badge">
                <SparklesIcon size={14} />
                <span>Internship & Project Opportunities</span>
              </span>
              <h3 className="invite-heading">
                Looking for an enthusiastic, fast-learning engineering intern?
              </h3>
              <p className="invite-description">
                I am actively seeking software engineering internships where I can contribute my programming fundamentals in Java and C, apply disciplined problem-solving, and rapidly absorb industry best practices.
              </p>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="social-cards-grid">
            {SOCIAL_LINKS.map((link) => (
              <div key={link.name} className="social-card">
                <div className="social-card-top">
                  <div className={`social-icon-bubble bubble-${link.icon}`}>
                    {getSocialIcon(link.icon)}
                  </div>
                  <button
                    onClick={() => handleCopyLink(link.url, link.name)}
                    className="social-copy-btn"
                    title={`Copy ${link.name} link`}
                    aria-label={`Copy ${link.name} profile link`}
                  >
                    {copiedLink === link.name ? (
                      <>
                        <CheckIcon size={14} className="text-emerald" />
                        <span className="copy-label text-emerald">Copied</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon size={14} />
                        <span className="copy-label">Copy Link</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="social-card-body">
                  <h4 className="social-platform-name">{link.name}</h4>
                  <p className="social-handle">{link.username}</p>
                </div>

                <div className="social-card-action">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-direct-link"
                    aria-label={`Visit Namitha's ${link.name} profile (opens in new tab)`}
                  >
                    <span>Visit Profile</span>
                    <ArrowUpRightIcon size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Connect Prompt */}
          <div className="direct-connect-note">
            <p>
              The most reliable way to reach out is via{' '}
              <a
                href="https://www.linkedin.com/in/namitha-reddy-2b6b222a7"
                target="_blank"
                rel="noopener noreferrer"
                className="highlighted-link"
              >
                LinkedIn Direct Message <ArrowUpRightIcon size={12} />
              </a>
              . I typically reply promptly to recruiters, mentors, and fellow engineering students!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
