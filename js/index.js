//轮播图
(function ($) {
    function banner(id) {
        var $banner = $(id);
        var $bannerInner = $banner.find('.goto');
        var $focusList = $banner.find('.btn');
        var $left = $banner.find('.prev');
        var $right = $banner.find('.next');
        var $imgs = null;
        var $lis = null;
        var $data = $bannerInner.find('li');
        var step = -1;
        var timer = null;
        var interval = 3500;
        $lis = $focusList.find('li');
        timer = window.setInterval(autoMove, interval);
        function autoMove() {
            if (step == $data.length - 1) {
                step = -1;
            }
            step++;
            setBanner();
        }

        function setBanner() {
            $.each($data, function (index, item) {
                if (index == step) {
                    $(item).css('display', 'block').animate({opacity: 1}, 800);
                } else {
                    $(item).css({
                        display: 'none',
                        opacity: 0
                    });
                }
            });
            $.each($lis, function (index, item) {
                index == step ? $(item).addClass('bg') : $(item).removeClass('bg');
            });
        }

        $banner.on('mouseover', function () {
            window.clearInterval(timer);
            $left.css('display', 'block');
            $right.css('display', 'block');
        }).on('mouseout', function () {
            timer = window.setInterval(autoMove, interval);
        });
        (function bindEventForLis() {
            $.each($lis, function () {
                $(this).on('click', function () {
                    step = $(this).index();
                    setBanner();
                });
            });
        })();
        $left.on('click', function () {
            if (step == 0) {
                step = $data.length;
            }
            step--; //
            setBanner();
        });
        $right.on('click', autoMove);
    }

    $.extend({
        banner: banner
    });
})(jQuery);
$.banner('#lb1');
//选项卡
jQuery.tab = function (tabtit, tab_conbox, shijian) {
    $(tabtit).find("li:first").addClass("thistab").show();
    $(tab_conbox).find("div:first").show();
    $(tabtit).find("li").bind(shijian, function () {
        if (tabtit == '#tab4') {
            var activeindex = $(tabtit).find("li").index(this);
            $(tab_conbox).children().eq(activeindex).addClass("thistab").siblings("div").removeClass("thistab");
            $(tab_conbox).children().eq(activeindex).show().siblings().hide();
            return;
        }
        $(this).parent().parent().addClass("thistab").siblings("div").removeClass("thistab");
        var activeindex = $(tabtit).find("li").index(this);
        $(tab_conbox).children().eq(activeindex).show().siblings().hide();
        return false;
    });
};
$.tab("#tab1", "#tabcon", "mouseenter");
$.tab("#tab2", "#tabcon", "mouseenter");
$.tab("#tab3", "#tabcon2", "mouseenter");
$.tab("#tab4", "#tabcon4", "mouseenter");
$('#tab3').find("li:first").addClass("bg");
$('#tab3').find('li').bind('mouseenter', function () {
    $(this).addClass('bg').siblings().removeClass('bg');
});
//滚动条
$(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
        $(".nav").addClass('fixed')
    } else {
        $(".nav").removeClass("fixed");
    }
}).trigger("scroll");

$(".gotop").click(function () {
    $('body,html').animate({scrollTop: 0}, 300);
});
function scroll(name, top) {
    $(name).click(function () {
        $('body,html').animate({scrollTop: top}, 0);
    });
}
scroll('.video', 1700);
scroll('.star', 4040);
scroll('.team', 5022);
scroll('.shequ', 5989);


