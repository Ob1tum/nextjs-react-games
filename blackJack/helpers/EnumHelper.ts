export const getNumericEnumValues = <T>(someEnum: T): number[] =>
  Object.values(someEnum).reduce((acc, item) => {
    if (!isNaN(item)) acc.push(item);
    return acc;
  }, []);

export const getStringEnumValues = <T>(someEnum: T) =>
  Object.values(someEnum).reduce((acc, item) => {
    acc.push(item);
    return acc;
  }, []);
