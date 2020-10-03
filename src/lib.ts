/* Filter object properties by keys */
export const fillterObject = (object: any, allowedKeys: string[]) => {
  return Object.keys(object)
    .filter((key) => allowedKeys.includes(key))
    .reduce((obj, key) => {
      return { ...obj, [key]: object[key] };
    }, {});
};
