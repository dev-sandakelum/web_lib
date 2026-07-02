export const generateFileName = (name: string): string => {
  return `birthday-${name.replace(/\s+/g, "-") || "post"}.png`;
};

export const getCharCountStatus = (count: number, min: number, max: number) => {
  if (count < min) return "searching";
  if (count >= min && count <= max) return "good";
  return "over";
};

export const formatAttemptLabel = (attempt: number, max: number): string => {
  return `${attempt}/${max}`;
};
