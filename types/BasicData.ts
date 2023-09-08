export type BasicData = {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      id: number;
      main: string;
    }
  ];
  sun: string;
  coord: {
    lat: number;
    lon: number;
  };
  visibility: number;
  wind: { deg: number };
};
