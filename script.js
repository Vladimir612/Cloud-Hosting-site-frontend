function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = addCommas(Math.min((timestamp - startTimestamp) / duration, 1));
      obj.innerHTML = addCommas(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.querySelectorAll(".Single");

  obj.forEach(obj2 => {
        animateValue(obj2, 0, parseInt(obj2.innerHTML), 3000);
    });

function addCommas(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        //add comma every 3 digits befor decimal
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return str.join('.');
}
