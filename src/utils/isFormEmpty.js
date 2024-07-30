export const isFormEmpty = (obj) => {
  for (const item in obj) {
    if (obj[item] === '') return true;
  }
  return false;
};
