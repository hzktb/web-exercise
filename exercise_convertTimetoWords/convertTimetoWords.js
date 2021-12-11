// write a function to take the time in hours and minutes
// and output the time as proper english time as a string

const numberStrings = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
};

const converTimeToWords = (hours, minutes) => {
  // 6 conditions
  // when minutes === 0, hour o'clock
  // when minutes === 30, half past hour
  // when minutes === 15, quarter past hour
  // when minutes === 45, quarter to hour + 1
  // when minutes < 30, minutes past hour
  // when minutes > 30, minutes to hour + 1

  if (minutes === 0) {
    return `${numberStrings[hours]} o'clock`;
  } else if (minutes === 45) {
    // when hour is 12, we have to set it to 0 for hours + 1 to work properly
    if (hours === 12) {
      let newHour = hourIsTwelve();
      return `quarter to ${numberStrings[newHour]}`;
    }
    return `quarter to ${numberStrings[hours]}`;
  } else if (minutes === 30) {
    return `half past ${numberStrings[hours]}`;
  } else if (minutes === 15) {
    return `quarter past ${numberStrings[hours]}`;
  } else {
    if (minutes > 30) {
      // for when minutes is greater than 30
      if (hours === 12) {
        // if hours is 12, we have to change it to 0 for hours + 1 to work in the numberStrings array
        let newHour = hourIsTwelve();
        return minuteGreaterThanHalf(minutes, newHour);
      }
      return minuteGreaterThanHalf(minutes, hours + 1);
    } else {
      // for when minutes is less than 30
      return minuteLessThanHalf(minutes, hours);
    }
  }
};

const minuteGreaterThanHalf = (minutes, hours) => {
  let modifiedMinutes = 60 - minutes;
  // if minutes is less than 21, no issues
  // if minutes is larger than 21, we have to desctruct the minutes more by minute - 20 to the get ones digit of the minute
  if (minutes > 21) {
    let finalMinutes = minuteLargerThanTwentyOne(modifiedMinutes);
    return `twenty ${numberStrings[finalMinutes]} minutes to ${numberStrings[hours]}`;
  } else {
    return `${numberStrings[minutes]} minutes to ${numberStrings[hours]}`;
  }
};

const minuteLessThanHalf = (minutes, hours) => {
  if (minutes > 21) {
    // minuteLargerThanTwentyOne
    return `twenty ${numberStrings[minutes]} minutes past ${numberStrings[hours]}`;
  } else {
    return `${numberStrings[minutes]} minutes past ${numberStrings[hours]}`;
  }
};

const minuteLargerThanTwentyOne = (minutes) => {
  let newMinutes = minutes - 20;
  return newMinutes;
};

const hourIsTwelve = () => {
  return 1;
};

console.log(converTimeToWords(8, 0));
console.log(converTimeToWords(8, 15));
console.log(converTimeToWords(8, 45));
console.log(converTimeToWords(8, 30));
console.log(converTimeToWords(8, 14));
console.log(converTimeToWords(8, 38));
console.log(converTimeToWords(12, 15));
console.log(converTimeToWords(12, 35));
console.log(converTimeToWords(12, 45));
