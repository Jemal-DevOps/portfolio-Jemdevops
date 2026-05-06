import styles from './CaseStudies.module.css';

const cases = [
  {
    title: 'Docker container exits immediately with code 1',
    id: 'CASE #001',
    symptom: 'exit code 1', diagnosis: 'docker logs', fix: 'ENV var missing',
    code: `$ docker run myapp -- env\nError: Cannot read ENV "MONGO_URI" - undefined\n-> Added --env-file .env to run command\n✓ Container running. Connected to MongoDB.`
  },
  {
    title: 'NGINX 502 Bad Gateway after Docker deploy',
    id: 'CASE #002',
    symptom: '502 Gateway', diagnosis: 'proxy_pass IP', fix: 'Service name',
    code: `proxy_pass http://127.0.0.1:5000; -> wrong in docker network\n$ docker network inspect bridge\nContainer IP change on restart -> cannot hardcode\n-> Changed to proxy_pass http://backend:5000;\n✓ NGINX resolves service name via Docker DNS`
  },
  {
    title: 'GitHub Actions pipeline failing on build step',
    id: 'CASE #003',
    symptom: 'Build fails', diagnosis: 'Secrets missing', fix: 'Repo secrets',
    code: `Error: DOCKER_USERNAME not set in environment\n-> Checked workflow env: \${{ secrets.DOCKER_USERNAME }}\nDeploy referenced but not added to GitHub repo settings\n-> Added secret under Settings -> Secrets -> Actions\n✓ Pipeline: lint ✓ test ✓ build ✓ push ✓ deploy ✓`
  }
];

export const CaseStudies = () => (
  <section id="cases" className="section" style={{background:'var(--bg-card)'}}>
    <div className="container">
      <span className="section-label">Troubleshooting</span>
      <h2>Problems Solved</h2>
      <div className={styles.grid}>
        {cases.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <h3>{c.title}</h3>
              <span className={styles.badge}>{c.id}</span>
            </div>
            <div className={styles.flow}>
              <div className={styles.step}><span className={styles.stepLabel}>Symptom</span><span className="text-success">{c.symptom}</span></div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}><span className={styles.stepLabel}>Diagnosis</span><span className="text-success">{c.diagnosis}</span></div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}><span className={styles.stepLabel}>Fix</span><span className="text-success">{c.fix}</span></div>
            </div>
            <div className={styles.codeBlock}>
              {c.code.split('\n').map((line, idx) => (
                <p key={idx} className={line.startsWith('✓') ? 'text-success' : line.startsWith('$') || line.startsWith('->') ? 'text-muted' : ''}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);