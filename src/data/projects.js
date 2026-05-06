export const projects = [
  {
    title: 'Dockerized Web App Deployment with CI/CD',
    problem: 'Manual deployment caused 15% downtime & version drift',
    solution: 'Built multi-stage Dockerfile + GitHub Actions pipeline with auto-revert',
    proof: '98% uptime, 4x faster deploys, zero manual intervention',
    tech: ['docker', 'ci/cd', 'nginx', 'linux'],
    screenshot: 'https://placehold.co/600x400/1e293b/10b981?text=Pipeline+Logs',
    github: '#'
  },
  {
    title: 'Linux Server Hardening & Monitoring',
    problem: 'Unsecured EC2 instance exposed to brute-force & high CPU',
    solution: 'UFW, fail2ban, SSH key-only, Prometheus node_exporter',
    proof: 'Blocked 12k+ attempts, CPU dropped 40%, 99.9% availability',
    tech: ['linux', 'bash', 'monitoring'],
    screenshot: 'https://placehold.co/600x400/0f172a/3b82f6?text=Terminal+Logs',
    github: '#'
  },
  {
    title: 'MERN App with Automated Testing Pipeline',
    problem: 'Bugs slipping to production, no rollback strategy',
    solution: 'Jest + Cypress in PR checks, auto-deploy on main merge',
    proof: 'Zero prod bugs in 3 months, 85% test coverage',
    tech: ['react', 'node', 'ci/cd', 'docker'],
    screenshot: 'https://placehold.co/600x400/1e293b/f59e0b?text=Test+Coverage',
    github: '#'
  }
];