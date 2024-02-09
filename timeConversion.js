const convertHours = function (hours, isAM) {
  const numberOfHours = +hours
  if (numberOfHours < 12 && !isAM) {
    return numberOfHours + 12;
  } else if (numberOfHours === 12 && isAM) {
    return "00"
  }
  return hours;
}

const getTimeConversion = function (timeFormat) {
  const isAM = timeFormat.toUpperCase().includes('AM');
  const formatConversion = timeFormat.slice(0, -2);
  const [hours, minutes, seconds] = formatConversion.split(':');
  return `${convertHours(hours, isAM)}:${minutes}:${seconds}`;
}
console.log(getTimeConversion('12:00:01am'));