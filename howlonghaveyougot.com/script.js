const bigday = document.querySelector('#bigday');
const remaining = document.querySelector('#remaining');

function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  return new Intl.DateTimeFormat('en', options).format(dateString);
}

function calculateRemainingYears(bigday) {
  var ageDifMs = new Date(bigday) - Date.now();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

randomDate = formatDate(getRandomDate(new Date(), new Date(2099, 12, 30)));

bigday.innerText = randomDate;
remaining.innerText = calculateRemainingYears(randomDate);
