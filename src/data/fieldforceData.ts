import type { CheckInEvent, FieldAgent } from '../types/fieldforce';

export const FIELD_AGENTS: FieldAgent[] = [
  {
    id: 'agent-1',
    initials: 'RK',
    color: '#2563eb',
    name: 'Rajesh Kumar',
    detailPrefix: '3 visits',
    detailStatus: 'on route',
    detailIcon: 'fas fa-check-circle',
    detailIconColor: '#16a34a',
    regionTag: 'Geo',
  },
  {
    id: 'agent-2',
    initials: 'SA',
    color: '#db2777',
    name: 'Sara Al-Fahd',
    detailPrefix: '2 check-ins',
    detailStatus: 'pending',
    detailIcon: 'fas fa-clock',
    detailIconColor: '#f59e0b',
    regionTag: 'UAE',
  },
  {
    id: 'agent-3',
    initials: 'JT',
    color: '#d97706',
    name: 'James Turner',
    detailPrefix: '4 visits',
    detailStatus: 'completed',
    detailIcon: 'fas fa-flag-checkered',
    detailIconColor: '#16a34a',
    regionTag: 'UK',
  },
];

export const CHECK_IN_EVENTS: CheckInEvent[] = [
  {
    id: 'checkin-1',
    icon: 'fas fa-check-circle',
    iconColor: '#16a34a',
    text: 'Rajesh checked in at Client A (10:15am)',
  },
  {
    id: 'checkin-2',
    icon: 'fas fa-check-circle',
    iconColor: '#16a34a',
    text: 'Sara checked in at Site B (11:30am)',
  },
  {
    id: 'checkin-3',
    icon: 'fas fa-clock',
    iconColor: '#f59e0b',
    text: 'James pending check-in (scheduled 2:00pm)',
  },
];
