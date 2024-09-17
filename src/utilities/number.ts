/**
 *
 * @param num
 * @returns string like 15M, 5k ....
 */
export const formatToFixed = (num: number) => {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(2) + "k";
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000000000 && num < 1000000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  } else if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(2) + "T";
  } else {
    return num.toFixed(3).toString();
  }
};

/**
 *
 * @param num
 * @returns 538,507,981
 */
export const formatNum = (num: number) => {
  return new Intl.NumberFormat("en-US").format(num);
};

/**
 * Rounds a number up to the nearest integer multiple of specified significance factor.
 * @param value
 * @param factor
 * @returns
 */
export const ceiling = (value: number, factor = 1) => {
  return Math.ceil(value / factor) * factor;
};
