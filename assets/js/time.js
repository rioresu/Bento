// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
  const monthNames = [
    "January",
    "February",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ("0" + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = "";

  if (CONFIG.twelveHourFormat) {
    ampm = hh >= 12 ? " pm" : " am";
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  document.getElementById("hour").innerText = hh;
  document.getElementById("separator").innerHTML = " : ";
  document.getElementById("minutes").innerText = min + ampm;

  document.getElementById("month").innerText = mm;
  document.getElementById("day").innerText = dd;

  setTimeout(displayClock, 1000);
}
