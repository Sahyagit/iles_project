import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>

      {/* Navigation Bar */}
      <div style={{ backgroundColor: '#2c3e50', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: 'white', margin: 0 }}>ILES</h2>
        <div>
          {user ? (
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', backgroundColor: '#27ae60', padding: '8px 16px', borderRadius: '4px' }}>
              Dashboard
            </Link>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none', padding: '8px 16px', border: '1px solid white', borderRadius: '4px' }}>
                Login
              </Link>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none', backgroundColor: '#27ae60', padding: '8px 16px', borderRadius: '4px' }}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#3498db', padding: '60px 30px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>
          Internship Logbook & Evaluation System
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          A system that helps students submit weekly internship logs and allows supervisors to review and approve them.
        </p>
        {!user ? (
          <Link to="/register" style={{ backgroundColor: '#e74c3c', color: 'white', padding: '12px 30px', textDecoration: 'none', borderRadius: '4px', fontSize: '16px' }}>
            Get Started
          </Link>
        ) : (
          <Link to="/dashboard" style={{ backgroundColor: '#e74c3c', color: 'white', padding: '12px 30px', textDecoration: 'none', borderRadius: '4px', fontSize: '16px' }}>
            Go to Dashboard
          </Link>
        )}
      </div>

      {/* About Section */}
      <div style={{ padding: '50px 30px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>About the System</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '16px', color: '#555', lineHeight: '1.8' }}>
          ILES is a web-based system developed to manage internship student evaluations.
          Students can submit weekly logs, workplace supervisors can review them, and
          academic supervisors give final approval. Administrators manage users and placements.
        </p>
      </div>

      {/* Features Section */}
      <div style={{ padding: '50px 30px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>System Features</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>

          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '25px', width: '220px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📝</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Weekly Logs</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Students submit weekly reports about their internship activities.</p>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '25px', width: '220px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>👨‍💼</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Supervision</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Supervisors review logs and provide feedback to students.</p>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '25px', width: '220px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>✅</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Approval</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Academic supervisors give final approval on reviewed logs.</p>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '25px', width: '220px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔒</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Role Based Access</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Each user only sees what is relevant to their role.</p>
          </div>

        </div>
      </div>

      {/* How it Works */}
      <div style={{ padding: '50px 30px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>How It Works</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px', gap: '15px' }}>
            <div style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>1</div>
            <div>
              <h4 style={{ margin: '0 0 5px', color: '#2c3e50' }}>Student Registers and Logs In</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>The student creates an account and logs in to access their dashboard.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px', gap: '15px' }}>
            <div style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>2</div>
            <div>
              <h4 style={{ margin: '0 0 5px', color: '#2c3e50' }}>Student Submits Weekly Log</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Each week the student writes and submits a log about their internship work.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px', gap: '15px' }}>
            <div style={{ backgroundColor: '#3498db', color: 'white', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>3</div>
            <div>
              <h4 style={{ margin: '0 0 5px', color: '#2c3e50' }}>Workplace Supervisor Reviews</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>The workplace supervisor reads the log and adds feedback.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <div style={{ backgroundColor: '#27ae60', color: 'white', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>4</div>
            <div>
              <h4 style={{ margin: '0 0 5px', color: '#2c3e50' }}>Academic Supervisor Approves</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>The academic supervisor gives final approval and the log is locked.</p>
            </div>
          </div>

        </div>
      </div>

      {/* User Roles */}
      <div style={{ padding: '50px 30px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>User Roles</h2>
        <table style={{ width: '100%', maxWidth: '700px', margin: '0 auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Role</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Responsibilities</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Student</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Submit and manage weekly internship logs</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Workplace Supervisor</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Review logs and provide feedback</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Academic Supervisor</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Give final approval on reviewed logs</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Administrator</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Manage users and internship placements</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#2c3e50', color: 'white', textAlign: 'center', padding: '20px' }}>
        <p style={{ margin: 0 }}>© 2026 Internship Logbook and Evaluation System. All rights reserved.</p>
      </div>

    </div>
  );
};

export default LandingPage;
