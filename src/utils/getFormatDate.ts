function getFormatDate(date: string): string {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const newDate = new Date(date);

  let stringDate = newDate.toLocaleString('pt-br', options).replace('.,', '');
  stringDate = stringDate
    .substring(0, 1)
    .toUpperCase()
    .concat(stringDate.substring(1));

  return stringDate;
}

export default getFormatDate;
