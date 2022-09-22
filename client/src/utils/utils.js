export const calculateNumNights = (startDate, endDate) => {
	const date1 = startDate;
	const date2 = endDate;
	const timeDiff = Math.abs(date2.getTime() - date1.getTime());
	const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return numberOfNights;
};

const addDateSuffix = (date) => {
	let dateStr = date.toString();

	// get last char of date string
	const lastChar = dateStr.charAt(dateStr.length - 1);

	if (lastChar === "1" && dateStr !== "11") {
		dateStr = `${dateStr}st`;
	} else if (lastChar === "2" && dateStr !== "12") {
		dateStr = `${dateStr}nd`;
	} else if (lastChar === "3" && dateStr !== "13") {
		dateStr = `${dateStr}rd`;
	} else {
		dateStr = `${dateStr}th`;
	}

	return dateStr;
};

// function to format a timestamp, accepts the timestamp and an `options` object as parameters
export const formatDate = (
	timestamp,
	{ monthLength = "short", dateSuffix = false } = {}
) => {
	// create month object
	const months = {
		0: monthLength === "short" ? "01" : "January",
		1: monthLength === "short" ? "02" : "February",
		2: monthLength === "short" ? "03" : "March",
		3: monthLength === "short" ? "04" : "April",
		4: monthLength === "short" ? "05" : "May",
		5: monthLength === "short" ? "06" : "June",
		6: monthLength === "short" ? "07" : "July",
		7: monthLength === "short" ? "08" : "August",
		8: monthLength === "short" ? "09" : "September",
		9: monthLength === "short" ? "10" : "October",
		10: monthLength === "short" ? "10" : "November",
		11: monthLength === "short" ? "12" : "December",
	};

	const dateObj = new Date(timestamp);
	const formattedMonth = months[dateObj.getMonth()];

	const dayOfMonth = dateSuffix
		? addDateSuffix(dateObj.getDate())
		: dateObj.getDate();

	const year = dateObj.getFullYear();


	const formattedTimeStamp = `${formattedMonth}/${dayOfMonth}/${year}`;

	return formattedTimeStamp;
};
