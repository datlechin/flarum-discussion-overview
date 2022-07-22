import dayjs from 'dayjs';

export default function shortTime(time: Date) {
  // 1m, 1h, Jan '20

  const date = dayjs(time);
  const now = dayjs();
  const diff = now.diff(date, 'minute');

  if (diff < 1) {
    return 'now';
  }

  if (diff < 60) {
    return `${diff}m`;
  }

  if (diff < 60 * 24) {
    return `${Math.round(diff / 60)}h`;
  }

  return date.format("MMM 'YY");
}
