export const getDateAndTime = () => {
  const date = new Date();

  const currentTime = String(date)?.slice(16, 24);
  const todaysDate = String(date)?.slice(4, 15);

  const hours = currentTime.slice(0, 2);
  const minutes = currentTime.slice(3, 5);
  const seconds = currentTime.slice(6, 8);

  return { hours, minutes, seconds, todaysDate };
};
