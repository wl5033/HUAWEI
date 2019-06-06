$(function(){
    $("#smallpic").on("mouseover",function(){
        $(".glass").css("display","block");
        $("#bigpic").css("display","block");
    })
    $("#smallpic").on("mouseout",function(){
        $(".glass").css("display","none");
        $("#bigpic").css("display","none");
    })
    $("#smallpic").on("mousemove",function(e){
       
        disX =e.pageX -$("#smallpic").offset().left -$(".glass").width()/2;//获取鼠标X轴的位置
        disY =e.pageY -$("#smallpic").offset().top -$(".glass").height()/2;//获取鼠标Y轴的位置
        if (disX < 0) {
            disX = 0
        } else if (disX > ($("#smallpic").width() - $(".glass").width())) {
            disX = $("#smallpic").width() - $(".glass").width();
        }

        if (disY < 0) {
            disY = 0
        } else if (disY > ($("#smallpic").height() - $(".glass").height())) {
            disY = $("#smallpic").height() - $(".glass").height();
        }

        $(".glass").css({
            left: disX + "px",
            top: disY + "px"
        })
        var l = disX / ($("#smallpic").width() - $(".glass").width())
        var t = disY / ($("#smallpic").height() - $(".glass").height())

            //右侧放大镜显示的逻辑
            $(".oImg").css({
                left: -l * ($(".oImg").width() - $("#bigpic").width()) + "px",
                top: -t * ($(".oImg").height() - $("#bigpic").height()) + "px"
            })
    })
    

//放大镜下面小图点击上面大图会改变src属性
$(".small_pic li a").mouseover(function () {
    $(this).addClass("sel").parent().siblings().children().removeClass("sel");
    var src= $(this).find("img").attr("src")
    $("#img_1").attr("src",src);
    $(".oImg").attr("src",src);
})
//点击右边箭头图片会往右边移动
var index =0;
$(".btn_bottom").on("click",function(){
    //console.log(1)
    index++;
    if(index>3){
        index=3;
    }
    if($(".phone_pic").css("left")!="-216px"){
        $(".phone_pic").css("left",`${index*-72}px`)
    }
    
});
//点击左边箭头图片会忘左边移动
$(".btn_pic").on("click",function(){
    index--;
    if(index<0){
        index=0;
    }
    
if(($(".phone_pic").css("left")!="0px")){
    var left =parseInt($(".phone_pic").css("left"))
    $(".phone_pic").css("left",`${index*-72}px`)
    //console.log(left)
}

})

//鼠标移上超出隐藏内容显示
$(".product_img").mouseover(function(){
    // console.log(11)
    $(".product").css("overflow","visible");
})
//鼠标移出超出隐藏内容继续隐藏
$(".product_img").mouseout(function(){
    $(".product").css("overflow","hidden");
})
var data;
//鼠标移入下方显示隐藏的div
$(".city_select").on("mouseover",function(){
    clearTimeout(data);
   $(".city_select").css("border-bottom","none");
   $(".none_div").css({
       "border":"1px solid #ccc",
       "border-right":"none",
       "border-top":"none"
    });
   $(".hover_where").css({
       "display":"block",
       "background":"#fff",
       "opacity":"1",
       "z-index":"100"
    });
   $(".city_select a").css({
       "text-decoration": "none",
       "color":"#000",
       "cursor":"pointer"
    })
    $(".city_select img").css(" transform","rotate(180deg)")
})
//鼠标移出下方隐藏div
$(".city_select").on("mouseout",function(){
   data =setTimeout(function(){$(".hover_where").css("display","none");
    $(".none_div").css("border","none");
    $(".city_select").css("border-bottom","1px solid #d6d6d6");
    $(".city_select img").css(" transform","rotate(-180deg)")},1000)
 })

$(".hover_where").on("mouseover",function(){
    clearTimeout(data);
    $(".hover_where").css("display","block");
    $(".city_select").css("border-bottom","none");
    $(".none_div").css({
        "border":"1px solid #ccc",
        "border-right":"none",
        "border-top":"none"
     });
    $(".hover_where").css({
        "display":"block",
        "background":"#fff",
        "opacity":"1",
        "z-index":"100"
     });
    $(".city_select a").css({
        "text-decoration": "none",
        "color":"#000",
        "cursor":"pointer"
     })
     $(".city_select img").css(" transform","rotate(180deg)")
})
$(".hover_where").on("mouseout",function(){
   
    $(".hover_where").css("display","none");
     $(".none_div").css("border","none");
     $(".city_select").css("border-bottom","1px solid #d6d6d6");
     $(".city_select img").css(" transform","rotate(-180deg)");
 })

var t =$("#number_val");
t.val(parseInt(1));
$(".add").click(function(){
    $(".add").css("text-decoration","none")
 t.val(parseInt(t.val())+1);
 if(parseInt(t.val())){
    $('.add').removeAttr('disabled');
 }
})
$(".del").click(function(){
    $(".del").css("text-decoration","none")
    if(parseInt(t.val())>1){
        t.val(parseInt(t.val())-1);
    }else{
        $('.del').attr('disabled','disabled');
    }
})
$(".phone_color li a").on("click",function(){
    
    $(this).addClass("col").parent().siblings().children().removeClass("col");
    $(this).css("text-decoration","none")
})
})
function Car(){}
//获取购物车商品
Car.prototype.getCar = function(){
    //没有数据默认返回一个空数组
    return  JSON.parse( localStorage.getItem('carlist') ) || [];
  }
  
  //添加商品到购物车
  Car.prototype.addToCar = function(product){
     // console.log(product)
    var carlist = this.getCar();
    //1.判断是否有相同商品
    if(this.hasGoods(product.id)){
      for(var i=0; i<carlist.length; i++){
        if(carlist[i].id == product.id){
         //有：数量加一
         carlist[i].number += product.number
        }
      }
    }else{
       //2、没有：直接加入
       carlist.push(product);
    }
    //console.log(5344524524)
    alert('加入成功');
    //要在存入本地存储(要转化字符串进行存储)
    localStorage.setItem('carlist',JSON.stringify(carlist));
    
  }
  
  //判断购物车是否有相同商品
  Car.prototype.hasGoods = function(id){
      
    var carlist = this.getCar();
    //判断id是否相同，
    for(var i=0; i<carlist.length; i++){
      if(carlist[i].id == id){
        return true;
      }
    }
  
    return false;
  }
 