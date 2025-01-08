export const isObject = (candidate) => typeof candidate === "object";

export const deepClone = (object) => {
  const clonedObject = {};

  for (const key in object) {
    const clonedItem = isObject(object[key])
      ? deepClone(object[key])
      : object[key];
    clonedObject[key] = clonedItem;
  }

  return clonedObject;
};
