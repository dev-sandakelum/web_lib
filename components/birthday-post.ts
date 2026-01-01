export interface BirthdayTemplate {
  id: string;
  name: string;
  background: string;
}

export interface BirthdayPostData {
  name: string;
  batch: string;
  faculty: string;
  university: string;
  profileImage: string | null;
  message: string;
  template: BirthdayTemplate;
  access: boolean;
}

export interface FormData {
  name: string;
  batch: string;
  faculty: string;
  university: string;
  profileImage: string | null;
  message: string;
  templateId: string;
  access: boolean;
}

export interface ImageTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  flip: boolean;
}
