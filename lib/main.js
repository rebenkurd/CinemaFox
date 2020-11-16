$(document).ready(function(){
  //Searching
    $('header .search .btn_open').on('click',function(){ 
        $('header .search').css('width','300px');       
        $(this).css('display','none');
        $('header .search .btn_close').css('display','block');
    });
    $('header .search .btn_close').on('click',function(){ 
        $('header .search').css('width','40px');       
        $(this).css('display','none');
        $('header .search .btn_open').css('display','block');
    });

    $('.header_single_page .search .btn_open').on('click',function(){ 
        $('.header_single_page .search').css('width','300px');       
        $(this).css('display','none');
        $('.header_single_page .search .btn_close').css('display','block');
    });
    $('.header_single_page .search .btn_close').on('click',function(){ 
        $('.header_single_page .search').css('width','40px');       
        $(this).css('display','none');
        $('.header_single_page .search .btn_open').css('display','block');
    });

    //Single movie Panel active container 
    $('main .container .btns .btn_play').on('click',function(){
        $('main .container .play_movie').addClass('active_server');
        $('main .container .server').addClass('active_server');
        $('main .container .navbar').removeClass('active_container');
        $('main .container .btns').removeClass('active_container');
        $('main .container .img_movie').removeClass('active_container');
        $('main .container .bg_img').removeClass('active_container');
        $('main .container .movie_text').removeClass('active_navbar');
        $('main .container .cast').removeClass('active_navbar');
        $('main .container .trailer').removeClass('active_navbar');
        $('main .container .content').removeClass('active_navbar');
        $('main .breadcrumbs ul li').addClass('active_breadcrumbs');
        $('main .breadcrumbs').addClass('active_link_breadcrumbs');
    });
    $('main .breadcrumbs ul #same_page').on('click',function(){
        $('main .container .play_movie').addClass('active_server');
        $('main .container .server').addClass('active_server');
        $('main .container .navbar').removeClass('active_container');
        $('main .container .btns').removeClass('active_container');
        $('main .container .img_movie').removeClass('active_container');
        $('main .container .bg_img').removeClass('active_container');
        $('main .container .movie_text').removeClass('active_navbar');
        $('main .container .series_text').removeClass('active_navbar');
        $('main .container .cast').removeClass('active_navbar');
        $('main .container .download').removeClass('active_navbar');
        $('main .container .trailer').removeClass('active_navbar');
        $('main .container .content').removeClass('active_navbar');
        $('main .breadcrumbs #btn_back').addClass('active_breadcrumbs');
        $('main .breadcrumbs').addClass('active_link_breadcrumbs');
    });

    //Single movie container  active
    $('main .breadcrumbs #btn_back').on('click',function(){
        $('main .container .play_movie').removeClass('active_server');
        $('main .container .server').removeClass('active_server');
        $('main .container .navbar').addClass('active_container');
        $('main .container .btns').addClass('active_container');
        $('main .container .img_movie').addClass('active_container');
        $('main .container .bg_img').addClass('active_container');
        $('main .container .content').addClass('active_navbar');
        $('main .breadcrumbs #btn_back').removeClass('active_breadcrumbs');
        $('main .breadcrumbs').removeClass('active_link_breadcrumbs');
    });
    //Single movie Panel active move play 
    $('main .container .server ul #server1').on('click',function(){
        $('main .container .play_movie .server1').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');
    });
    $('main .container .server ul #server2').on('click',function(){
        $('main .container .play_movie .server2').addClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');    });
    $('main .container .server ul #server3').on('click',function(){
        $('main .container .play_movie .server3').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');    
    });
    $('main .container .server ul #server4').on('click',function(){
        $('main .container .play_movie .server4').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');  
      });
    $('main .container .server ul #server5').on('click',function(){
        $('main .container .play_movie .server5').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');
    });
    $('main .container .server ul #server6').on('click',function(){
        $('main .container .play_movie .server6').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');
        });
    $('main .container .server ul #server7').on('click',function(){
        $('main .container .play_movie .server7').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');
    });
    $('main .container .server ul #server8').on('click',function(){
        $('main .container .play_movie .server8').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');
        });
    $('main .container .server ul #server9').on('click',function(){
        $('main .container .play_movie .server9').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');
        $('main .container .play_movie .server10').removeClass('active_movie_play');
    });
    $('main .container .server ul #server10').on('click',function(){
        $('main .container .play_movie .server10').addClass('active_movie_play');
        $('main .container .play_movie .server2').removeClass('active_movie_play');
        $('main .container .play_movie .server3').removeClass('active_movie_play');
        $('main .container .play_movie .server4').removeClass('active_movie_play');
        $('main .container .play_movie .server5').removeClass('active_movie_play');
        $('main .container .play_movie .server6').removeClass('active_movie_play');
        $('main .container .play_movie .server7').removeClass('active_movie_play');
        $('main .container .play_movie .server8').removeClass('active_movie_play');
        $('main .container .play_movie .server9').removeClass('active_movie_play');
        $('main .container .play_movie .server1').removeClass('active_movie_play');  
      });

    //Single movie Panel active navbar
    $('main .container .navbar ul #content').on('click',function(){
        $('main .container .content').addClass('active_navbar');
        $('main .container .movie_text').removeClass('active_navbar');
        $('main .container .series_text').removeClass('active_navbar');
        $('main .container .cast').removeClass('active_navbar');
        $('main .container .trailer').removeClass('active_navbar');
        $('main .container .download').removeClass('active_navbar');
    });
    $('main .container .navbar ul #movie_text').on('click',function(){
        $('main .container .movie_text').addClass('active_navbar');
        $('main .container .series_text').addClass('active_navbar');
        $('main .container .content').removeClass('active_navbar');
        $('main .container .cast').removeClass('active_navbar');
        $('main .container .trailer').removeClass('active_navbar');
        $('main .container .download').removeClass('active_navbar');

    });

    $('main .container .navbar ul #cast').on('click',function(){
        $('main .container .cast').addClass('active_navbar');
        $('main .container .content').removeClass('active_navbar');
        $('main .container .movie_text').removeClass('active_navbar');
        $('main .container .series_text').removeClass('active_navbar');
        $('main .container .trailer').removeClass('active_navbar');
        $('main .container .download').removeClass('active_navbar');
    });
    $('main .container .navbar ul #trailer').on('click',function(){
        $('main .container .trailer').addClass('active_navbar');
        $('main .container .content').removeClass('active_navbar');
        $('main .container .movie_text').removeClass('active_navbar');
        $('main .container .series_text').removeClass('active_navbar');
        $('main .container .cast').removeClass('active_navbar');
        $('main .container .download').removeClass('active_navbar');

    });
    $('main .container .btns .btn_download').on('click',function(){
        $('main .container .download').addClass('active_navbar');
        $('main .container .content').removeClass('active_navbar');
        $('main .container .movie_text').removeClass('active_navbar');
        $('main .container .series_text').removeClass('active_navbar');
        $('main .container .cast').removeClass('active_navbar');
        $('main .container .trailer').removeClass('active_navbar');
    });

    //Sliders
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        lazyLoad:true,
    });
    $('.slider').slick({
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 1000,
        arrows:false
      });
      $('.card-movie').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        margin:10,
      });
});