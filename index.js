import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const zoneElement = document.querySelector(".zone");
const currentTimeElement = document.querySelector(".currentTime");
const currentDateElement = document.querySelector(".currentDate");

const getCurrent = () => {
  const zone = dayjs.tz.guess();
  const currentTime = dayjs().format("HH:mm:ss");
  const currentDate = dayjs().format("dddd, D MMM, YYYY");

  zoneElement.innerHTML = zone;
  currentTimeElement.innerHTML = currentTime;
  currentDateElement.innerHTML = currentDate;
};

setInterval(getCurrent, 1000);
