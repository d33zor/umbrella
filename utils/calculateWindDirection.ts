export default function calculateWindDirection(deg: number): string {
  return deg < 90 ? 'North' : deg < 180 ? 'East' : deg < 270 ? 'South' : 'West';
}
