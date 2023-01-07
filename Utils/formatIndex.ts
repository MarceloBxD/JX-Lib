export const formatIndex = (index: number): string => {
  return index < 10 ? `0${index}` : `${index}`;
};
