const getPagination = (data, rows = 5, page = 1) => {
  const starintIndex = (page - 1) * rows;
  const endingIndex = page * rows;
  return data.slice(starintIndex, endingIndex);
};

export default getPagination;
