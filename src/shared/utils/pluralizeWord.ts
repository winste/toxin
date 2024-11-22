export const pluralizeWord = (count: number, singular: string, plural: string, plural2: string): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return singular;
  }
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return plural;
  }
  return plural2;
};