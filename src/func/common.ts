export const getLocalStorage = (key: string) => {
  let value =
    localStorage.getItem(key) && localStorage.getItem(key) !== "undefined"
      ? localStorage.getItem(key)
      : null;
  return value !== null ? JSON.parse(value) : null;
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof value === "string") {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
