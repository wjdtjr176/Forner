


loading = gsap.timeline({
    onComplete:function(){
        $('.loading').addClass('absol');
        $('body').removeClass('hidden');
    }
})
loading.from('.loading .svg-wrap .line1',{delay:1,opacity:0,yPercent:100},'a')
loading.from('.loading .svg-wrap .line2',{delay:1,opacity:0,yPercent:-100},'a')
loading.to('.loading .svg-wrap .line1 span:nth-child(2)',{
    left:'614px',
    transform:'translateX(0)',
    delay:0.5
},'b') 
loading.to('.loading .svg-wrap .line2 span:nth-child(1)',{
    right:'307px',
    transform:'translateX(0)',
    delay:0.5
},'b')
loading.to('.loading .svg-wrap .line2',{
    transform: 'translateY(0)',
    top: '0%',
    delay:0.5
}) 
loading.to('.loading .dimmed',{
    height:0,
}) 



// 메뉴버튼
menu = gsap.timeline({
    paused:true,
})
menu.to('.btn-menu .word',0.2,{
    opacity:0,
    stagger:0.05,
})
    .to('.btn-menu .word',0.2,{
        opacity:1,
        stagger:0.05,
    });



// 팝업메뉴
$('.btn-menu').hover(function(){
    menu.restart();
})

$('.btn-menu').click(function(){
    $('.pop-menu').addClass('on');
    $('body').addClass('no-scroll');
    pop.play();
})
$('.btn-menu.close').click(function(){
    $('.pop-menu').removeClass('on');
    $('body').removeClass('no-scroll');
    pop.restart().pause();
})

pop = gsap.timeline({
    paused:true,
    
})

pop.from('.pop-menu .txt',{
    yPercent:100,
    stagger:0.1,
    duration:1
},'a')
pop.from('.pop-menu .num',{
    xPercent:-100,
    opacity:0,
    duration:0.8
},'a')


