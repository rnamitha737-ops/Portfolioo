import React, { useState } from 'react';
import { PROJECTS } from '../portfolioData';
import { Project } from '../types';
import { GithubIcon, ArrowUpRightIcon, SparklesIcon, CpuIcon, ShieldIcon, CodeIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'concept'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'active') return proj.status.includes('Active') || proj.status.includes('In Progress');
    if (filter === 'concept') return proj.status.includes('Concept');
    return true;
  });

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Active / Current':
        return (
          <span className="project-badge badge-active">
            <span className="beacon-dot"></span>
            Active Project
          </span>
        );
      case 'In Progress':
        return (
          <span className="project-badge badge-in-progress">
            <span className="beacon-dot beacon-amber"></span>
            In Progress
          </span>
        );
      case 'Concept':
        return (
          <span className="project-badge badge-concept">
            <SparklesIcon size={12} />
            System Concept
          </span>
        );
      case 'Research & Concept':
        return (
          <span className="project-badge badge-research">
            <ShieldIcon size={12} />
            Research Concept
          </span>
        );
      default:
        return null;
    }
  };

  const getProjectIcon = (category: Project['category']) => {
    switch (category) {
      case 'Web': return <CodeIcon size={20} className="proj-type-icon" />;
      case 'IoT / Hardware': return <CpuIcon size={20} className="proj-type-icon" />;
      case 'Cybersecurity': return <ShieldIcon size={20} className="proj-type-icon" />;
      default: return <SparklesIcon size={20} className="proj-type-icon" />;
    }
  };

  return (
    <section id="projects" className="section-padding projects-section" aria-label="Featured Projects and Concepts">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>Craft & Exploration</span>
          </div>
          <h2 className="section-title">Projects & Concepts</h2>
          <p className="section-subtitle">
            A curated collection of practical implementations and exploratory engineering concepts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filter-row" role="tablist" aria-label="Project category filters">
          <button
            role="tab"
            aria-selected={filter === 'all'}
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Projects ({PROJECTS.length})
          </button>
          <button
            role="tab"
            aria-selected={filter === 'active'}
            onClick={() => setFilter('active')}
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          >
            Active Work (1)
          </button>
          <button
            role="tab"
            aria-selected={filter === 'concept'}
            onClick={() => setFilter('concept')}
            className={`filter-btn ${filter === 'concept' ? 'active' : ''}`}
          >
            Engineering Concepts (3)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card Header */}
              <div className="project-card-header">
                <div className="project-category-tag">
                  {getProjectIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                {getStatusBadge(project.status)}
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Key Highlights */}
              <div className="project-highlights">
                <h4 className="highlights-label">Key Highlights:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Actions */}
              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-card-action"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                )}

                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-card-action btn-card-primary"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRightIcon size={16} />
                  </a>
                )}

                {project.demoUrl === '#' && (
                  <span className="demo-current-badge" title="You are currently viewing this website!">
                    <span>Live Preview (Current Site)</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Reassurance Footer */}
        <div className="projects-footnote">
          <p>
            💡 <em>All project information is centralized in <code>portfolioData.ts</code> for effortless updates as new features are built.</em>
          </p>
        </div>
      </div>
    </section>
  );
};
