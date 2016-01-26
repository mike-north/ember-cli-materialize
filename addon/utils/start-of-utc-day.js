var m = window.moment;

export default function startOfUTCDay(input){
	var regularDate = m(input || null).startOf('day');
	if (!regularDate.isValid()){
		return m(null);
	}

	var utcDate = m.utc(input).startOf('day');
	var regularDay = regularDate.date();
	var utcDay = utcDate.date();
	if (regularDay !== utcDay) {
		utcDate.set('date', regularDay);
		utcDate.set('month', regularDate.month());
		utcDate.set('year', regularDate.year());
	}

	return utcDate;
}