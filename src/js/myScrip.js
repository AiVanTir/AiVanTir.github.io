"use strict"

$(document).ready(function(){
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements= $('.imaga__shakal');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

function onEntry(entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    })
}

var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('h5').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});

setTimeout(function(){ 
    $("#modalopen").click();
}, 10000);

/*alert("Привет, что бы расчитать стоимость будущего сайта, мне нужно задать пару вопросов");
let type = prompt("Какой тип сайта вам нужен? 1.корпоративный(+1000р) 2.сайт-визитка(+2000р)", "");
let disign = prompt("Какой дизайн сайта вам нужен? 1.шаблонный(+1000р) 2.оригинальный(+2000р) 3.шедевр(+3000р)", "");
let adapt = prompt("Ваш сайт должен быть адаптивным для всеъ устройств? 1. только копьютер(+1000р) 2.только телефон(+2000р) 3.абсолютная адаптивность(+3000р)", "");
let stoimres = 0;
let datares = 0;
if(type==1) {stoimres+=1000;}
else if(type==2) {stoimres+=2000;}
else alert("Неверный формат ввода, перезагрузите страницу и заполните заново")
if(disign==1) {stoimres+=1000;}
else if(disign==2) {stoimres+=2000;}
else if(disign==3) {stoimres+=3000;}
else alert("Неверный формат ввода, перезагрузите страницу и заполните заново")
if(adapt==1) {stoimres+=1000}
else if(type==2) {stoimres+=2000;}
else if(type==3) {stoimres+=3000;}
else alert("Неверный формат ввода, перезагрузите страницу и заполните заново")
alert("Стоимость вашего сайта составит " + stoimres + "р");

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i, el) => {
        
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});*/


 $('a[href^="#"]').click(function(){
     let valHref = $(this).attr("href");
     $('html, body').animate({scrollTop: $(valHref).offset().top - 20 + "px"})
 });
