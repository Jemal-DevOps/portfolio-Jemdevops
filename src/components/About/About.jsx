import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

export const About = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="about">
      <div className="container about-grid">
        <div className={`about-text fade-left ${isInView ? 'visible' : ''}`}>
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">My Engineering Journey</h2>
          <div className="section-line"></div>
          <p>I started as a <strong>MERN Full Stack Developer</strong>, building APIs and dynamic UIs. While debugging deployment bottlenecks, I discovered a passion for infrastructure and automation.</p>
          <p>Today, I bridge development and operations. I automate repetitive tasks, optimize pipelines, and ensure systems are resilient. My approach combines hands-on engineering with a strong problem-solving mindset.</p>
          <div className={styles.journey}>
            <div className={styles.step}>
              <div className="step-icon blue">💻</div>
              <div className={styles.stepText}><strong>MERN Development</strong><span> React, Node.js, Express, MongoDB</span></div>
            </div>
            <div className={styles.step}>
              <div className="step-icon green">🐧</div>
              <div className={styles.stepText}><strong>Linux & Networking</strong><span> Ubuntu, CentOS, SSH, UFW, Bash</span></div>
            </div>
            <div className={styles.step}>
              <div className="step-icon purple">🐳</div>
              <div className={styles.stepText}><strong>DevOps & CI/CD</strong><span> Docker, GitHub Actions, NGINX</span></div>
            </div>
          </div>
        </div>
        <div className={`fade-right ${isInView ? 'visible' : ''}`}>
          <div className="soft-skills">
            {['Problem Solving','Debugging','Automation','Documentation','Version Control','System Monitoring'].map(s => (
              <div key={s} className={styles.pill}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};