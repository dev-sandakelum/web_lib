export interface BirthdayTemplate3 {
  id: string;
  name: string;
  background: string;
  accentColor: string;
  accentGlow: string;
  textColor: string;
}

export interface BirthdayPostData3 {
  name: string;
  batch: string;
  faculty: string;
  university: string;
  profileImage: string | null;
  message: string;
  template: BirthdayTemplate3;
  access: boolean;
  nameStyle: NameStyle;
}

export interface FormData3 {
  name: string;
  batch: string;
  faculty: string;
  university: string;
  profileImage: string | null;
  message: string;
  templateId: string;
  access: boolean;
  nameStyle: NameStyle;
}

export interface NameStyle {
  borderRadius: number;   // 0–60, default 10
  fontSize: number | null; // null = auto, otherwise 35–50
  paddingY: number;       // 8–60, default 8
  marginTop: number;      // 0–200, default 0
}

export interface ImageTransform3 {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  flip: boolean;
}
