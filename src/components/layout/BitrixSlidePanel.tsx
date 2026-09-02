import { useState } from 'react';
import type { PanelState, PanelTabType } from '../../types/panel';
import { ALL_MODULES } from '../../data/modulesData';

interface BitrixSlidePanelProps {
  panelState: PanelState;
  onClose: () => void;
  onSelectTab: (tab: PanelTabType, agent?: string) => void;
  onNavigateModule: (id: number) => void;
}

interface ChatMessage {
  id: number;
  sender: string;
  avatar: string;
  text: string;
  time: string;
  isMe?: boolean;
}

interface NoteItem {
  id: number;
  title: string;
  content: string;
  date: string;
  color: string;
}

interface TaskItem {
  id: number;
  title: string;
  due: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
}

export function BitrixSlidePanel({
  panelState,
  onClose,
  onSelectTab,
  onNavigateModule,
}: BitrixSlidePanelProps) {
  const { isOpen, activeTab, selectedAgent } = panelState;

  const [searchFilter, setSearchFilter] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>({
    'chat-support': [
      {
        id: 1,
        sender: 'AI Support Assistant',
        avatar: '🤖',
        text: 'Hi Labeeb! How can I assist you with Curemaso ERP today?',
        time: '11:42 AM',
      },
      {
        id: 2,
        sender: 'Support Lead',
        avatar: '👩‍💼',
        text: 'We noticed you were configuring the CRM pipeline. Need help connecting webhooks?',
        time: '11:45 AM',
      },
    ],
    'chat-general': [
      {
        id: 1,
        sender: 'Sarah Jenkins',
        avatar: '👩',
        text: 'Good morning team! The Q3 sales demo starts at 2:00 PM.',
        time: '9:15 AM',
      },
      {
        id: 2,
        sender: 'Alex Rivera',
        avatar: '👨',
        text: 'Awesome, presentation slides are updated in the cloud.',
        time: '9:20 AM',
      },
    ],
    'chat-task': [
      {
        id: 1,
        sender: 'Task Bot',
        avatar: '⚡',
        text: 'Task #108 "Audit Compliance Data" has been marked in-review.',
        time: '10:00 AM',
      },
    ],
  });

  const [notificationsList, setNotificationsList] = useState([
    {
      id: 1,
      title: 'New Lead Generated',
      desc: 'Acme Corp accepted the proposal draft for $24,000.',
      time: '10m ago',
      icon: 'fa-user-check',
      unread: true,
    },
    {
      id: 2,
      title: 'System Health Optimal',
      desc: 'Automated nightly backup completed without warnings.',
      time: '1h ago',
      icon: 'fa-shield-alt',
      unread: true,
    },
    {
      id: 3,
      title: 'Meeting in 30 Mins',
      desc: 'Sync with Field Force executive regarding regional distribution.',
      time: '2h ago',
      icon: 'fa-calendar-check',
      unread: false,
    },
    {
      id: 4,
      title: 'AI Tele Caller Batch Done',
      desc: 'Processed 150 automated outbound feedback calls.',
      time: '4h ago',
      icon: 'fa-phone-volume',
      unread: false,
    },
  ]);

  const [favoritesList, setFavoritesList] = useState<number[]>([1, 10, 8, 4, 3, 11]);

  // Notes state
  const [notesList, setNotesList] = useState<NoteItem[]>([
    {
      id: 1,
      title: 'Q3 Enterprise Strategy',
      content: 'Expand AI Tele Caller integration across Southeast regional clinics.',
      date: 'Aug 24, 2026',
      color: '#fef3c7',
    },
    {
      id: 2,
      title: 'Field Force Check-ins',
      content: 'Verify GPS geo-fencing radius calibration on mobile client v2.4.',
      date: 'Aug 23, 2026',
      color: '#dbeafe',
    },
    {
      id: 3,
      title: 'Compliance Checklist',
      content: 'Complete data residency audit report before Friday board review.',
      date: 'Aug 21, 2026',
      color: '#d1fae5',
    },
  ]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  // Tasks state
  const [tasksList, setTasksList] = useState<TaskItem[]>([
    { id: 1, title: 'Review Q3 Sales Pipeline conversion rates', due: 'Today, 5:00 PM', completed: false, priority: 'High' },
    { id: 2, title: 'Sync with Field Force regional managers', due: 'Tomorrow, 10:30 AM', completed: false, priority: 'Medium' },
    { id: 3, title: 'Verify automated database failover snapshot', due: 'Aug 26, 2026', completed: true, priority: 'Low' },
    { id: 4, title: 'Update Curemaso AI prompt templates for Tele Caller', due: 'Aug 27, 2026', completed: false, priority: 'High' },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  if (!isOpen) return null;

  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const currentKey = activeTab === 'ai-agent' ? 'chat-support' : activeTab;
    const newMsg: ChatMessage = {
      id: Date.now(),
      sender: 'You',
      avatar: '👤',
      text: chatInput.trim(),
      time: 'Just now',
      isMe: true,
    };
    setMessages((prev) => ({
      ...prev,
      [currentKey]: [...(prev[currentKey] || []), newMsg],
    }));
    setChatInput('');

    // Auto AI reply
    setTimeout(() => {
      const aiReply: ChatMessage = {
        id: Date.now() + 1,
        sender: activeTab === 'ai-agent' ? selectedAgent || 'AI Assistant' : 'Curemaso AI',
        avatar: '🤖',
        text: `Understood. Processing "${newMsg.text}" with real-time ERP sync.`,
        time: 'Just now',
      };
      setMessages((prev) => ({
        ...prev,
        [currentKey]: [...(prev[currentKey] || []), aiReply],
      }));
    }, 600);
  }

  function toggleFavorite(id: number) {
    setFavoritesList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  function handleAddNote(e: React.FormEvent) {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;
    const newNote: NoteItem = {
      id: Date.now(),
      title: newNoteTitle.trim(),
      content: newNoteContent.trim(),
      date: 'Just now',
      color: '#fef3c7',
    };
    setNotesList((prev) => [newNote, ...prev]);
    setNewNoteTitle('');
    setNewNoteContent('');
  }

  function handleDeleteNote(id: number) {
    setNotesList((prev) => prev.filter((n) => n.id !== id));
  }

  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: TaskItem = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      due: 'Today',
      completed: false,
      priority: 'Medium',
    };
    setTasksList((prev) => [newTask, ...prev]);
    setNewTaskTitle('');
  }

  function toggleTaskComplete(id: number) {
    setTasksList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  const newsArticles = [
    {
      id: 1,
      title: 'Curemaso AI 2.4.1 Update Live',
      date: 'Aug 24, 2026',
      author: 'Product Engineering',
      content:
        'New Bitrix24-style slide navigation, enhanced omnichannel CRM synchronization, and real-time copilot capabilities are now deployed.',
      tag: 'Product Update',
    },
    {
      id: 2,
      title: 'Q3 Enterprise Targets Surpassed by 18%',
      date: 'Aug 22, 2026',
      author: 'Executive Team',
      content:
        'Thanks to our field force automation and AI lead scoring, client satisfaction scores reached 94% across all regional hubs.',
      tag: 'Company News',
    },
    {
      id: 3,
      title: 'New AI Tele Caller Capabilities Released',
      date: 'Aug 18, 2026',
      author: 'AI Research Lab',
      content:
        'Outbound and inbound sentiment tracking now integrated with live transcript summaries and automatic CRM task generation.',
      tag: 'Feature Spotlight',
    },
  ];

  return (
    <div className="bitrix-panel-backdrop" onClick={onClose}>
      <div
        className="bitrix-slide-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Left Side: Navigation Feed & Search */}
        <div className="bitrix-panel-sidebar">
          <div className="bitrix-panel-sidebar-header">
            <button
              className="bitrix-close-btn"
              onClick={onClose}
              title="Close panel (Esc)"
              type="button"
            >
              <i className="fas fa-times" />
            </button>
            <div className="bitrix-search-input-wrap">
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="Find chat or panel..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
          </div>

          <div className="bitrix-feed-list">
            {/* Calendar */}
            <div
              className={`bitrix-feed-item${activeTab === 'calendar' ? ' active' : ''}`}
              onClick={() => onSelectTab('calendar')}
            >
              <div className="bitrix-feed-icon-box calendar-box">
                <i className="fas fa-calendar-alt" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Calendar</span>
                  <span className="bitrix-badge-pill blue">3</span>
                </div>
                <span className="bitrix-feed-sub">Schedule &amp; Meetings</span>
              </div>
            </div>

            {/* Notes */}
            <div
              className={`bitrix-feed-item${activeTab === 'notes' ? ' active' : ''}`}
              onClick={() => onSelectTab('notes')}
            >
              <div className="bitrix-feed-icon-box notes-box">
                <i className="fas fa-sticky-note" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Notes</span>
                  <span className="bitrix-fav-count">{notesList.length}</span>
                </div>
                <span className="bitrix-feed-sub">Scratchpad &amp; Files</span>
              </div>
            </div>

            {/* Tasks / To-Do */}
            <div
              className={`bitrix-feed-item${activeTab === 'tasks' ? ' active' : ''}`}
              onClick={() => onSelectTab('tasks')}
            >
              <div className="bitrix-feed-icon-box task-box">
                <i className="fas fa-check-square" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Tasks &amp; To-Do</span>
                  <span className="bitrix-badge-pill green">
                    {tasksList.filter((t) => !t.completed).length}
                  </span>
                </div>
                <span className="bitrix-feed-sub">Workflows &amp; Actions</span>
              </div>
            </div>

            {/* Notifications Item */}
            <div
              className={`bitrix-feed-item${activeTab === 'notifications' ? ' active' : ''}`}
              onClick={() => onSelectTab('notifications')}
            >
              <div className="bitrix-feed-icon-box notify-box">
                <i className="fas fa-bell" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Notifications</span>
                  <span className="bitrix-badge-pill">4</span>
                </div>
                <span className="bitrix-feed-sub">System &amp; CRM alerts</span>
              </div>
            </div>

            {/* Chat: Support */}
            <div
              className={`bitrix-feed-item${activeTab === 'chat-support' ? ' active' : ''}`}
              onClick={() => onSelectTab('chat-support')}
            >
              <div className="bitrix-feed-icon-box support-box">
                <i className="fas fa-headset" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Support Chat</span>
                  <span className="bitrix-badge-pill green">1</span>
                </div>
                <span className="bitrix-feed-sub">AI Assistant &amp; Help</span>
              </div>
            </div>

            {/* Chat: General */}
            <div
              className={`bitrix-feed-item${activeTab === 'chat-general' ? ' active' : ''}`}
              onClick={() => onSelectTab('chat-general')}
            >
              <div className="bitrix-feed-icon-box general-box">
                <i className="fas fa-comments" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">General Chat</span>
                  <span className="bitrix-feed-time">9:20 AM</span>
                </div>
                <span className="bitrix-feed-sub">Company discussion</span>
              </div>
            </div>

            {/* Chat: Task */}
            <div
              className={`bitrix-feed-item${activeTab === 'chat-task' ? ' active' : ''}`}
              onClick={() => onSelectTab('chat-task')}
            >
              <div className="bitrix-feed-icon-box task-box">
                <i className="fas fa-tasks" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Task Chat</span>
                  <span className="bitrix-feed-time">10:00 AM</span>
                </div>
                <span className="bitrix-feed-sub">Project threads</span>
              </div>
            </div>

            {/* News */}
            <div
              className={`bitrix-feed-item${activeTab === 'news' ? ' active' : ''}`}
              onClick={() => onSelectTab('news')}
            >
              <div className="bitrix-feed-icon-box news-box">
                <i className="fas fa-newspaper" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Company News</span>
                </div>
                <span className="bitrix-feed-sub">Bulletin &amp; Announcements</span>
              </div>
            </div>

            {/* Favorites */}
            <div
              className={`bitrix-feed-item${activeTab === 'favorites' ? ' active' : ''}`}
              onClick={() => onSelectTab('favorites')}
            >
              <div className="bitrix-feed-icon-box star-box">
                <i className="fas fa-star" />
              </div>
              <div className="bitrix-feed-info">
                <div className="bitrix-feed-title-row">
                  <span className="bitrix-feed-title">Favorites</span>
                  <span className="bitrix-fav-count">{favoritesList.length}</span>
                </div>
                <span className="bitrix-feed-sub">Pinned shortcuts</span>
              </div>
            </div>

            {/* AI Agent Item */}
            {activeTab === 'ai-agent' && (
              <div
                className="bitrix-feed-item active"
                onClick={() => onSelectTab('ai-agent', selectedAgent)}
              >
                <div className="bitrix-feed-icon-box ai-box">
                  <i className="fas fa-brain" />
                </div>
                <div className="bitrix-feed-info">
                  <div className="bitrix-feed-title-row">
                    <span className="bitrix-feed-title">{selectedAgent || 'AI Agent'}</span>
                    <span className="bitrix-badge-pill purple">AI</span>
                  </div>
                  <span className="bitrix-feed-sub">Active Agent Workspace</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Main Display Content */}
        <div className="bitrix-panel-main">
          {/* 1. CALENDAR VIEW */}
          {activeTab === 'calendar' && (
            <div className="bitrix-content-view">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span className="bitrix-view-badge calendar-badge">
                    <i className="fas fa-calendar-alt" />
                  </span>
                  <div>
                    <h2>Calendar · Schedule</h2>
                    <p>Meetings, executive appointments, and action plan</p>
                  </div>
                </div>
                <button type="button" className="bitrix-header-action-btn">
                  <i className="fas fa-plus" /> New Event
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div style={{ background: '#f8faff', borderRadius: 12, padding: '14px 16px', border: '1px solid #e9edf4' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>Today</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0b1a33', marginTop: 4 }}>
                    <i className="fas fa-circle" style={{ color: '#2563eb', fontSize: 10, marginRight: 6 }} /> 3 appointments
                  </div>
                </div>
                <div style={{ background: '#f8faff', borderRadius: 12, padding: '14px 16px', border: '1px solid #e9edf4' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>This Week</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0b1a33', marginTop: 4 }}>
                    <i className="fas fa-calendar-week" style={{ color: '#2563eb', marginRight: 6 }} /> 12 meetings
                  </div>
                </div>
                <div style={{ background: '#f8faff', borderRadius: 12, padding: '14px 16px', border: '1px solid #e9edf4' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>Upcoming</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0b1a33', marginTop: 4 }}>
                    <i className="fas fa-clock" style={{ color: '#2563eb', marginRight: 6 }} /> Board review · Aug 26
                  </div>
                </div>
                <div style={{ background: '#f8faff', borderRadius: 12, padding: '14px 16px', border: '1px solid #e9edf4' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7a8f' }}>Action Plan</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0b1a33', marginTop: 4 }}>
                    <i className="fas fa-list-check" style={{ color: '#2563eb', marginRight: 6 }} /> 5 items pending
                  </div>
                </div>
              </div>

              <div style={{ padding: 20, background: '#f8faff', borderRadius: 14, border: '1px solid #e9edf4' }}>
                <span style={{ fontWeight: 700, color: '#0b1a33', fontSize: 15 }}>📅 Scheduled Appointments</span>
                <ul style={{ marginTop: 14, listStyle: 'none', fontSize: 13.5 }}>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #e9edf4', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontWeight: 600, color: '#2563eb' }}>10:00 AM</span>
                    <span>Strategy sync with Marketing team</span>
                  </li>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #e9edf4', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontWeight: 600, color: '#2563eb' }}>02:00 PM</span>
                    <span>Demo for Geniuspie enterprise client</span>
                  </li>
                  <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontWeight: 600, color: '#2563eb' }}>04:30 PM</span>
                    <span>Legal review &amp; M&amp;A documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* 2. NOTES VIEW */}
          {activeTab === 'notes' && (
            <div className="bitrix-content-view">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span className="bitrix-view-badge notes-badge">
                    <i className="fas fa-sticky-note" />
                  </span>
                  <div>
                    <h2>Notes &amp; Scratchpad</h2>
                    <p>Quick notes, important links, and team ideas</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleAddNote} style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 10, background: '#f8faff', padding: 16, borderRadius: 12, border: '1px solid #e9edf4' }}>
                <input
                  type="text"
                  placeholder="Note title..."
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13.5, outline: 'none' }}
                />
                <textarea
                  placeholder="Note content..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  rows={2}
                  style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13.5, outline: 'none', resize: 'vertical' }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
                    <i className="fas fa-plus" /> Add Note
                  </button>
                </div>
              </form>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
                {notesList.map((note) => (
                  <div key={note.id} style={{ background: note.color, borderRadius: 12, padding: 16, border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#1e293b' }}>{note.title}</h4>
                      <button
                        type="button"
                        onClick={() => handleDeleteNote(note.id)}
                        style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: 2 }}
                        title="Delete note"
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    </div>
                    <p style={{ margin: '0 0 12px', fontSize: 13, color: '#334155', flex: 1, lineHeight: 1.45 }}>{note.content}</p>
                    <span style={{ fontSize: 11, color: '#64748b' }}>{note.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. TASKS / TO-DO VIEW */}
          {activeTab === 'tasks' && (
            <div className="bitrix-content-view">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span className="bitrix-view-badge task-badge">
                    <i className="fas fa-check-square" />
                  </span>
                  <div>
                    <h2>Tasks &amp; To-Do</h2>
                    <p>Action items, workflow assignments, and deadlines</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleAddTask} style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <input
                  type="text"
                  placeholder="Add a new task..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  style={{ flex: 1, padding: '10px 16px', borderRadius: 20, border: '1px solid #e2e8f0', fontSize: 13.5, outline: 'none' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '8px 18px', borderRadius: 20, fontSize: 13 }}>
                  <i className="fas fa-plus" /> Add Task
                </button>
              </form>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tasksList.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTaskComplete(task.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '14px 18px',
                      background: task.completed ? '#f8faff' : '#ffffff',
                      borderRadius: 12,
                      border: '1px solid #e9edf4',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      opacity: task.completed ? 0.65 : 1,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskComplete(task.id)}
                      style={{ width: 18, height: 18, cursor: 'pointer', accentColor: '#2563eb' }}
                    />
                    <div style={{ flex: 1 }}>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#0b1a33',
                          textDecoration: task.completed ? 'line-through' : 'none',
                        }}
                      >
                        {task.title}
                      </span>
                      <div style={{ fontSize: 11.5, color: '#8e9bb5', marginTop: 2 }}>Due: {task.due}</div>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: 8,
                        background:
                          task.priority === 'High'
                            ? '#fee2e2'
                            : task.priority === 'Medium'
                            ? '#fef3c7'
                            : '#e0e7ff',
                        color:
                          task.priority === 'High'
                            ? '#ef4444'
                            : task.priority === 'Medium'
                            ? '#d97706'
                            : '#4f46e5',
                      }}
                    >
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. NOTIFICATIONS VIEW */}
          {activeTab === 'notifications' && (
            <div className="bitrix-content-view">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span className="bitrix-view-badge notify-badge">
                    <i className="fas fa-bell" />
                  </span>
                  <div>
                    <h2>Notifications</h2>
                    <p>Recent activity, alerts, and system updates</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bitrix-header-action-btn"
                  onClick={() =>
                    setNotificationsList((prev) =>
                      prev.map((item) => ({ ...item, unread: false })),
                    )
                  }
                >
                  <i className="fas fa-check-double" /> Mark all as read
                </button>
              </div>

              <div className="bitrix-notifications-feed">
                {notificationsList.map((item) => (
                  <div
                    key={item.id}
                    className={`bitrix-notify-card${item.unread ? ' unread' : ''}`}
                  >
                    <div className="bitrix-notify-icon">
                      <i className={`fas ${item.icon}`} />
                    </div>
                    <div className="bitrix-notify-body">
                      <div className="bitrix-notify-top">
                        <h4>{item.title}</h4>
                        <span className="bitrix-notify-time">{item.time}</span>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                    {item.unread && <span className="bitrix-unread-dot" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. CHAT VIEWS (Support, General, Task, or AI Agent) */}
          {(activeTab.startsWith('chat-') || activeTab === 'ai-agent') && (
            <div className="bitrix-content-view chat-layout">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span
                    className={`bitrix-view-badge ${
                      activeTab === 'ai-agent'
                        ? 'ai-badge'
                        : activeTab === 'chat-support'
                          ? 'support-badge'
                          : activeTab === 'chat-task'
                            ? 'task-badge'
                            : 'general-badge'
                    }`}
                  >
                    <i
                      className={`fas ${
                        activeTab === 'ai-agent'
                          ? 'fa-robot'
                          : activeTab === 'chat-support'
                            ? 'fa-headset'
                            : activeTab === 'chat-task'
                              ? 'fa-tasks'
                              : 'fa-comments'
                      }`}
                    />
                  </span>
                  <div>
                    <h2>
                      {activeTab === 'ai-agent'
                        ? selectedAgent
                        : activeTab === 'chat-support'
                          ? 'Support & Copilot Channel'
                          : activeTab === 'chat-task'
                            ? 'Task Workflow Discussion'
                            : 'General Team Chat'}
                    </h2>
                    <p>
                      <span className="online-dot" /> Online · Active team synchronization
                    </p>
                  </div>
                </div>
              </div>

              <div className="bitrix-chat-messages">
                {(
                  messages[activeTab === 'ai-agent' ? 'chat-support' : activeTab] || []
                ).map((msg) => (
                  <div
                    key={msg.id}
                    className={`bitrix-chat-bubble-row${msg.isMe ? ' me' : ''}`}
                  >
                    <div className="bitrix-chat-avatar">{msg.avatar}</div>
                    <div className="bitrix-chat-bubble">
                      <div className="bitrix-chat-sender-row">
                        <span className="sender-name">{msg.sender}</span>
                        <span className="sender-time">{msg.time}</span>
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form className="bitrix-chat-input-bar" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Type a message or instruction..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                />
                <button type="submit" className="bitrix-chat-send-btn">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          )}

          {/* 6. NEWS VIEW */}
          {activeTab === 'news' && (
            <div className="bitrix-content-view">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span className="bitrix-view-badge news-badge">
                    <i className="fas fa-newspaper" />
                  </span>
                  <div>
                    <h2>Company News &amp; Bulletin</h2>
                    <p>Official company announcements, updates, and ERP releases</p>
                  </div>
                </div>
              </div>

              <div className="bitrix-news-grid">
                {newsArticles.map((article) => (
                  <div key={article.id} className="bitrix-news-card">
                    <div className="bitrix-news-tag-row">
                      <span className="bitrix-news-tag">{article.tag}</span>
                      <span className="bitrix-news-date">{article.date}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                    <div className="bitrix-news-footer">
                      <i className="fas fa-user-circle" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. FAVORITES VIEW */}
          {activeTab === 'favorites' && (
            <div className="bitrix-content-view">
              <div className="bitrix-view-header">
                <div className="bitrix-view-title-wrap">
                  <span className="bitrix-view-badge star-badge">
                    <i className="fas fa-star" />
                  </span>
                  <div>
                    <h2>Saved Favorites</h2>
                    <p>Quick access shortcuts to your most frequently used sections</p>
                  </div>
                </div>
              </div>

              <div className="bitrix-favorites-grid">
                {ALL_MODULES.filter((m) => favoritesList.includes(m.id)).map((item) => (
                  <div key={item.id} className="bitrix-favorite-card">
                    <div className="bitrix-fav-icon">
                      <i className={`fas ${item.icon || 'fa-circle'}`} />
                    </div>
                    <div className="bitrix-fav-details">
                      <h4>{item.name}</h4>
                      <span>Category: {item.category}</span>
                    </div>
                    <div className="bitrix-fav-actions">
                      <button
                        type="button"
                        className="bitrix-launch-btn"
                        onClick={() => {
                          onNavigateModule(item.id);
                          onClose();
                        }}
                      >
                        Launch
                      </button>
                      <button
                        type="button"
                        className="bitrix-star-remove"
                        onClick={() => toggleFavorite(item.id)}
                        title="Remove from favorites"
                      >
                        <i className="fas fa-star" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
