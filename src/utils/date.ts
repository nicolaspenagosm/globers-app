export const fromSecondsToMiliseconds = (seconds: number) => {
  return seconds * 100;
};

export const isDateExpired = (date: number) => {
  const now = Date.now();
  const fiveMinutes = 1000 * 60 * 5;
  return now <= date - fiveMinutes;
};

export const calculateExpiresIn = (date: number) => {
  return Date.now() - date;
};
