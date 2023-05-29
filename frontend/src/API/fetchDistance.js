const fetchDistance = async (
  addeess1,
  addeess2 = "CF Fairview Park, 2960 Kingsway Dr, Kitchener, Ontario,canada"
) => {
  const data1 = await fetch(
    `https://geocode.maps.co/search?q={${addeess1}}}`
  ).then((res) => res.json());
  const data2 = await fetch(
    `https://geocode.maps.co/search?q={${addeess2}}}`
  ).then((res) => res.json());

  return await fetch(
    `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${data1[0].lat},${data1[0].lon}&destinations=${data2[0].lat},${data2[0].lon}&key=ejoYnya96Hcg0lPHLcTKJyAnZABsI`
  )
    .then((res) => res.json())
    .then((dis) => dis.rows[0].elements[0]);
};

export default fetchDistance;
