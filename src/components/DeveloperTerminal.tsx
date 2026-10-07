import React, { useState } from 'react';
import { TerminalIcon, CodeIcon, CopyIcon, CheckIcon } from './Icons';

export const DeveloperTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'java' | 'json' | 'terminal'>('java');
  const [copied, setCopied] = useState(false);

  const javaCode = `public class NamithaReddy {
    public static void main(String[] args) {
        Developer student = new Developer("Namitha Reddy");
        student.setCurrentFocus("Java & Algorithms");
        student.setDailyCommitment("Practice, Explore, Build");
        
        // Continuous improvement loop
        while (student.isCurious()) {
            student.strengthenFundamentals();
            student.buildProjects();
            student.learnFromMistakes();
        }
    }
}`;

  const jsonCode = `{
  "name": "Namitha Reddy",
  "status": "Engineering Undergraduate",
  "learning": [
    "Java",
    "Data Structures & Algorithms",
    "Git & GitHub Workflows"
  ],
  "passion": "Building thoughtful software",
  "openFor": "Internships & Collaborations"
}`;

  const terminalOutput = `$ git status
On branch main
Your branch is up to date with 'origin/main'.
Changes to be committed:
  modified: skills/java-fundamentals.dsa
  new file: projects/portfolio-v1.tsx

$ javac NamithaReddy.java && java NamithaReddy
[INFO] Compilation successful (0 errors, 0 warnings)
[EXEC] Continuous learning loop initialized.
[STATUS] Ready to collaborate and contribute! 🚀`;

  const copyCode = () => {
    let contentToCopy = javaCode;
    if (activeTab === 'json') contentToCopy = jsonCode;
    if (activeTab === 'terminal') contentToCopy = terminalOutput;

    navigator.clipboard.writeText(contentToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="developer-terminal-card" aria-label="Interactive Developer Code Preview">
      {/* Terminal Titlebar */}
      <div className="terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <span className="control-dot dot-red"></span>
          <span className="control-dot dot-yellow"></span>
          <span className="control-dot dot-green"></span>
        </div>

        {/* Tab Switcher */}
        <div className="terminal-tabs" role="tablist" aria-label="Code tabs">
          <button
            role="tab"
            aria-selected={activeTab === 'java'}
            className={`terminal-tab ${activeTab === 'java' ? 'active' : ''}`}
            onClick={() => setActiveTab('java')}
          >
            <CodeIcon size={14} className="tab-icon" />
            <span>Namitha.java</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'json'}
            className={`terminal-tab ${activeTab === 'json' ? 'active' : ''}`}
            onClick={() => setActiveTab('json')}
          >
            <span>profile.json</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'terminal'}
            className={`terminal-tab ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <TerminalIcon size={14} className="tab-icon" />
            <span>bash</span>
          </button>
        </div>

        {/* Copy snippet button */}
        <button
          onClick={copyCode}
          className="terminal-copy-btn"
          title="Copy code to clipboard"
          aria-label="Copy code to clipboard"
        >
          {copied ? <CheckIcon size={14} className="text-emerald" /> : <CopyIcon size={14} />}
          <span className="copy-text">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Terminal Code Body */}
      <div className="terminal-body" role="tabpanel">
        {activeTab === 'java' && (
          <div className="code-content java-syntax">
            <div className="line-numbers" aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <pre>
              <code>
                <span className="tok-keyword">public class </span>
                <span className="tok-class">NamithaReddy </span>
                {`{\n`}
                {'    '}<span className="tok-keyword">public static void </span>
                <span className="tok-method">main</span>(String[] args) {`{\n`}
                {'        '}<span className="tok-class">Developer </span>student = <span className="tok-keyword">new </span><span className="tok-class">Developer</span>(<span className="tok-string">"Namitha Reddy"</span>);{`\n`}
                {'        '}student.<span className="tok-method">setCurrentFocus</span>(<span className="tok-string">"Java & Algorithms"</span>);{`\n`}
                {'        '}student.<span className="tok-method">setCommitment</span>(<span className="tok-string">"Curiosity & Consistency"</span>);{`\n\n`}
                {'        '}<span className="tok-comment">// Continuous growth mindset</span>{`\n`}
                {'        '}<span className="tok-keyword">while </span>(student.<span className="tok-method">isCurious</span>()) {`{\n`}
                {'            '}student.<span className="tok-method">strengthenFundamentals</span>();{`\n`}
                {'            '}student.<span className="tok-method">buildProjects</span>();{`\n`}
                {'        '}{`}\n`}
                {'    '}{`}\n`}
                {`}`}
              </code>
            </pre>
          </div>
        )}

        {activeTab === 'json' && (
          <div className="code-content json-syntax">
            <div className="line-numbers" aria-hidden="true">
              {Array.from({ length: 11 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <pre>
              <code>
                {`{\n`}
                {'  '}<span className="tok-prop">"name"</span>: <span className="tok-string">"Namitha Reddy"</span>,{`\n`}
                {'  '}<span className="tok-prop">"role"</span>: <span className="tok-string">"Engineering Student"</span>,{`\n`}
                {'  '}<span className="tok-prop">"languages"</span>: [<span className="tok-string">"Java (learning)"</span>, <span className="tok-string">"C"</span>],{`\n`}
                {'  '}<span className="tok-prop">"currentFocus"</span>: [<span className="tok-string">"Data Structures"</span>, <span className="tok-string">"Algorithms"</span>],{`\n`}
                {'  '}<span className="tok-prop">"tools"</span>: [<span className="tok-string">"Git"</span>, <span className="tok-string">"GitHub"</span>, <span className="tok-string">"VS Code"</span>],{`\n`}
                {'  '}<span className="tok-prop">"openFor"</span>: <span className="tok-string">"Internships & Collaboration"</span>{`\n`}
                {`}`}
              </code>
            </pre>
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="code-content cli-syntax">
            <pre className="cli-output">
              <code>
                <span className="cli-prompt">$ </span><span className="cli-command">git status</span>{`\n`}
                <span className="cli-dim">On branch main</span>{`\n`}
                <span className="cli-dim">Changes staged for commit:</span>{`\n`}
                <span className="cli-green">  new file: projects/portfolio-namitha.tsx</span>{`\n`}
                <span className="cli-green">  modified: skills/java-dsa-fundamentals</span>{`\n\n`}
                <span className="cli-prompt">$ </span><span className="cli-command">java -version</span>{`\n`}
                <span className="cli-dim">openjdk version "21.0.2" (LTS)</span>{`\n\n`}
                <span className="cli-prompt">$ </span><span className="cli-command">echo $STATUS</span>{`\n`}
                <span className="cli-accent">Ready to learn, build, and solve problems ✨</span>
              </code>
            </pre>
          </div>
        )}
      </div>

      {/* Terminal Footer status pill */}
      <div className="terminal-footer">
        <span className="status-indicator">
          <span className="pulse-dot"></span>
          Java SE 21 • Git tracking active
        </span>
        <span className="encoding-text">UTF-8 • CRLF</span>
      </div>
    </div>
  );
};
