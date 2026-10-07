import React from 'react';
import { PERSONAL_INFO } from '../portfolioData';
import { BrainIcon, TerminalIcon, CodeIcon, SparklesIcon } from './Icons';

export const About: React.FC = () => {
  const getJourneyIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <BrainIcon size={22} className="card-icon-accent" />;
      case 'terminal': return <TerminalIcon size={22} className="card-icon-accent" />;
      case 'code': return <CodeIcon size={22} className="card-icon-accent" />;
      default: return <SparklesIcon size={22} className="card-icon-accent" />;
    }
  };

  return (
    <section id="about" className="section-padding about-section" aria-label="About Namitha Reddy">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>Get To Know Me</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An engineering student focused on building strong programming foundations and turning concepts into reality.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Authentic Story Narrative */}
          <div className="about-narrative">
            <div className="narrative-card">
              <h3 className="narrative-heading">
                Driven by curiosity, grounded in fundamentals.
              </h3>

              <div className="narrative-paragraphs">
                {PERSONAL_INFO.aboutText.map((paragraph, index) => (
                  <p key={index} className="narrative-text">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Genuine Values Badges */}
              <div className="values-row">
                <div className="value-tag">
                  <span className="value-indicator"></span>
                  <span>Curiosity-Driven</span>
                </div>
                <div className="value-tag">
                  <span className="value-indicator"></span>
                  <span>Consistent Practice</span>
                </div>
                <div className="value-tag">
                  <span className="value-indicator"></span>
                  <span>First-Principles Thinker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars of Growth */}
          <div className="about-pillars">
            <div className="pillars-list">
              {PERSONAL_INFO.learningJourney.map((pillar, index) => (
                <div key={index} className="pillar-card">
                  <div className="pillar-icon-wrapper">
                    {getJourneyIcon(pillar.icon)}
                  </div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-description">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Fact / Current Stance Card */}
            <div className="quick-fact-card">
              <div className="quick-fact-header">
                <span className="quick-fact-title">Current Objective</span>
              </div>
              <p className="quick-fact-body">
                Preparing for software engineering internships and collaborative student projects where I can contribute, receive mentorship, and continuously level up my technical capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
