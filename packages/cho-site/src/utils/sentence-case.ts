export const sentenceCase = (text: string) =>
  text
    .replace(/-([a-z])/g, (_, word) => word.toUpperCase())
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase());
