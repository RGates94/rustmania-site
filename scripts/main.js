var screenshot = document.querySelector('img');

screenshot.onclick = function() {
    if(screenshot.getAttribute('src') === 'images/screenshot-1.png') {
      screenshot.setAttribute ('src','images/screenshot-2.png');
    } else {
      screenshot.setAttribute ('src','images/screenshot-1.png');
    }
}