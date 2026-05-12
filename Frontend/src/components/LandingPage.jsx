import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './landing.css';

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div>

      {/* Navigation Bar */}
      <div className="navbar">
        <h2>ILES</h2>
        <div className="nav-links">
          {user ? (
            <Link to="/dashboard" className="btn btn-green">Dashboard</Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-green">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Internship Logbook & Evaluation System</h1>
        <p>
          A system that helps students submit weekly internship logs and allows
          supervisors to review and approve them.
        </p>
        {!user ? (
          <Link to="/register" className="btn btn-red">Get Started</Link>
        ) : (
          <Link to="/dashboard" className="btn btn-red">Go to Dashboard</Link>
        )}
      </div>

      {/* About Section */}
      <div className="section" style={{ backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2>About the System</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '16px', color: '#555', lineHeight: '1.8' }}>
          ILES is a web-based system developed to manage internship student evaluations.
          Students can submit weekly logs, workplace supervisors can review them, and
          academic supervisors give final approval. Administrators manage users and placements.
        </p>
      </div>

      {/* Features Section */}
      <div className="section" style={{ backgroundColor: 'white' }}>
        <h2>System Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📝</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Weekly Logs</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Students submit weekly reports about their internship activities.</p>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>👨💼</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Supervision</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Supervisors review logs and provide feedback to students.</p>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>✅</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Approval</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Academic supervisors give final approval on reviewed logs.</p>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔒</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Role Based Access</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Each user only sees what is relevant to their role.</p>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <h2>How It Works</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {[
            { num: 1, color: '#3498db', title: 'Student Registers and Logs In', desc: 'The student creates an account and logs in to access their dashboard.' },
            { num: 2, color: '#3498db', title: 'Student Submits Weekly Log', desc: 'Each week the student writes and submits a log about their internship work.' },
            { num: 3, color: '#3498db', title: 'Workplace Supervisor Reviews', desc: 'The workplace supervisor reads the log and adds feedback.' },
            { num: 4, color: '#27ae60', title: 'Academic Supervisor Approves', desc: 'The academic supervisor gives final approval and the log is locked.' },
          ].map(step => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px', gap: '15px' }}>
              <div style={{ backgroundColor: step.color, color: 'white', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>
                {step.num}
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', color: '#2c3e50' }}>{step.title}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Roles */}
      <div className="section" style={{ backgroundColor: 'white' }}>
        <h2>User Roles</h2>
        <div className="table-wrapper">
          <table className="roles-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Responsibilities</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Student</strong></td><td>Submit and manage weekly internship logs</td></tr>
              <tr><td><strong>Workplace Supervisor</strong></td><td>Review logs and provide feedback</td></tr>
              <tr><td><strong>Academic Supervisor</strong></td><td>Give final approval on reviewed logs</td></tr>
              <tr><td><strong>Administrator</strong></td><td>Manage users and internship placements</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2026 Internship Logbook and Evaluation System. All rights reserved.</p>
      </div>

    </div>
  );
};

export default LandingPage;
