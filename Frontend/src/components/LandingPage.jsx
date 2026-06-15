import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const featureInterval = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  useEffect(() => {
    featureInterval.current = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(featureInterval.current);
  }, []);

  const navScrolled = scrollY > 40;
  const px = isMobile ? '20px' : '60px';

  const features = [
    { icon: '📝', title: 'Weekly Log Submission', desc: 'Students create structured weekly reports, save drafts, and submit when ready.', color: '#6366f1' },
    { icon: '🏢', title: 'Workplace Supervision', desc: 'Workplace supervisors review logs, leave detailed feedback, and track progress.', color: '#0ea5e9' },
    { icon: '🎓', title: 'Academic Oversight', desc: 'Academic supervisors give final approvals, ensuring university standards are met.', color: '#10b981' },
    { icon: '🔄', title: 'Enforced Workflow', desc: 'Logs follow Draft → Submitted → Reviewed → Approved pipeline.', color: '#f59e0b' },
    { icon: '🔔', title: 'Smart Notifications', desc: 'Real-time alerts keep students and supervisors informed at every stage.', color: '#ec4899' },
    { icon: '📊', title: 'Reports & Analytics', desc: 'Generate detailed performance reports and internship summaries with one click.', color: '#8b5cf6' },
  ];

  const workflow = [
    { step: '01', title: 'Student Submits', desc: 'Student writes and submits his weekly log entry for review.', icon: '✍️', color: '#6366f1' },
    { step: '02', title: 'Workplace Reviews', desc: 'Workplace supervisor reads, comments, and marks as reviewed.', icon: '👁️', color: '#0ea5e9' },
    { step: '03', title: 'Academic Approves', desc: 'Academic supervisor gives final approval, locking the log.', icon: '✅', color: '#10b981' },
    { step: '04', title: 'Admin Oversees', desc: 'Admin manages users, placements, and generates reports.', icon: '🛡️', color: '#f59e0b' },
  ];

  const testimonials = [
    { name: 'John Ssebulime', role: 'Student Intern', text: 'ILES made it so easy to track my internship progress. My supervisors could see my work instantly!', avatar: '👩🏾‍💻' },
    { name: 'Dr. Paul Okello', role: 'Academic Supervisor', text: 'I can now manage all my students\' logs in one place. The approval workflow is seamless.', avatar: '👨🏾‍🏫' },
    { name: 'Tumwine Robert', role: 'Workplace Supervisor', text: 'Reviewing logs and giving feedback has never been this straightforward. Highly recommended.', avatar: '👨🏾‍💼' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: '#ffffff', color: '#0f172a', overflowX: 'hidden' }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: navScrolled ? `14px ${px}` : `22px ${px}`,
        background: navScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: navScrolled ? 'blur(16px)' : 'none',
        borderBottom: navScrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        boxShadow: navScrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>📘</div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: navScrolled ? '#0f172a' : 'white' }}>ILES</span>
        </div>

        {/* Hide nav links on mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Features', 'How It Works', 'Testimonials'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} style={{ color: navScrolled ? '#475569' : 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>{item}</a>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {!user ? (
            <>
              <Link to="/login" style={{ color: navScrolled ? '#6366f1' : 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '8px 14px', borderRadius: '8px', border: navScrolled ? '1.5px solid #6366f1' : '1.5px solid rgba(255,255,255,0.5)' }}>Sign In</Link>
              {!isMobile && (
                <Link to="/register" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '9px 22px', borderRadius: '8px', boxShadow: '0 4px 14px rgba(99,102,241,0.45)' }}>Get Started Free</Link>
              )}
            </>
          ) : (
            <Link to="/dashboard" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '9px 22px', borderRadius: '8px' }}>Dashboard →</Link>
          )}
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 40%, #312e81 70%, #1e1b4b 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '120px 20px 60px' : '140px 60px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '100px', padding: '6px 18px', marginBottom: '32px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
            <span style={{ color: '#a5b4fc', fontSize: isMobile ? '11px' : '13px', fontWeight: '600' }}>University Internship Management Platform</span>
          </div>

          <h1 style={{ fontSize: isMobile ? '36px' : '72px', fontWeight: '900', color: 'white', lineHeight: '1.1', marginBottom: '24px', letterSpacing: isMobile ? '-1px' : '-2px' }}>
            Manage Internships<br />
            <span style={{ background: 'linear-gradient(90deg, #818cf8, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Like Never Before
            </span>
          </h1>

          <p style={{ fontSize: isMobile ? '15px' : '19px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '40px', maxWidth: '620px', margin: '0 auto 40px' }}>
            ILES connects students, workplace supervisors, and academic supervisors in one seamless platform — from weekly log submission to final approval.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={user ? '/dashboard' : '/register'} style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', padding: isMobile ? '13px 28px' : '16px 40px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: isMobile ? '14px' : '16px', boxShadow: '0 8px 32px rgba(99,102,241,0.5)' }}>
              {user ? 'Go to Dashboard' : 'Start for Free'} →
            </Link>
            <Link to="/login" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', padding: isMobile ? '13px 28px' : '16px 40px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '14px' : '16px' }}>
              Sign In
            </Link>
          </div>

          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: isMobile ? '20px' : '40px', flexWrap: 'wrap' }}>
            {[['🔒', 'Role-Based Access'], ['⚡', 'Real-Time Updates'], ['📱', 'Fully Responsive'], ['🌍', 'Web-Based']].map(([icon, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: '500' }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: `0 ${px}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '16px', padding: '30px 0' }}>
          {[
            { value: '4', label: 'User Roles', sub: 'Student, Supervisor, Admin' },
            { value: '4', label: 'Log Stages', sub: 'Draft → Approved' },
            { value: '100%', label: 'Web Based', sub: 'No installation needed' },
            { value: '∞', label: 'Weekly Logs', sub: 'Unlimited submissions' },
          ].map((s) => (
            <div key={s.label} style={{ padding: '20px', textAlign: 'center', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(15,23,42,0.06)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: '900', color: '#6366f1' }}>{s.value}</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', marginTop: '8px' }}>{s.label}</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div id="features" style={{ background: 'white', padding: isMobile ? '60px 20px' : '120px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Features</span>
            <h2 style={{ fontSize: isMobile ? '28px' : '48px', fontWeight: '900', color: '#0f172a', marginTop: '12px', marginBottom: '16px' }}>Everything in one place</h2>
            <p style={{ color: '#64748b', fontSize: isMobile ? '15px' : '18px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>Designed for universities, built for real internship workflows.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
            {features.map((f, i) => (
              <div key={i}
                onMouseEnter={() => { setActiveFeature(i); clearInterval(featureInterval.current); }}
                onMouseLeave={() => { featureInterval.current = setInterval(() => setActiveFeature(p => (p + 1) % features.length), 3000); }}
                style={{ borderRadius: '20px', padding: '28px', border: activeFeature === i ? `2px solid ${f.color}` : '2px solid #f1f5f9', background: activeFeature === i ? `${f.color}08` : 'white', transition: 'all 0.3s ease', boxShadow: activeFeature === i ? `0 16px 48px ${f.color}20` : '0 2px 8px rgba(0,0,0,0.04)', transform: activeFeature === i ? 'translateY(-4px)' : 'none' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${f.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px', border: `1px solid ${f.color}25` }}>{f.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div id="how-it-works" style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 50%, #0f0c29 100%)', padding: isMobile ? '60px 20px' : '120px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#818cf8', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Workflow</span>
            <h2 style={{ fontSize: isMobile ? '28px' : '48px', fontWeight: '900', color: 'white', marginTop: '12px', marginBottom: '16px' }}>How It Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? '15px' : '18px', maxWidth: '480px', margin: '0 auto' }}>A clear, enforced process from log creation to final approval.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '16px' }}>
            {workflow.map((w, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `linear-gradient(135deg, ${w.color}, ${w.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', boxShadow: `0 8px 24px ${w.color}50` }}>{w.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: '800', color: w.color, letterSpacing: '2px', marginBottom: '6px' }}>STEP {w.step}</div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{w.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div id="testimonials" style={{ background: '#f8fafc', padding: isMobile ? '60px 20px' : '120px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Testimonials</span>
            <h2 style={{ fontSize: isMobile ? '28px' : '48px', fontWeight: '900', color: '#0f172a', marginTop: '12px' }}>Loved by users</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: '16px' }}>★</span>)}
                </div>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.8', marginBottom: '20px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>{t.name}</div>
                    <div style={{ color: '#94a3b8', fontSize: '12px' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)', padding: isMobile ? '60px 20px' : '100px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '52px', fontWeight: '900', color: 'white', marginBottom: '16px' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: isMobile ? '15px' : '18px', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px', lineHeight: '1.7' }}>
            Join ILES and bring structure, transparency, and efficiency to your internship programme.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" style={{ background: 'white', color: '#6366f1', padding: isMobile ? '13px 28px' : '16px 40px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: isMobile ? '14px' : '16px' }}>Create Free Account</Link>
            <Link to="/login" style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', padding: isMobile ? '13px 28px' : '16px 40px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '14px' : '16px' }}>Sign In</Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0f172a', padding: isMobile ? '40px 20px' : '60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px', marginBottom: '40px' }}>
            <div style={{ maxWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>📘</div>
                <span style={{ fontSize: '18px', fontWeight: '800', color: 'white' }}>ILES</span>
              </div>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.7' }}>Internship Logbook & Evaluation System — built to streamline university internship management.</p>
            </div>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { title: 'Product', links: ['Features', 'How It Works'] },
                { title: 'Company', links: ['About', 'Contact'] },
                { title: 'Roles', links: ['Students', 'Supervisors', 'Admins'] },
              ].map(col => (
                <div key={col.title}>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '13px', marginBottom: '12px' }}>{col.title}</div>
                  {col.links.map(l => (
                    <div key={l} style={{ marginBottom: '8px' }}>
                      <a href="#" style={{ color: '#475569', textDecoration: 'none', fontSize: '13px' }}>{l}</a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#334155', fontSize: '13px', margin: 0 }}>© 2026 ILES. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacy', 'Terms', 'Cookies'].map(l => (
                <a key={l} href="#" style={{ color: '#334155', textDecoration: 'none', fontSize: '13px' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
