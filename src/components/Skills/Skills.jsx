import styles from './Skills.module.css';

const devops = [
  { name: 'Docker / Podman', val: 85 }, { name: 'Linux / Bash', val: 80 },
  { name: 'CI/CD - GitHub Actions', val: 78 }, { name: 'NGINX', val: 72 }, { name: 'Kubernetes (basic)', val: 50 }
];
const fullstack = [
  { name: 'React.js', val: 82 }, { name: 'Node.js / Express', val: 80 },
  { name: 'MongoDB', val: 75 }, { name: 'Git / GitHub', val: 88 }, { name: 'REST APIs', val: 78 }
];

export const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <span className="section-label">Technical Expertise</span>
      <h2>Skills</h2>
      <div className={styles.grid}>
        <div className={styles.col}>
          <h3>DevOps & Infrastructure</h3>
          {devops.map(s => <SkillBar key={s.name} {...s} />)}
        </div>
        <div className={styles.col}>
          <h3>Full Stack Development</h3>
          {fullstack.map(s => <SkillBar key={s.name} {...s} />)}
        </div>
      </div>
      <div className={styles.tags}>
        {['Docker', 'Podman', 'Kubernetes', 'GitHub Actions', 'NGINX', 'Linux', 'Bash', 'React', 'Node.js', 'MongoDB', 'Git', 'REST API', 'Express.js', 'Netlify', 'GitHub Pages'].map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  </section>
);

const SkillBar = ({ name, val }) => (
  <div className={styles.barGroup}>
    <div className={styles.label}><span>{name}</span><span>{val}%</span></div>
    <div className={styles.track}><div className={styles.fill} style={{width: `${val}%`}}></div></div>
  </div>
);