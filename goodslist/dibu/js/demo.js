$(function(){   
    //do to ...

   // 二维码
    $(".weixin").hover(function () {
            $(".qrcode").css('display', 'block');
 
        },function(){
            $(".qrcode").css('display', 'none');
        });

        $(".weixin").hover(function () {
                $(".yuanjiao").css('display', 'block');
            },function(){
                $(".yuanjiao").css('display', 'none');
            });


    // 点击切换
    var index = 0;
    $(".btn1").css({'color':'#ccc','cursor':'not-allowed'});
    
    $(".btn2").click(function () {      
        if (index >= 7) {
            index = 8;
            $(".btn2").css({'color':'#ccc','cursor':'not-allowed'});
           console.log(index);
        } else {
            index++;
                $(".btn1").css({'color':'#000','cursor':'pointer'});
        }
        $(".ali").animate({ "left": `${-220 * index}px` }, 500);
    });

    $(".btn1").click(function () {
        if (index <= 1) {
            index = 0;
            $(".btn1").css({'color':'#ccc','cursor':'not-allowed'});
        } else {
        console.log(index)
                $(".btn2").css({'color':'#000','cursor':'pointer'});
            index--;
        }
        $('.ali').animate({ "left": `${-220 * index}px` }, 500);
    });
});