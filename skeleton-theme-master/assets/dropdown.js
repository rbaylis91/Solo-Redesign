var $j = jQuery.noConflict();
$j(document).ready(function () {
$j('ul.primary li').click(function () {
    var a = this;
    if ($j('ul', this).is(':visible')) {
        $j('ul', this).slideUp(function () {
            $j(a).removeClass('active')
        })
    } else {
        $j('ul.drop').slideUp();
        $j('ul.primary li').removeClass('active');
        $j('ul', this).slideDown();
        $j(a).addClass('active')
    }
});
$j('body').click(function (a) {
    if (!$j(a.target).is('a')) {
        $j('ul.drop').slideUp();
        $j('ul.primary li').removeClass('active')
    }
});
$j(function () {
    $j('.mobile-nav').click(function (e) {
        $j('.primary').slideToggle(0, "swing");
        e.stopPropagation()
    });
    $j(window).resize(function() {
        $j('ul.drop').slideUp();
        $j('ul.primary li').removeClass('active')
        $j('ul.primary').removeAttr('style')
    });
})
});