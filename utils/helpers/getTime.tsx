export const getCurrentTimeStamp = () => {
  const now = new Date();
  const timeString = now.toUTCString();
  const uniqueKey = now.toISOString();
  return { uniqueKey, timeString };
};
