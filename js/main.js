$(function(){
    // nav
    $('.gnb>li').on('mouseenter',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.gnb>li').on('mouseleave',function(){
        $(this).removeClass('active');
    })

    $('.gnb>li').on({
        mouseenter:function(){
            $(this).children('.lnb').show(600)
            $('.lnbBg').stop().slideDown(500)
        },
        mouseleave:function(){
            $(this).children('.lnb').hide()
            $('.lnbBg').stop().slideUp(500)
        }
    })
    $('.gnb>li:last').on({
        mouseenter:function(){
            $('.lnbBg').hide()
        }
    })


    // Mobile Nav
    $('#mGnb>li>a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.mSub').stop().slideUp(500);
        } else {
            $('#mGnb>li>a').removeClass('active').next().stop().slideUp(500);
            $(this).addClass('active').next('.mSub').stop().slideDown(500);
        }
    })

    $('.mSub>li>a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.mThird').stop().slideUp(500);
        } else {
            $('.mSub>li>a').removeClass('active').next().stop().slideUp(500);
            $(this).addClass('active').next('.mThird').stop().slideDown(500);
        }
    })

    $('.hamB>a').click(function(e){
        e.preventDefault();
        $('#mNav').stop().animate({'left':0},500)
        $('.mNavBg').show(300);
    })
    $('.mClose>a').click(function(e){
        e.preventDefault();
        $('#mNav').stop().animate({'left':"-100%"},500)
        $('.mNavBg').hide();
    })
})

