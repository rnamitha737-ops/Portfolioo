import React from 'react';
import { SKILL_CATEGORIES } from '../portfolioData';
import { CodeIcon, ToolsIcon, CpuIcon, SparklesIcon } from './Icons';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <CodeIcon size={20} />;
      case 'tools': return <ToolsIcon size={20} />;
      case 'cpu': return <CpuIcon size={20} />;
      case 'sparkles': return <SparklesIcon size={20} />;
      default: return <CodeIcon size={20} />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Learning':
        return <span className="skill-status-badge badge-learning">Learning</span>;
      case 'Practicing':
        return <span className="skill-status-badge badge-practicing">Active Practice</span>;
      case 'Proficient':
        return <span className="skill-status-badge badge-proficient">Foundation</span>;
      case 'Exploring':
        return <span className="skill-status-badge badge-exploring">Exploring</span>;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="section-padding skills-section" aria-label="Technical Skills and Tools">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>Technical Toolkit</span>
          </div>
          <h2 className="section-title">Skills & Competencies</h2>
          <p className="section-subtitle">
            An honest reflection of the languages, tools, and theoretical principles I actively study and apply.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-category-icon">
                  {getCategoryIcon(category.icon)}
                </div>
                <div className="skill-category-meta">
                  <h3 className="skill-category-title">{category.title}</h3>
                  <p className="skill-category-desc">{category.description}</p>
                </div>
              </div>

              <div className="skill-items-container">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill-item">
                    <span className="skill-name">{skill.name}</span>
                    {getStatusBadge(skill.status)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency & Continuous Learning */}
        <div className="skills-note-banner">
          <div className="note-icon-pulse">
            <span className="beacon-dot"></span>
          </div>
          <p className="note-text">
            <strong>Transparency First:</strong> As a student, I value genuine depth over surface-level buzzwords. I actively code each week to turn &ldquo;learning&rdquo; into dependable engineering instincts.
          </p>
        </div>
      </div>
    </section>
  );
};
