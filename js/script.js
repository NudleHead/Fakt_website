window.addEventListener('resize', setMargin);
window.addEventListener('load', setMargin);
const navbar = $('.navbar')[0];
const space = $('#space1')[0];
const trainer = $('img[alt="trainer"]')[0];
const profile = $('.profile-card')[0];
const profile1 = $('.profile-card')[1];
const profileFigcaption = $('figcaption')[0];


function setMargin() {
    var height = navbar.clientHeight;
    space.style.marginTop = height + 'px';
    var imgHeight = trainer.clientHeight + profileFigcaption.clientHeight;
    var spaceHeight = space.clientHeight;
    profile.style.height = imgHeight + 'px';
    profile1.style.height = imgHeight + 'px';
    console.log(height, imgHeight, spaceHeight);
}
$(document).ready(function () {
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    $("#collapsibleNavbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});