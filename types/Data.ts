export type Data = {
  current: {
    humidity: number;
    pressure: number;
    temp: number;
    visibility: number;
  };
  hourly: [
    {
      pop: number;
      temp: number;
      weather: [
        {
          id: number;
          main: string;
        }
      ];
      wind_speed: number;
      dt: number;
    }
  ];
};
