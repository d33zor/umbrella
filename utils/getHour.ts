export default function getHour(timestamp: number, offset: number): string {
  return new Date(
    (timestamp + (offset || 0) + new Date().getTimezoneOffset() * 60) * 1000
  ).toLocaleString('pl', {
    hour: 'numeric',
    minute: 'numeric',
  });
}
