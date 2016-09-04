/*
// 1.index 设置 start
$(document).ready(function(){
	$("#btn1").click(function(){
        $("#p1").text("wojiao111");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href='http://www.baidu.com' >百度一下</a>");
    });
    $('#btn3').click(function(){
        $('#i3').val('讨厌332');
    });
    $('#btn4').click(function () {
       // $('#i4').attr('type','button');   修改单个属性；
        $('#i4').attr({
            'type':'button','id':'aid','value':'aaaa'
        });
        //修改多个属性，属性和属性值间用 ：号隔开，属性和属性直接用，号隔开
    });
    $('#btn5').click(function(){
       $('#p5').text(function (i, ot) {
            return "old:"+ot+" new:我是新内容"+(i);
       });
        // 回调
    });
})
 // 1.index 设置 end
*/

/*
* 2.index 添加 start
* append    在元素内容后面插入
* prepend   在元素内容前面插入
* before
* after

 $(document).ready(function () {
 $('#btn1').click(function(){
 //    $('#p1').append(','+"this is my frist append"+',')
 //    $('#p1').prepend(','+"this is my frist prepend"+',');
 });
 $('#btn2').click(function(){
 //    $('#p2').before(','+"this is my frist before"+',');
 $('#p2').after(','+"this is my frist after"+',');
 });
 });

 function apendText(){
 /*
 * 三种方式添加元素
 * 1.html
 * 2.jQuery
 * 3.DOM
 * */
/*
var t1 = "<p>html 添加</p>";
var t2 = $('<p></p>').text('jquery 添加');
var t3 = document.createElement('p');
t3.innerHTML='DOM 添加';
$('body').append(t1,t2,t3);
}


* 2.index 添加 end
* */

// 3.index 删除 start
// 3.index 删除 end
// remove empty
$(document).ready(function () {
    $('#btn1').click(function () {
        $('#div').remove();  // 删除 #div 元素；
        //$('#div').empty();  //删除 #div 元素内的子元素；
    });
});

