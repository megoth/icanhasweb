var $ = require('npm-zepto');

$.fn.presentation = function (navigation) {
    var sections = $(this).find("section:not(#description)");

    $(navigation).find("a").on('click', function (e) {
        var newSection = $(e.currentTarget).attr("href");
        openSection(newSection);
    });

    var items = this.each(function () {
        $(this).find("section:not(#description)").addClass("closed").removeClass("open")
            .find("h3:first-child")
            .attr('tabindex', 0)
            .on('click keyup', function (e) {
                if (e.type === 'keyup' && e.keyCode !== 13) return;
                var newSection = $(e.currentTarget).parent().attr("id");
                location.hash = newSection;
                openSection("#" + newSection);
            });
    });

    var section = location.hash;
    if (section !== "") {
        openSection(section);
    }

    return items;

    function openSection (newSection) {
        var $section = $(newSection),
            toggle = $section.hasClass("open");
        sections.removeClass("open");
        $section.toggleClass("open", !toggle);
        $section.find('h3:first-child').focus();
    }
};

$(function () {
    $("#CvContent").presentation("#CvNavigation");
});