      //菜单
(function($) {


    var angleStart = -360;

    // jquery rotate animation
    function rotate(li, d) {
        $({ d: angleStart }).animate({ d: d }, {
            step: function(now) {
                $(li)
                    .css({ transform: 'rotate(' + now + 'deg)' })
                    .find('label')
                    .css({ transform: 'rotate(' + (-now) + 'deg)' });
            },
            duration: 0
        });
    }

    // show / hide the options
    function toggleOptions(s) {
        $(s).toggleClass('open');
        var li = $(s).find('li');
        var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
        for (var i = 0; i < li.length; i++) {
            var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
            $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
        }
    }

    $(".bot-icon").mouseover(function() {
        $(this).addClass("bot-active");
        $(".menu-box").css("z-index", "9999");
    })


    $('.bot-icon').on("click", function(e) {
        $(".menu-box").css("z-index", "9999")
        toggleOptions($('.selector'));
    });
    $("div.menu-box").mouseleave(function() {
        $(".menu-box").css("z-index", "-1");
        $(".selector").removeClass("open").css("z-index", "-1");
        $(".selector ul li").removeAttr("style");
        $(".bot-icon").removeClass("bot-active")
    })
})(jQuery)