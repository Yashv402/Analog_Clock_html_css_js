setInterval(() => {
  let hh = document.getElementById("hh");
  let ss = document.getElementById("ss");
  let mm = document.getElementById("mm");
  let sec_dot = document.querySelector(".sec_dot");
  let min_dot = document.querySelector(".min_dot");
  let hr_dot = document.querySelector(".hr_dot");
  let hr = document.getElementById("hr");
  let mn = document.getElementById("mn");
  let sc = document.getElementById("sc");


  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hh.style.strokeDashoffset = 510 + (510 * h) / 12;
  // 12 hr clock
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;
  // 60 minutes
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;
  // 60 minutes

  sec_dot.style.transform = `rotateZ( ${s *6}deg)`;
  //   360 / 60 seconds = 6
  min_dot.style.transform = `rotateZ( ${m *6}deg)`;
  //   360 / 60 minute = 6
  hr_dot.style.transform = `rotateZ( ${h *30}deg)`;
  //   360 / 12 hour = 12

  hr.style.transform = `rotateZ(${h* 30}deg)`;
  mn.style.transform = `rotateZ(${m* 6}deg)`;
  sc.style.transform = `rotateZ(${s* 6}deg)`;


});
