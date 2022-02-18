export function isBlankOrEmpty(value: string): boolean  {
  return (value || '').trim().length === 0;
}

export function isNotBlankOrEmpty(value: string): boolean {
  return !isBlankOrEmpty(value);
}
