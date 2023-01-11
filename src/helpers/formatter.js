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
        arr.push("-:-");
      }
      if (val === "attendanceType") {
        arr.push(item[val]);
      }
      if (val === "amount") {
        const currencyFormatted = formattedCurrency(item[val]);
        arr.push(currencyFormatted);
      }
      if (val === "date" || val === "paymentDate") {
        const dateFormatted = formattedDate(new Date(item[val]));
        arr.push(dateFormatted);
      }
      if (val === "periodeSalary") {
        const monthFormatted = formattedMonth(new Date(item[val]));
        arr.push(monthFormatted);
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

export const formattedMonth = (date) => {
  const options = {
    year: "numeric",
    month: "long",
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

export const formattedCurrency = (value) => {
  return new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/\.00$/, "");
};
