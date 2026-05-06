// src/components/Hero/Hero.jsx
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = styles.particle;
      const sz = Math.random() * 4 + 2;
      p.style.cssText = `
        width:${sz}px; height:${sz}px;
        left:${Math.random() * 100}%;
        background:${Math.random() > 0.5 ? '#00d4ff' : '#7c3aed'};
        animation-duration:${Math.random() * 12 + 8}s;
        animation-delay:${Math.random() * 8}s
      `;
      container.appendChild(p);
    }
  }, []);
  return <div ref={ref} className={styles.particles} aria-hidden="true" />;
}

// ✅ Changed to named export for consistency
export function Hero() {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Optional: show toast notification
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className={styles.hero} id="home">
      <Particles />
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.statusDot} />
            Open to work — Jan 2026
          </div>
          <h1 className={styles.name}>
            Jemal<br />
            <span className={styles.nameGrad}>Adem</span>
          </h1>
          <p className={styles.title}>Junior DevOps & Full Stack Engineer</p>
          <p className={styles.tagline}>
            Automating deployments, solving real problems, and building CI/CD
            pipelines — one container at a time.
          </p>
           <div className={styles.btnGroup}>
  <a href="/resume.pdf" download="JemalAdem_Resume.pdf" className={styles.btnPrimary}>
    📄 Download Resume
  </a>
  <a href="#projects" className={styles.btnSecondary}>View Projects</a>
  <a href="#contact" className={styles.btnOutline}>Contact Me</a>
</div>
        </div>

        <div className={styles.right}>
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
              <span className={styles.termTitle}>jemal@devops ~ bash</span>
            </div>
            {[
                
              { prompt: true, cmd: 'docker build -t myapp .' },
              { out: 'Step 1/6: FROM node:18-alpine' },
              { out: 'Step 3/6: COPY . .' },
              { out: 'Step 6/6: CMD ["node","server.js"]' },
              { success: '✓ Successfully built a3f8c12d' },
              { prompt: true, cmd: 'docker compose up -d' },
              { success: '✓ Container started on :3000' },
              { prompt: true, cmd: 'git push origin main' },
              { out: '→ Triggering GitHub Actions...' },
              { success: '✓ Pipeline passed · deployed' },
            ].map((line, i) => (
              <div key={i} className={styles.tLine}>
                {line.prompt && <span className={styles.tPrompt}>$ </span>}
                {line.cmd && <span className={styles.tCmd}>{line.cmd}</span>}
                {line.out && <span className={styles.tOut}>{line.out}</span>}
                {line.success && <span className={styles.tSuccess}>{line.success}</span>}
                {line.cmd && (
  <>
    <span className={styles.tCmd}>{line.cmd}</span>
    <button 
      className={styles.copyBtn}
      onClick={() => copyToClipboard(line.cmd)}
      aria-label="Copy command"
    >
      📋
    </button>
    <div className={styles.navHint}>
  Press <kbd>↑</kbd> <kbd>↓</kbd> to navigate sections
</div>
  </>
)}
              </div>
              
            ))}
            <div className={styles.tLine}>
              <span className={styles.tPrompt}>$ </span>
              <span className={styles.cursor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}