/**
 * Created by Administrator on 2016/9/4.
 */
$(document).ready(function(){
    $('#btn1').click(function () {
        $('.div1').fadeIn(1000);
        $('.div2').fadeIn(1000);
        $('.div3').fadeIn(1000);
    });
    $('#btn2').click(function () {
        $('.div1').fadeOut(1000);
        $('.div2').fadeOut(1000);
        $('.div3').fadeOut(1000);
    });
    $('#btn3').click(function () {
        $('.div1').fadeToggle(1000);
        $('.div2').fadeToggle(1000);
        $('.div3').fadeToggle(1000);
    });
    $('#btn4').click(function () {
        $('.div1').fadeTo(1000,0.5);
        $('.div2').fadeTo(1000,1);
        $('.div3').fadeTo(1000,0.7);
    });
});