import { useState, useRef } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ALL_MODULES } from '../../data/modulesData';
import { useToast } from '../../context/ToastContext';

interface ErpDashboardPageProps {
  onNavigateModule: (id: number) => void;
}

type TabType = 'dashboard' | 'profile' | 'modules' | 'calendar' | 'reports' | 'settings';

export function ErpDashboardPage({ onNavigateModule }: ErpDashboardPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const { showToast } = useToast();

  // Profile Form State
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [dob, setDob] = useState('15/06/1990');
  const [gender, setGender] = useState('Prefer not to say');
  const [nationality, setNationality] = useState('Indian');
  const [aboutMe, setAboutMe] = useState(
    'Experienced ERP consultant with 8+ years in digital transformation. Passionate about building scalable systems.',
  );
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Modules Filter State
  const [moduleSearch, setModuleSearch] = useState('');
  const [moduleFilter, setModuleFilter] = useState('all');

  // Settings State
  const [language, setLanguage] = useState('English (US)');
  const [timezone, setTimezone] = useState('UTC +5:30');
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('Light');

  // Quick Modules (First 8 modules)
  const quickModules = ALL_MODULES.slice(0, 8);

  // Filtered All Modules
  const filteredModules = ALL_MODULES.filter((m) => {
    const matchesCategory = moduleFilter === 'all' || m.category === moduleFilter;
    const matchesSearch =
      moduleSearch.trim() === '' ||
      m.name.toLowerCase().includes(moduleSearch.trim().toLowerCase()) ||
      m.category.toLowerCase().includes(moduleSearch.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Photo Upload Handler
  function handlePhotoUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('Image file must be less than 5 MB.', 'error');
        return;
      }
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      showToast('Profile photo updated successfully!', 'success');
    }
  }

  // Profile Form Submit Handler
  function handleProfileSave(e: FormEvent) {
    e.preventDefault();
    showToast('Personal details saved successfully.', 'success');
  }

  function handleProfileReset() {
    setFirstName('John');
    setLastName('Doe');
    setDob('15/06/1990');
    setGender('Prefer not to say');
    setNationality('Indian');
    setAboutMe(
      'Experienced ERP consultant with 8+ years in digital transformation. Passionate about building scalable systems.',
    );
    showToast('Form reset to default values.', 'info');
  }

  function handleSaveSettings() {
    showToast('Settings saved successfully.', 'success');
  }

  function handleResetSettings() {
    setLanguage('English (US)');
    setTimezone('UTC +5:30');
    setNotifications(true);
    setTheme('Light');
    showToast('Settings reset to defaults.', 'info');
  }

  return (
    <div>
      {/* ===== SUB-TAB NAVIGATION ===== */}
      <div className="tab-nav">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <i className="fas fa-th-large" /> Dashboard
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <i className="fas fa-user" /> Profile
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          <i className="fas fa-calendar-alt" /> Calendar
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <i className="fas fa-chart-pie" /> Reports
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <i className="fas fa-cog" /> Settings
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          <i className="fas fa-cubes" /> All Modules
        </button>
      </div>

      {/* ============================================================ */}
      {/* TAB: DASHBOARD */}
      {/* ============================================================ */}
      <div className={`tab-content ${activeTab === 'dashboard' ? 'active' : ''}`}>
        {/* Stats Row */}
        <div className="stats">
          <div className="card">
            <div className="label">
              <i className="fas fa-cubes" /> Modules
            </div>
            <div className="value">46</div>
            <div className="sub">
              <span className="up">
                <i className="fas fa-arrow-up" /> +2
              </span>
            </div>
          </div>
          <div className="card">
            <div className="label">
              <i className="fas fa-users" /> Active Users
            </div>
            <div className="value">1,284</div>
            <div className="sub">
              <span className="up">
                <i className="fas fa-arrow-up" /> +12%
              </span>
            </div>
          </div>
          <div className="card">
            <div className="label">
              <i className="fas fa-tasks" /> Tasks
            </div>
            <div className="value">347</div>
            <div className="sub">
              <span className="up">89 done</span>
            </div>
          </div>
          <div className="card">
            <div className="label">
              <i className="fas fa-calendar-check" /> Meetings
            </div>
            <div className="value">18</div>
            <div className="sub">
              <span className="down">
                <i className="fas fa-arrow-down" /> 3 today
              </span>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="fas fa-rocket" style={{ color: '#2563eb', marginRight: 8 }} /> Quick Access
            </h3>
          </div>
          <div className="modules-grid">
            {quickModules.map((m) => (
              <div key={m.id} className="module-card" onClick={() => onNavigateModule(m.id)}>
                <div className="icon">
                  <i className={`fas ${m.icon}`} />
                </div>
                <div className="info">
                  <div className="name">{m.name}</div>
                  <div className="desc">{m.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="far fa-clock" style={{ color: '#2563eb', marginRight: 8 }} /> Recent Activity
            </h3>
            <span className="text-muted" style={{ fontSize: 13 }}>
              Last 7 days
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="flex-between flex-center" style={{ padding: '8px 0', borderBottom: '1px solid #f0f4fe' }}>
              <span>
                <i className="fas fa-check-circle" style={{ color: '#16a34a', marginRight: 8 }} /> Module "CRM" updated
              </span>
              <span className="text-muted" style={{ fontSize: 13 }}>
                2h ago
              </span>
            </div>
            <div className="flex-between flex-center" style={{ padding: '8px 0', borderBottom: '1px solid #f0f4fe' }}>
              <span>
                <i className="fas fa-user-plus" style={{ color: '#2563eb', marginRight: 8 }} /> New user onboarded
              </span>
              <span className="text-muted" style={{ fontSize: 13 }}>
                4h ago
              </span>
            </div>
            <div className="flex-between flex-center" style={{ padding: '8px 0' }}>
              <span>
                <i className="fas fa-file-invoice" style={{ color: '#f59e0b', marginRight: 8 }} /> Report #045 generated
              </span>
              <span className="text-muted" style={{ fontSize: 13 }}>
                6h ago
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB: PROFILE (Personal Details) */}
      {/* ============================================================ */}
      <div className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}>
        <div className="profile-card">
          <h2>Personal Details</h2>
          <p className="subhead">Your identity information.</p>

          <form onSubmit={handleProfileSave}>
            {/* Photo Section */}
            <div className="photo-section">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
              />
              <div
                className="avatar"
                title="Click to upload photo"
                onClick={() => fileInputRef.current?.click()}
              >
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt="Profile Avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <i className="fas fa-camera" />
                )}
              </div>
              <div className="photo-info">
                <strong>Profile Photo</strong>
                Click the camera icon to upload
                <br />
                <small>JPG, PNG or WebP · max 5 MB</small>
              </div>
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>
              <div className="form-row">
                <div>
                  <label style={{ fontSize: 12, fontWeight: 400, color: '#6b7a8f' }}>
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 400, color: '#6b7a8f' }}>
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="form-row">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Prefer not to say</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Indian, British, American"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>

            {/* About Me */}
            <div className="form-group">
              <label>About Me</label>
              <textarea
                className="form-control"
                maxLength={500}
                placeholder="Write a short professional summary about yourself..."
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
              />
              <div className="char-count">{aboutMe.length}/500 characters</div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-save">
                <i className="fas fa-save" /> Save Personal Details
              </button>
              <button type="button" className="btn-secondary" onClick={handleProfileReset}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB: ALL MODULES */}
      {/* ============================================================ */}
      <div className={`tab-content ${activeTab === 'modules' ? 'active' : ''}`}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search modules..."
            value={moduleSearch}
            onChange={(e) => setModuleSearch(e.target.value)}
          />
          <div className="filter-btns">
            {['all', 'core', 'sales', 'people', 'tech', 'legal'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={moduleFilter === cat ? 'active' : ''}
                onClick={() => setModuleFilter(cat)}
                style={{ textTransform: 'capitalize' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="modules-grid">
          {filteredModules.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 0', color: '#6b7a8f' }}>
              <i
                className="fas fa-inbox"
                style={{ fontSize: 28, display: 'block', marginBottom: 10, color: '#c0cad9' }}
              />
              No modules found.
            </div>
          ) : (
            filteredModules.map((m) => (
              <div key={m.id} className="module-card" onClick={() => onNavigateModule(m.id)}>
                <div className="icon">
                  <i className={`fas ${m.icon}`} />
                </div>
                <div className="info">
                  <div className="name">{m.name}</div>
                  <div className="desc">{m.category}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB: CALENDAR */}
      {/* ============================================================ */}
      <div className={`tab-content ${activeTab === 'calendar' ? 'active' : ''}`}>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="fas fa-calendar-alt" style={{ color: '#2563eb', marginRight: 10 }} /> Calendar · Schedule
            </h3>
            <span className="tag-blue">Action Plan</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Today
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-circle" style={{ color: '#2563eb', fontSize: 10, marginRight: 6 }} /> 3 appointments
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                This Week
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-calendar-week" style={{ color: '#2563eb', marginRight: 6 }} /> 12 meetings
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Upcoming
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-clock" style={{ color: '#2563eb', marginRight: 6 }} /> Board review · Aug 26
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Action Plan
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-list-check" style={{ color: '#2563eb', marginRight: 6 }} /> 5 items pending
              </div>
            </div>
          </div>
          <div style={{ padding: 16, background: '#f8faff', borderRadius: 10, border: '1px solid #e9edf4' }}>
            <span style={{ fontWeight: 600, color: '#0b1a33' }}>📅 Appointments</span>
            <ul style={{ marginTop: 10, listStyle: 'none', fontSize: 14, color: '#0b1a33' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #e9edf4' }}>
                • 10:00 AM · Strategy sync with Marketing
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #e9edf4' }}>
                • 02:00 PM · Demo for Geniuspie
              </li>
              <li style={{ padding: '8px 0' }}>• 04:30 PM · Legal review · M&A</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB: REPORTS */}
      {/* ============================================================ */}
      <div className={`tab-content ${activeTab === 'reports' ? 'active' : ''}`}>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="fas fa-chart-pie" style={{ color: '#2563eb', marginRight: 10 }} /> Reports & Analytics
            </h3>
            <span className="tag-blue">AD · Insights</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Revenue
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-arrow-up" style={{ color: '#16a34a', marginRight: 6 }} /> $2.4M · +18%
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Market
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-globe" style={{ color: '#2563eb', marginRight: 6 }} /> 12 regions
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Product
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-cube" style={{ color: '#2563eb', marginRight: 6 }} /> 46 modules
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Customer
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <i className="fas fa-users" style={{ color: '#2563eb', marginRight: 6 }} /> 1,284 active
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => showToast('Exporting PDF report...', 'info')}
            >
              <i className="fas fa-file-pdf" /> Export PDF
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => showToast('Exporting Excel report...', 'info')}
            >
              <i className="fas fa-file-excel" /> Export Excel
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="fas fa-chart-line" /> View Full Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB: SETTINGS */}
      {/* ============================================================ */}
      <div className={`tab-content ${activeTab === 'settings' ? 'active' : ''}`}>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="fas fa-cog" style={{ color: '#2563eb', marginRight: 10 }} /> Settings
            </h3>
            <span className="tag-blue">Preferences</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Language
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  style={{
                    border: '1px solid #dce2ec',
                    borderRadius: 6,
                    padding: '4px 8px',
                    fontSize: 13,
                    background: '#fff',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Timezone
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  style={{
                    border: '1px solid #dce2ec',
                    borderRadius: 6,
                    padding: '4px 8px',
                    fontSize: 13,
                    background: '#fff',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option>UTC +5:30</option>
                  <option>UTC +0:00</option>
                  <option>UTC -5:00 (EST)</option>
                  <option>UTC -8:00 (PST)</option>
                </select>
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Notifications
              </div>
              <div
                style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4, cursor: 'pointer' }}
                onClick={() => setNotifications(!notifications)}
              >
                <i
                  className={`fas ${notifications ? 'fa-bell' : 'fa-bell-slash'}`}
                  style={{ color: notifications ? '#2563eb' : '#8e9bb5', marginRight: 6 }}
                />{' '}
                {notifications ? 'Enabled' : 'Disabled'}
              </div>
            </div>
            <div style={{ background: '#f8faff', borderRadius: 10, padding: '14px 16px', border: '1px solid #e9edf4' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>
                Theme
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#0b1a33', marginTop: 4 }}>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  style={{
                    border: '1px solid #dce2ec',
                    borderRadius: 6,
                    padding: '4px 8px',
                    fontSize: 13,
                    background: '#fff',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option>Light</option>
                  <option>Dark System</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="button" className="btn-save" onClick={handleSaveSettings}>
              <i className="fas fa-save" /> Save Settings
            </button>
            <button type="button" className="btn-secondary" onClick={handleResetSettings}>
              Reset Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
