export interface ModuleItem {
  id: number;
  name: string;
  category: string;
  icon: string;
  special?: boolean;
}

export type SpecialPageId = 'dashboard' | 'profile' | 'calendar' | 'reports' | 'settings';

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  nationality: string;
  aboutMe: string;
}

export interface ModuleDetailFields {
  name: string;
  category: string;
  status: string;
  description: string;
  owner: string;
  lastUpdated: string;
}
