export type Pollutants = {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
};

export default function calculateMainPollutant(components: Pollutants): string {
  const pollutant = Object.keys(components).reduce((a, b) =>
    components[a as keyof Pollutants] > components[b as keyof Pollutants] ? a : b
  );
  const names: Record<string, string> = {
    co: 'CO',
    no: 'NO',
    no2: 'NO2',
    o3: 'O3',
    so2: 'SO2',
    pm2_5: 'PM2.5',
    pm10: 'PM10',
    nh3: 'NH3',
  };
  return names[pollutant];
}
