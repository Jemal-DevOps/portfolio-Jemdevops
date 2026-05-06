import { useState } from 'react';
import styles from './Blog.module.css';

const posts = [
  {
    id: 'docker-exit-code-1',
    title: 'Fixing "Container Exits with Code 1" in Docker',
    excerpt: 'How I debugged a missing ENV variable that broke my production deploy.',
    date: '2026-04-15',
    tags: ['docker', 'debugging', 'linux'],
    readTime: '4 min'
  },
  {
    id: 'nginx-502-gateway',
    title: 'Solving NGINX 502 Bad Gateway in Docker Compose',
    excerpt: 'Why hardcoding IPs fails in Docker networks and how to fix it.',
    date: '2026-03-28',
    tags: ['nginx', 'docker', 'networking'],
    readTime: '6 min'
  }
];

export const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const tags = ['all', ...new Set(posts.flatMap(p => p.tags))];
  
  const filtered = selectedTag === 'all' 
    ? posts 
    : posts.filter(p => p.tags.includes(selectedTag));

  return (
    <section id="blog" className="section">
      <div className="container">
        <span className="section-label">Knowledge Base</span>
        <h2>Troubleshooting Journal</h2>
        
        <div className={styles.filters}>
          {tags.map(tag => (
            <button 
              key={tag}
              className={`${styles.tagBtn} ${selectedTag === tag ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(post => (
            <article key={post.id} className={styles.card}>
              <div className={styles.meta}>
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
              <h3>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.tags}>
                {post.tags.map(t => <span key={t} className={styles.tag}>#{t}</span>)}
              </div>
              <a href={`#blog/${post.id}`} className={styles.readMore}>Read Case Study →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};