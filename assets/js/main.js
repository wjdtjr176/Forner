

// 로딩
gsap.to('.loading .svg-wrap', {
    scrollTrigger:{
        trigger:'#visual',
        start:"0% 0%",
        end:"100% 50%",
        markers:false,
        scrub:0,     
    },
    opacity:0
})


// 인트로 그룹
let intro = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-intro .group-intro',
        start:"20% 50%",
        end:"100% 50%",
        // markers:true,
        toggleActions:"play none none reset"
    },
})
intro.from('.sc-intro .title-area',{
    opacity:0,
    stagger:0.1
})
intro.from('.sc-intro .thumb',{
    height:'0%',
    opacity:0,
    duration:0.5,
    stagger:0.1
},'a')
intro.from('.sc-intro .thumb img',{
    scale:1.5,
    duration:0.8
},'a+=0.1')
intro.from('.sc-intro .bottom-area .desc',{
    opacity:0
},'b')
intro.from('.sc-intro .bottom-area .line',{
    opacity:0,
    scale:0
},'b')



gsap.to('.sc-intro .group-life',{
    scrollTrigger:{
        trigger:'.sc-intro .group-life .text-area',
        start:"0% 0%",
        endTrigger:".sc-recommend",
        end:"0% 100%",
        // markers:true,
        // pin:true,
        // pinSpacing:false,
    }
})









// 슬라이드 영역
const recommendSlide1 = new Swiper('.sc-recommend .text-slide',{
    effect:"fade",
    allowTouchMove:false,
    speed:1000,
})
const recommendSlide2 = new Swiper('.sc-recommend .img-slide',{
    direction:"vertical",
    parallax:true,
    allowTouchMove:false,
    speed:1000,
})



// 라이프 그룹
ScrollTrigger.create({
    trigger:".sc-intro .group-life .inner2",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    onEnter:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-100
        })
    },
    onLeaveBack:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:0
        })
    }
})
ScrollTrigger.create({
    trigger:".sc-intro .group-life .inner3",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    onEnter:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-200
        })
    },
    onLeaveBack:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-100
        })
    }
})
ScrollTrigger.create({
    trigger:".sc-intro .group-life .inner4",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    onEnter:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-300
        })
    },
    onLeaveBack:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-200
        })
    }
})
ScrollTrigger.create({
    trigger:".sc-intro .group-life .inner5",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    onEnter:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-400
        })
    },
    onLeaveBack:function(){
        gsap.set('.sc-intro .group-life .word .sub span',{
            yPercent:-300
        })
    }
})





// 슬라이드 영역 gsap  
ScrollTrigger.create({
    trigger:".sc-recommend",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    scrub:0,
    onUpdate:function(self){
        console.log(Math.floor(self.progress*6));
        recommendSlide1.slideTo(Math.floor(self.progress*6))
        recommendSlide2.slideTo(Math.floor(self.progress*6))
    }
})

// 마우스커서
let x, y;

$(window).mousemove(function(e){
   x = e.clientX;
   y = e.clientY;


   gsap.to('.cursor span',{
    x:x,
    y:y,
    stagger:0.1
   })
})
$('.sc-recommend .sticky .swiper.img-slide').hover(function(){
    if ($('.cursor').hasClass('show')) {
        $('.cursor').removeClass('show');
    } else {
        $('.cursor').addClass('show');
    }
})












// 콘택트 영역 gsap
gsap.to('.sc-contact .contact-area',{
    yPercent:-20,
    scrollTrigger:{
        trigger:".sc-contact",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    },
})



// 푸터 영역 gsap 
footer = gsap.timeline({
    scrollTrigger:{
        trigger:'#footer',
        start:"0% 100%",
        end:"0% 100%",
        // markers:true,
        toggleActions:"none play none reset"
    },
})
footer.from('#footer svg',{
    yPercent:100,
    opacity:1,
    duration:0.7
})
footer.from('#footer .sns-item',{
    yPercent:100,
    opacity:1,
    duration:0.7
})



















$('[data-motion="fade"]').each(function(i,el){
    gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            // markers:true,
            toggleActions:"play reverse play reverse"
        },
        opacity:0,
        duration:1,
    })
})


// we bring brands to life~
$('[data-motion="fade time"]').each(function(i,el){
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "0% 80%",
            end: "100% 0%",
            markers: false,
            scrub:1
        },
        opacity: 0,
        duration: 1,
        stagger: 0.1 
    });
});



// 위로나오게
$('[data-motion3="up"]').each(function(i,el){
    gsap.from(el,{
        scrollTrigger:{
            trigger:el, 
            start:"0% 100%",
            end:"100% 0%",
            // markers:true,
            toggleActions:"play none none reset",
            onLeaveBack: function() {                
                gsap.set(el, { opacity: 0, yPercent: 80 });
            }
        },
        yPercent:80,
        duration:0.8,
        opacity:0,
        stagger:0.1,
    })
})

























