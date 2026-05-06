import { useState } from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaDollarSign, FaWhatsapp  } from 'react-icons/fa';

// ✅ Move endpoint outside component (prevents re-creation on every render)
const FORM_ENDPOINT = 'https://formspree.io/f/xnjwvodr';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  // Helper to determine if form is disabled
  const isDisabled = status === 'sending' || status === 'success';

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Info & Social Links */}
          <div className={styles.info}>
            <span className="section-label">Let's Connect</span>
            <h2>Hire Me</h2>
            <h3>Open to freelance & full-time roles</h3>
            <p className={styles.desc}>
              I'm actively looking for DevOps, full stack, or automation engineering roles. 
              Let's talk about how I can contribute to your team or project.
            </p>
            
            <div className={styles.socials}>
              <a 
                href="https://github.com/Jems-FinOps" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FaGithub /> 
                <div>
                  <strong>GitHub</strong><br/>
                  <span className="text-muted">github.com/Jems-FinOps</span>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jemal-adem" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FaLinkedin /> 
                <div>
                  <strong>LinkedIn</strong><br/>
                  <span className="text-muted">linkedin.com/in/jemal-adem</span>
                </div>
              </a>
              
              <a 
                href="https://www.upwork.com/freelancers/~01377f6d9d19c77222" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FaDollarSign /> 
                <div>
                  <strong>Upwork</strong><br/>
                  <span className="text-muted">Available for contracts</span>
                </div>
              </a>
              
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FaWhatsapp />
                <div>
                  <strong>Whatsapp</strong><br/>
                  <span className="text-muted">+251 911007840</span>
                </div>
              </a> 
            </div>
          </div>
          
          {/* Right: Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
                disabled={isDisabled}
                autoComplete="name"
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="your@email.com" 
                required 
                value={formData.email}
                onChange={handleChange}
                disabled={isDisabled}
                autoComplete="email"
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows="5" 
                placeholder="Tell me about your project or role..." 
                required 
                value={formData.message}
                onChange={handleChange}
                disabled={isDisabled}
              />
            </div>
            
            {/* Status Messages */}
            {status === 'success' && (
              <p className={styles.successMsg}>✓ Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>✗ Something went wrong. Please try again or email me directly.</p>
            )}
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className={`btn-primary ${status === 'sending' ? styles.loading : ''}`} 
              disabled={isDisabled}
              style={{ width: '100%', marginTop: '8px' }}
            >
              {status === 'sending' ? 'Sending...' : 
               status === 'success' ? 'Message Sent! ✓' : 
               'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};