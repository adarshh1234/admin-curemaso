export interface FieldAgent {
  id: string;
  initials: string;
  color: string;
  name: string;
  detailPrefix: string;
  detailStatus: string;
  detailIcon: string;
  detailIconColor: string;
  regionTag: string;
}

export interface CheckInEvent {
  id: string;
  icon: string;
  iconColor: string;
  text: string;
}
