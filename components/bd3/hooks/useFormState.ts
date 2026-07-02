import { useState, useCallback } from "react";
import type { FormData3 } from "../types";

const DEFAULT_NAME_STYLE = {
  borderRadius: 10,
  fontSize: 48,
  paddingY: 8,
};

const DEFAULT_FORM: FormData3 = {
  name: "",
  batch: "9th Batch",
  faculty: "Faculty of Technology",
  university: "University of Ruhuna",
  profileImage: null,
  message: "Happy birthday, I hope your day is filled with joy and laughter, and that all your dreams come true 💛. Wishing you a year ahead that's successful and happy, with amazing memories to cherish 🎂. Have a fantastic day and an incredible journey ahead ✨ ✨",
  templateId: "t1",
  access: false,
  nameStyle: DEFAULT_NAME_STYLE,
};

export function useFormState() {
  const [form, setForm] = useState<FormData3>(DEFAULT_FORM);

  const set = useCallback(
    (field: keyof FormData3, value: string | null | boolean) =>
      setForm((p) => ({ ...p, [field]: value })),
    []
  );

  const reset = useCallback(() => {
    setForm(DEFAULT_FORM);
  }, []);

  return { form, setForm, set, reset };
}
