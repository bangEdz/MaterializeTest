//event pada link
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    //    tangkap elemen
    var elementTujuan = $(tujuan);


    //pindahkan scroll

    $('.page-scroll').on('click', function (e) {

        var tujuan = $(this).attr('href');

        var elemenTujuan = $(tujuan);

        $('html , body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 500, 'swing');

        e.preventDefault();
    });
    // $('html.body').scrollTop('700');

    // console.log($('html.body').scrollTop());

    // e.preventDefault();

    //console.log(elementTujuan.offset().top);

});

// parallax
// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

})

// jumbotron
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'

    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'

    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'

    });

    // portofolio
    if (wScroll > $('.portofolio').offset().top - 100) {
        $('.portofolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');

            }, 300 * (i + 1));
        });
        // 


    }

});