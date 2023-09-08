type Data = {
  name: string;
  sys: {
    country: string;
  };
};
export default function getTitle(data: Data) {
  return `Weather ${
    data
      ? `in ${data.name}, ${
          new Intl.DisplayNames(['en'], { type: 'region' }).of(data.sys.country) || data.sys.country
        }`
      : ''
  } - Umbrella`;
}
