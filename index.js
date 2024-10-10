window.addEventListener('orientationchange', function() {
  if (window.innerHeight > window.innerWidth) {
    document.querySelector('.container').style.transform = 'rotate(0deg)';
  } else {
    document.querySelector('.container').style.transform = 'rotate(90deg)';
  }
});