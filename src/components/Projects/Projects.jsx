import { useState } from 'react';
import styles from './Projects.module.css';
import { FaGithub } from 'react-icons/fa';

const data = [
  {
    title: 'Dockerized Web App + CI/CD Pipeline',
    desc: 'Eliminated manual deployment causing downtime by containerizing a Node.js app and building a full GitHub Actions pipeline.',
    tags: ['Docker', 'GitHub Actions', 'NGINX'],
    problem: 'Downtime', solution: 'Docker+CI', result: '0 downtime'
  },
  {
    title: 'MERN Stack Dockerized Deployment',
    desc: 'Containerized a full MERN application using Docker Compose, orchestrating frontend, backend, and database.',
    tags: ['Docker', 'Compose', 'NGINX'],
    problem: '"Works local"', solution: 'Compose', result: 'Portable'
  },
  {
    title: 'Full CI/CD Pipeline — Test to Deploy',
    desc: 'End-to-end pipeline test — lint — Docker build — push to registry — SSH deploy with health check rollback.',
    tags: ['GitHub Actions', 'Docker', 'Linux'],
    problem: 'No pipeline', solution: 'Full CI/CD', result: 'Auto-ship'
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Docker', 'CI/CD', 'Linux', 'NGINX'];

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label">Work</span>
        <h2>Projects</h2>
        <div className={styles.filters}>
          {tags.map(t => (
            <button key={t} className={`${styles.fBtn} ${filter === t ? styles.active : ''}`} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        <div className={styles.grid}>
          {data.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.terminalPreview}>
                <p className="text-success">✓ docker build -t webapp ..</p>
                <p className="text-muted">→ Push to registry: latest</p>
                <p className="text-muted">→ nginx: reverse proxy</p>
                <p className="text-success">✓ Deploy — NGINX reverse proxy</p>
                <p className="text-success">✓ App live :80 — zero downtime</p>
              </div>
              <div className={styles.body}>
                <h3>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.stats}>
                  <div className={styles.stat}><span className={styles.label}>Problem</span><span className="text-success">{p.problem}</span></div>
                  <div className={styles.stat}><span className={styles.label}>Solution</span><span className="text-success">{p.solution}</span></div>
                  <div className={styles.stat}><span className={styles.label}>Result</span><span className="text-success">{p.result}</span></div>
                </div>
                <div className={styles.footer}>
                  <a href="https://github.com/Jems-FinOps" className={styles.ghLink}><FaGithub /> View on GitHub</a>
                  <span className={styles.liveBadge}>Live</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};