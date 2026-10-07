import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../portfolioData';
import { DeveloperTerminal } from './DeveloperTerminal';
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, InstagramIcon, ArrowDownIcon } from './Icons';

export const Hero: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <GithubIcon size={18} />;
      case 'linkedin': return <LinkedinIcon size={18} />;
      case 'instagram': return <InstagramIcon size={18} />;
      default: return null;
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction and Hero">
      <div className="hero-background-glows" aria-hidden="true">
        <div className="glow-sphere glow-purple"></div>
        <div className="glow-sphere glow-blue"></div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Hero Text */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="beacon-dot"></span>
            <span className="status-label">{PERSONAL_INFO.currentStatus}</span>
          </div>

          {/* Subheading / Greeting */}
          <p className="hero-greeting">{PERSONAL_INFO.tagline}</p>

          {/* Main Headline */}
          <h1 className="hero-title">
            Aspiring Developer.<br />
            <span className="gradient-text">Curious Thinker.</span><br />
            Constant Learner.
          </h1>

          {/* Intro Description */}
          <p className="hero-description">
            {PERSONAL_INFO.intro}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="btn btn-primary"
            >
              <span>Explore My Work</span>
              <ArrowDownIcon size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="btn btn-secondary"
            >
              <span>Let's Connect</span>
              <ArrowUpRightIcon size={16} />
            </a>
          </div>

          {/* Social Links Quick Strip */}
          <div className="hero-social-strip">
            <span className="social-strip-label">Find me on:</span>
            <div className="social-icon-group">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={`Open Namitha's ${item.name} profile in a new tab`}
                  title={item.name}
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Code Terminal / Interactive Element */}
        <div className="hero-visual">
          <DeveloperTerminal />
        </div>
      </div>
    </section>
  );
};
