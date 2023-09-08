export default function getDay(timestamp: number, offset: number): string {
  return new Date(
    (timestamp + (offset || 0) + new Date().getTimezoneOffset() * 60) * 1000
  ).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
  });
}
