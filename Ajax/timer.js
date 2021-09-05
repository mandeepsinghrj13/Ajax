function showTime() {
  const date = new Date();
  return (
    date.getHours() +
    "Hrs:" +
    date.getMinutes() +
    "Mins:" +
    date.getSeconds() +
    "Secs"
  );
}

function showSessionExpire() {
  console.log("Activity-B: Your session expired at " + showTime());
}

console.log("Activity-A : tigeering Activity-B at: " + showTime());
setTimeout(showSessionExpire, 5000);
console.log(
  "Activity-A : Triggered Activity-B at " +
    showTime() +
    " will executeafter 5 seconds"
);
