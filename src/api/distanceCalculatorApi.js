const getDistance = async (
  firstLatitude,
  firstLongitude,
  secondLatitude,
  secondLongitude
) => {
  const url = `${
    import.meta.env.VITE_API_URL
  }/get-distance?firstLatitude=${firstLatitude}&firstLongitude=${firstLongitude}&secondLatitude=${secondLatitude}&secondLongitude=${secondLongitude}`;

  const response = await fetch(url);
  return await response.json();
};

export { getDistance };
