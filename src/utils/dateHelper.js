export default function getDaysFromMonth(month, year, moment){
  let days = []
  let currentDay = moment(
    `${year}-${month}-1`,
    'YYYY-M-D'
  );
  do {
    days.push(currentDay);
    currentDay = moment(currentDay).add(1, 'days');
  } while(currentDay.month()+1 === month);

  currentDay = moment(days[0]);

  const MONDAY = 0;

  while(currentDay.day() !== MONDAY){
    currentDay = moment(currentDay).subtract(1, 'days');
    days.unshift(currentDay);
  }

  const SUNDAY = 6;

  currentDay = moment(days[days.length-1]);
  while(currentDay.day() !== SUNDAY){
    currentDay = moment(currentDay).add(1, 'days');
    days.push(currentDay);
  }

  return days;
}