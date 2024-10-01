/**
 *
 * @param num
 * @returns string like 15M, 5k ....
 */
export const formatToFixed = (num: number) => {
  const removeTrailingZeros = (formattedNum: string) => {
    return formattedNum.endsWith(".00")
      ? formattedNum.slice(0, -3)
      : formattedNum.endsWith("0")
      ? formattedNum.slice(0, -1)
      : formattedNum;
  };

  if (num >= 1000 && num < 1000000) {
    return removeTrailingZeros((num / 1000).toFixed(2)) + "k";
  } else if (num >= 1000000 && num < 1000000000) {
    return removeTrailingZeros((num / 1000000).toFixed(2)) + "M";
  } else if (num >= 1000000000 && num < 1000000000000) {
    return removeTrailingZeros((num / 1000000000).toFixed(2)) + "B";
  } else if (num >= 1000000000000) {
    return removeTrailingZeros((num / 1000000000000).toFixed(2)) + "T";
  } else {
    return removeTrailingZeros(num.toFixed(3));
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
