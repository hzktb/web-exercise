// write a function to take the time in hours and minutes
// and output the time as proper english time as a string

const converTimeToWords = (hours, minutes) => {
  let ans = "";

  // 0 is a place holder
  const numberStrings = [
    0,
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  // 6 conditions
  // when minutes === 0, hour o'clock
  // when minutes === 30, half past hour
  // when minutes === 15, quarter past hour
  // when minutes === 45, quarter to hour + 1
  // when minutes < 30, minutes past hour
  // when minutes > 30, minutes to hour + 1

  if (minutes === 0) {
    res = `${numberStrings[hours]} o'clock`;
  } else if (minutes === 45) {
    // when hour is 12, we have to set it to 0 for hours + 1 to work properly
    if (hours === 12) {
      hours = 0;
    }
    res = `quarter to ${numberStrings[hours + 1]}`;
  } else if (minutes === 30) {
    res = `half past ${numberStrings[hours]}`;
  } else if (minutes === 15) {
    res = `quarter past ${numberStrings[hours]}`;
  } else {
    if (minutes > 30) {
      // for when minutes is greater than 30
      // if hours is 12, we have to change it to 0 for hours + 1 to work in the numberStrings array
      if (hours === 12) {
        hours = 0;
      }
      minutes = 60 - minutes;
      // if minutes is less than 21, no issues
      // if minutes is larger than 21, we have to desctruct the minutes more by minute - 20 to the get ones digit of the minute
      if (minutes > 21) {
        minutes -= 20;
        res = `twenty ${numberStrings[minutes]} minutes to ${
          numberStrings[hours + 1]
        }`;
      } else {
        res = `${numberStrings[minutes]} minutes to ${
          numberStrings[hours + 1]
        }`;
      }
    } else {
      // for when minutes is less than 30
      if (minutes > 21) {
        minutes -= 20;
        res = `twenty ${numberStrings[minutes]} minutes past ${numberStrings[hours]}`;
      } else {
        res = `${numberStrings[minutes]} minutes past ${numberStrings[hours]}`;
      }
    }
  }
  return res;
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
