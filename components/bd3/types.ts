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
}

export interface ImageTransform3 {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  flip: boolean;
}
