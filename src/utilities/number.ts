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
    return num.toString();
  }
};
