export const formatterTable = (array) => {
  const formattedArray = duplicateCheckIn(array);
  const formatted = formattedArray.map((item) => {
    let arr = [];
    for (const val in item) {
      if (val === "checkInTime") {
        const timeFormatted = getHoursAndMinutes(new Date(item[val]));
        arr.push(timeFormatted);
      }
      if (val === "checkOutTime" && item[val] !== null) {
        const timeFormatted = getHoursAndMinutes(new Date(item[val]));
        arr.push(timeFormatted);
      }
      if (val === "checkOutTime" && item[val] === null) {
        arr.push("-:-")
      }
      if (val === "attendanceType") {
        arr.push(item[val]);
      }
      if (val === "date") {
        const dateFormatted = formattedDate(new Date(item[val]));
        arr.push(dateFormatted);
      }
    }
    return arr;
  });
  return formatted;
};

export const getHoursAndMinutes = (date) => {
  return padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());
};
function padTo2Digits(num) {
  return String(num).padStart(2, "0");
}

export const formattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const duplicateCheckIn = (array) => {
  const data = array.map((item) => {
    const obj = {
      ...item,
      date: item.checkInTime,
    };
    return obj;
  });
  return data;
};
