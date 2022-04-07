const isFilled = (value) => {
  return !(value === null || typeof value === "undefined" || value === "");
};

const passedValidation = (value) => {
  return isFilled(value) && /^\d{0,3}$|^\d{1,3}\.\d+$/.test(value);
};

export { isFilled, passedValidation };
