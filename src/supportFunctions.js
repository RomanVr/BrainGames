const getRandomArbitRary = (min, max) => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 100;
  let Min;
  let Max;
  if (min === undefined || Number.isNaN(min)) {
    Min = MIN_VALUE;
  } else {
    Min = min;
  }
  if (max === undefined || Number.isNaN(min)) {
    Max = MAX_VALUE;
  } else {
    Max = max;
  }
  return () => Math.round(Math.random() * (Max - Min) + Min);
};

export default getRandomArbitRary;
