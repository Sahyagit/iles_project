import { describe, it, expect } from 'vitest';
import { getDashboardPath } from '../context/AuthContext';
import { getStatusStyle, getStatusText } from '../components/Student/WeeklyLogList';

describe('AuthContext utility', () => {
  it('returns correct dashboard path for student role', () => {
    expect(getDashboardPath('student')).toBe('/student/dashboard');
  });

  it('returns correct dashboard path for workplace supervisor role', () => {
    expect(getDashboardPath('work_supervisor')).toBe('/supervisor/dashboard');
  });

  it('returns correct dashboard path for academic supervisor role', () => {
    expect(getDashboardPath('university_supervisor')).toBe('/supervisor/dashboard');
  });

  it('returns correct dashboard path for admin role', () => {
    expect(getDashboardPath('admin')).toBe('/admin/dashboard');
  });

  it('returns fallback path for unknown role', () => {
    expect(getDashboardPath('unknown')).toBe('/');
  });
});

describe('WeeklyLogList helper functions', () => {
  it('provides draft status text and style', () => {
    expect(getStatusText('draft')).toBe('Draft');
    expect(getStatusStyle('draft').color).toBe('#334155');
  });

  it('provides submitted status text and style', () => {
    expect(getStatusText('submitted')).toBe('Submitted');
    expect(getStatusStyle('submitted').color).toBe('#92400e');
  });

  it('provides reviewed status text and style', () => {
    expect(getStatusText('reviewed')).toBe('Reviewed');
    expect(getStatusStyle('reviewed').backgroundColor).toBe('#dbeafe');
  });

  it('provides approved status text and style', () => {
    expect(getStatusText('approved')).toBe('Approved ✓');
    expect(getStatusStyle('approved').backgroundColor).toBe('#dcfce7');
  });
});
