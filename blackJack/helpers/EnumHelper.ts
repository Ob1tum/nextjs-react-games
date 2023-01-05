export const getNumericEnumValues = <T>(someEnum: T): number[] => {
  return Object.values(someEnum).reduce((acc, item) => {
    if (!isNaN(item)) acc.push(item);
    return acc;
  }, []);
}
