require('blissfuljs'); // exposes Bliss through $                    
var Cookies = require('js-cookie');

$.ready().then(function () {
  var cookiesElement = $('#cookies');
  if (Cookies.get('cookies_closed')) {
    cookiesElement.style.display = 'none';
  } else {
    var marginElement = cookiesElement.previousElementSibling;
    var closeButton = $.create('button', {
      className: 'btn',
      textContent: 'Close',
      type: 'button'
    });
    closeButton._.events({
      'click': function() {
        Cookies.set('cookies_closed', true, { expires: 3650 });
        cookiesElement.style.display = 'none';
        marginElement._.style({ 
          'margin-bottom': 'inherit' 
        });
      }
    });
    cookiesElement.classList.add('js-enabled');
    $('.block-container', cookiesElement)._.contents(closeButton);
    marginElement._.style({
      'margin-bottom': '50px' // magic number - ugly, but bah
    });
  }
});