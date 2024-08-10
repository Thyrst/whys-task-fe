import { intlFormat } from 'date-fns';

export const formatDateString = (date: string) => {
  const dateObj = new Date(date);
  return intlFormat(dateObj, {
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
  });
};
