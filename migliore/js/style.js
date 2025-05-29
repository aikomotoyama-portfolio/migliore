// スライダーjs

// $(document).ready(function(){
//     $(".slider").slick({
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         centerMode: true,
//         centerPadding: "10%",
//         dots: false,
//         slidesToShow: 3,
//         speed: 400,
//         responsive: [{
//     breakpoint: 767, 
//     settings: {slidesToShow: 1,
//         centerPadding: "0%",
//     },
//     },
// ],
//     });
// });

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,          // 画面に表示するスライド数
    slidesToScroll: 1,        // 1枚ずつスクロール
    autoplay: true,
    autoplaySpeed: 0,         // ここを0にするのがコツ
    speed: 5000,              // アニメーションの持続時間（長くして滑らかに）
    cssEase: 'linear',        // リニアで一定速度に
    infinite: true,           // 無限ループ
    arrows: false,            // 矢印非表示
    pauseOnHover: false,
    pauseOnFocus: false,
            responsive: [{
    breakpoint: 767, 
    settings: {slidesToShow: 1,
        centerPadding: "0%",
         autoplaySpeed: 1000,
         speed: 4000,
    },
    },
],

  });
});


//  ハンバーガーメニューjs  
$(function () {
$(".hamburger").on("click", function () {
    $("body").toggleClass("open");
        });

$(".header_nav a").on("click",function () {
    $("body").removeClass("open");
    });
});

// フェードインjs
$(function(){
    $(".js-fade-up").on("inview",function(event,isInview){
        if(isInview){
            $(this).addClass("in-view");
        }else{
            $(this).removeClass("in-view");
        }
    });
});
