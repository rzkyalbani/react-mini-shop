export const sluggable = (string) => {
  const modifiedString = string.toLowerCase().replace(/\s+/g, '-');
  return modifiedString;
}