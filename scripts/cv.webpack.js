require('blissfuljs'); // exposes Bliss through $                    

$("#CvNavigation")._.delegate('click', 'a', function (event) {
    openSection(event.srcElement.hash.substr(1), true);
});

$.ready().then(function () {
    $$('#CvContent section:not(#description)').forEach(function (section) {
        section.classList.add('closed');
        section.classList.remove('open');
        var title = $('h3:first-child', section);
        title._.attributes({
            tabindex: 0
        });
        title._.events({
            'click keyup': function (event) {
                if (event.type === 'keyup' && event.keyCode !== 13) return;
                var sectionId = event.srcElement.parentElement.id;
                location.hash = sectionId;
                openSection(sectionId);
            }
        });
    });

    var sectionId = location.hash;
    if (sectionId !== "") {
        openSection(sectionId.substr(1));
    }
});

function openSection (newSectionId, toggle) {
    var section = $('#'+newSectionId);
    toggle = toggle !== undefined ? toggle : !section.classList.contains('open');
    $$('#CvContent section:not(#description)').forEach(function (section) {
        section.classList.remove('open');
    });
    section.classList.toggle("open", toggle);
    setTimeout(function () { // focus will be set upon scrolling if not done this way
        $('h3:first-child', section).focus();
    }, 10);
}