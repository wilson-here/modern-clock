import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import MicroModal from "micromodal";

dayjs.extend(utc);
dayjs.extend(timezone);

const zoneSelect = document.querySelector(".zoneSelect");
const zoneElement = document.querySelector(".zone");
const currentTimeElement = document.querySelector(".currentTime");
const currentDateElement = document.querySelector(".currentDate");

let zone = dayjs.tz.guess();

const resetTimezoneOption = () => {
  const defaultOption = zoneSelect.firstElementChild;
  defaultOption.selected = "true";
};
const getCurrentTime = () => {
  const currentTime = dayjs().tz(zone).format("HH:mm:ss");
  const currentDate = dayjs().tz(zone).format("dddd, D MMM, YYYY");

  zoneElement.innerHTML = zone;
  currentTimeElement.innerHTML = currentTime;
  currentDateElement.innerHTML = currentDate;
};

const createTimezoneOption = (val) => {
  const option = `
  <option data-micromodal-close value="${val}">
    ${val}
  </option>
  `;
  zoneSelect.innerHTML += option;
};

Intl.supportedValuesOf("timeZone").forEach((val) => {
  createTimezoneOption(val);
});
const changeTimezone = () => {
  zone = zoneSelect.value;
  getCurrentTime();
};
zoneSelect.onchange = changeTimezone;

// **********************************
resetTimezoneOption();
setInterval(getCurrentTime, 1000);
MicroModal.init({
  openTrigger: "data-micromodal-trigger",
  closeTrigger: "data-micromodal-close",
  openClass: "is-open",
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
  debugMode: true,
});
