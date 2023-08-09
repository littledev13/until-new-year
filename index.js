// * 1 detik = 1000 ms
// * 1 menit = 60 detik = 60000 ms
// * 1 jam = 60 menit = 3600 detik =3600000 ms
// * 1 hari = 24 jam = 1440 menit = 86400 detik = 86400000 ms

const now = new Date();
const baru = now.getFullYear() + 1;
const newYear = new Date(`January 1, ${baru} 0:0:00`);
const beda = newYear.getTime() - now.getTime();
let hari = parseInt(beda / 86400000);
let jam = parseInt((beda % 86400000) / 3600000);
let menit = parseInt((beda % 3600000) / 60000);
let detik = parseInt((beda % 60000) / 1000);
const days = document.querySelector(".days h2");
const hours = document.querySelector(".hours h2");
const minutes = document.querySelector(".minutes  h2");
const seconds = document.querySelector(".seconds h2");

days.innerText = hari;
hours.innerText = jam;
minutes.innerText = menit;
seconds.innerText = detik;

// ! WARN
const tukar = beda % 1000;
setTimeout(() => {
  detik--;
  days.innerText = hari;
  hours.innerText = jam;
  minutes.innerText = menit;
  seconds.innerText = detik;
  setInterval(() => {
    days.innerText = hari;
    hours.innerText = jam;
    minutes.innerText = menit;
    seconds.innerText = detik;
    if (detik == 0) {
      detik = 60;
      if (menit == 0) {
        menit = 59;
        if (jam == 0) {
          jam = 23;
        }
      }
    }
    detik--;
  }, 1000);
}, tukar);

// !
// console.log(newYear.getTime());
// console.log(now.getTime());
// console.log(parseInt(beda / 3600000 / 24) + " hari");
// console.log(parseInt((beda % 86400000) / 60000 / 60) + " jam ");
// const jam = (beda % 86400000) / 60000 / 60;
// console.log(parseInt((jam - parseInt(jam)) * 60) + " Menit");
// const detik = parseInt((jam - parseInt(jam)) * 60);
// const second = (jam - parseInt(jam)) * 60 - detik;
// console.log(beda);
