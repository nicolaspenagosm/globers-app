export const fromSecondsToMiliseconds = (seconds: number) => {
  return seconds * 1000;
};

export const isDateExpired = (
  date: number,
  expirationThresholdInMinutes: number
) => {
  const now = Date.now();
  const expirationThresholdInMs = expirationThresholdInMinutes * 60 * 1000;
  return now >= date - expirationThresholdInMs;
};

export const calculateExpiresIn = (date: number) => {
  return date - Date.now();
};
