import React from 'react';
import { EDUCATION_DATA } from '../portfolioData';
import { BookOpenIcon, CheckIcon } from './Icons';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding education-section" aria-label="Academic Background and Education">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering foundations supporting my programming and software development path.
          </p>
        </div>

        <div className="education-container">
          <div className="education-card">
            {/* Top Bar with Icon & Status */}
            <div className="education-card-top">
              <div className="education-icon-box">
                <BookOpenIcon size={24} className="education-icon" />
              </div>
              <div className="education-status-pill">
                <span className="beacon-dot"></span>
                <span>{EDUCATION_DATA.status}</span>
              </div>
            </div>

            {/* Main Details */}
            <div className="education-main-info">
              <div className="degree-title-row">
                <h3 className="education-degree">{EDUCATION_DATA.degree}</h3>
                <span className="education-period">{EDUCATION_DATA.period}</span>
              </div>
              <p className="education-institution">{EDUCATION_DATA.institution}</p>
              <p className="education-description">{EDUCATION_DATA.description}</p>
            </div>

            {/* Core Coursework Section */}
            <div className="education-coursework">
              <h4 className="coursework-heading">Relevant Academic Coursework:</h4>
              <div className="coursework-grid">
                {EDUCATION_DATA.keyCoursework.map((course, idx) => (
                  <div key={idx} className="coursework-item">
                    <CheckIcon size={14} className="coursework-check" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editable Configuration Note */}
            {EDUCATION_DATA.note && (
              <div className="education-note-box">
                <span className="note-badge">Configuration Note</span>
                <p className="note-message">
                  {EDUCATION_DATA.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
