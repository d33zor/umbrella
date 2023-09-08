import { Pollutants } from '../utils/calculateMainPollutant';

export type AirData = {
  list: [
    {
      main: {
        aqi: number;
      };
      components: Pollutants;
    }
  ];
};
