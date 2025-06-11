/**
 * A simple utility function for conditionally joining class names together
 * 
 * @param classes - Class names or conditional objects {[className]: condition}
 * @returns Joined class string with no extra spaces
 */
export function cn(...classes: (string | boolean | undefined | null | {[key: string]: any})[]): string {
  return classes
    .filter(Boolean)
    .map(entry => {
      if (typeof entry === 'string') return entry;
      if (entry && typeof entry === 'object') {
        return Object.keys(entry)
          .filter(key => entry[key])
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}
