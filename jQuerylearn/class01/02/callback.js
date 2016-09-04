/**
 * Created by Administrator on 2016/9/4.
 */
$(document).ready(function(){
    $('#btn1').click(function () {
        //$('#p1').hide(1000, function () {
        //    alert('动画结束，这个方法被称为回调')
        //});
        $('p').css('color','red').slideUp(1000).slideDown(1000, function () {
                alert('动画结束，这个方法被称为回调');
        });
    });
});