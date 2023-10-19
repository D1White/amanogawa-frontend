export const daysFormat = (days: number) => {
  switch (days) {
    case 1:
      return 'день';
    case 2:
    case 3:
    case 4:
      return 'дні';
    default:
      return 'днів';
  }
};

export const daysDifference = (dateString: string) => {
  const currentDate = new Date();
  const date = new Date(dateString);

  const timeDifference = currentDate.getTime() - date.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return Math.floor(daysDifference);
};
