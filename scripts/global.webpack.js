var $ = require('npm-zepto');
var Cookies = require('js-cookie');

$(function () {
  var cookiesElement = $('#cookies');
  if (Cookies.get('cookies_closed')) {
    cookiesElement.hide();
  } else {
    var marginElement = cookiesElement.prev();
    var closeButton = $('<button class="btn">Close</button>').on('click', function () {
      Cookies.set('cookies_closed', true);
      cookiesElement.hide();
      marginElement.css('margin-bottom', 'inherit');
    });
    cookiesElement
      .addClass('js-enabled')
      .find('.block-container')
      .append(closeButton);
    marginElement.css('margin-bottom', cookiesElement.height());
  }
});