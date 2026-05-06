import { useState } from 'react';
import styles from './Timeline.module.css';
import { FaCode, FaSearch, FaVial, FaDocker, FaRocket, FaCheck } from 'react-icons/fa';

const steps = [
  { icon: FaCode, label: 'Code Push', sub: 'git push -> main' },
  { icon: FaSearch, label: 'Lint & Check', sub: 'ESLint, formatting' },
  { icon: FaVial, label: 'Tests', sub: 'Jest, unit tests' },
  { icon: FaDocker, label: 'Docker Build', sub: 'build & tag image' },
  { icon: FaRocket, label: 'Push Registry', sub: 'ghcr.io latest' },
  { icon: FaRocket, label: 'Deploy VPS', sub: 'SSH - docker pull' },
  { icon: FaCheck, label: 'Health Check', sub: 'curl / status 200' }
];

export const Timeline = () => {
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [logs, setLogs] = useState([]);

  const runPipeline = async () => {
    setRunning(true); setLogs([]); setCurrentStep(-1);
    const messages = [
      "Triggered on push to main...",
      "Running lint checks... Passed.",
      "Executing test suite... 42/42 passed.",
      "Building docker image... Done.",
      "Pushing to ghcr.io... Success.",
      "Deploying to VPS via SSH...",
      "Health check passed! Status: 200."
    ];
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 800));
      setCurrentStep(i);
      setLogs(prev => [...prev, { text: messages[i], type: i === steps.length -1 ? 'success' : 'info' }]);
    }
    setRunning(false);
  };

  return (
    <section id="cicd" className="section" style={{background:'var(--bg-main)'}}>
      <div className="container">
        <span className="section-label">Pipeline Visualization</span>
        <h2>CI/CD Timeline</h2>
        
        <div className={styles.controls}>
          <button className={styles.runBtn} onClick={runPipeline} disabled={running}>
            {running ? ' Running...' : '▶ Run Pipeline'}
          </button>
          <button className={styles.resetBtn} onClick={() => { setLogs([]); setCurrentStep(-1); }}>↺ Reset</button>
          <span className={styles.statusText}>Ready to run</span>
        </div>

        <div className={styles.pipeline}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            const state = i < currentStep ? 'done' : i === currentStep ? 'active' : 'waiting';
            return (
              <div key={i} className={`${styles.node} ${styles[state]}`}>
                <div className={styles.circle}><Icon /></div>
                <h4>{s.label}</h4>
                <p>{s.sub}</p>
                <span className={styles.statusBadge}>{state}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.logTerm}>
          {logs.length === 0 && <p className="text-muted">// Pipeline log - press Run Pipeline to start</p>}
          {logs.map((l, i) => (
            <p key={i} className={l.type === 'success' ? 'text-success' : 'text-muted'}>
              {i === logs.length-1 ? '> ' : ''}{l.text}
            </p>
          ))}
        </div>

        <div className={styles.metrics}>
          <div className="card"><h3 className="text-gradient">47</h3><p className="text-muted">Total Builds</p></div>
          <div className="card"><h3 className="text-gradient">94%</h3><p className="text-muted">Success Rate</p></div>
          <div className="card"><h3 className="text-gradient">2m 38s</h3><p className="text-muted">Avg Build Time</p></div>
          <div className="card"><h3 className="text-gradient">31</h3><p className="text-muted">Deployments</p></div>
          <div className="card"><h3 className="text-gradient">0</h3><p className="text-muted">Downtime Events</p></div>
        </div>
      </div>
    </section>
  );
};