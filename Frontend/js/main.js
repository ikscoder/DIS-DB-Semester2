function toggleFullScreen() {
  if (
    !document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

function showHint(i) {
  $(".tap-target" + i).tapTarget("open");
  //i = i < 4 ? i + 1 : 1;
}

function toast(mes, timeout, style) {
  mes = typeof mes !== "undefined" ? mes : "";
  timeout = typeof timeout !== "undefined" ? timeout : 4000;
  if (style === undefined) {
    Materialize.toast(mes, timeout);
  } else {
    Materialize.toast(mes, timeout, style);
  }
}