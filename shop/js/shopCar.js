var reload
$(function(){
    var sp=localStorage.getItem("carlist");
    //判断本地存储中是否存在商品以显示页面加载样式；
        function macar(){
            
            if(!sp){
                $(".shopCar").css("display","block");
                $(".haveCar").css("display","none");
                        //没有商品的购物车
                //通过Ajax访问服务器数据用以推荐热门商品
                $.get("./json/good.json",function(res){
                    // alert(1)
                    // console.log( $("#hotul>li").eq(1).html());
                    for(var i=0;i< $("#hotul>li").length;i++){
                        $("#hotul>li").eq(i).html(`<a href="">
                        <img src=${res[i].url} alt="">
                        <p>${res[i].title}</p>
                    </a>
                    <span>￥${res[i].money}</span>`)
                        
                    }
                
                    // return res;
                },"json")
                // console.log(1)
            }else{
                $(".shopCar").css("display","none");
                $(".haveCar").css("display","block");
                // console.log(2)
                //有商品的购物车！！ 需要通过详情页点击加入购物车在本地存储添加商品信息；
                //再从购物车页面加载本地存储的信息显示再购物车页面上,
                // console.log(sp)

                //通过ajax访问服务端获取信息用来推荐搭配

                $.get("./json/good.json",function(res){
                    // alert(1)
                  
                    // console.log( $("#uldp>li").eq(1).html());
                    for(var i=6;i< $("#uldp>li").length+6;i++){
                        // res.num=1;
                        var json_str = JSON.stringify(res[i]);
                        // console.log(res[i]);
                        $("#uldp>li").eq(i-6).html(`
                        <a href="">
                        <img src=${res[i].url}>
                        <p> ${res[i].title}</p>
                        </a>
                        <span>￥${res[i].money}</span>
                        <p class="addp" onclick='dpadd(${json_str})'>加入购物车</p>`
                        )
                        
                    }
                
                    // return res;
                },"json")
                //-------------------------
                var str=``;
                sp = JSON.parse(sp);
                var allNum=0;
                var allP=0;
                var allyh=0;
                for(var i=0;i<sp.length;i++){
                        allNum+=sp[i].num;
                        allP+=sp[i].money*parseInt(sp[i].num);
                        allyh+=sp[i].myh*parseInt(sp[i].num);
                       str+= `<div class="sp-main">
                        <div class="sp-top">
                            <p class="sp-p"><input type="checkbox" class="ck" id=${"ck"+sp[i].id}><label for=${"ck"+sp[i].id} class="label" id=${"lab"+sp[i].id} onclick='fnc(this,${sp[i].id})'></label></p>
                            <a href="" class="top-pic">
                                <img src=${sp[i].url} alt="${sp[i].title}">
                            </a>
                            <ul>
                                <li>
                                    <a href="" class="shangpin">${sp[i].content}</a>
                                </li>   
                                <li class="danjia">
                                    <p class="xianjia">¥${sp[i].money}.00</p>
                                    <p class="yuanjia">¥${parseInt(sp[i].money)+parseInt(sp[i].myh)}.00</p>
                                </li>
                                <li >
                                    <div class="sp-num">
                                        <a  class="jian" onclick='jian(${sp[i].id})' id=${"jian"+sp[i].id}>-</a>
                                        ${sp[i].num}
                                        <a  class="jia" onclick='jia(${sp[i].id})' id=${"jia"+sp[i].id}>+</a>
                                    </div>
                                </li>
                                <li class="xiaoji">
                                    <p class="xianjia">¥${sp[i].money*parseInt(sp[i].num)}.00</p>
                                    <p class="shen">省 &nbsp;¥${sp[i].myh*parseInt(sp[i].num)}.00</p>
                                </li>
                                <li>
                                    <a class="shangchu" onclick='delsp(${sp[i].id})'>删除</a>
                                </li>
                            </ul>
                        </div>
        
                        <div class="fuwu">
                            <div class="yanchang">
                                
                            </div>
                           
                            
                        </div>
                    </div>`;
                    //给每个商品的选框绑定事件
                    // console.log(`${"#lab"+sp[i].id}`)
                   
                    
                }
                var div=$(str);
                
                
                $(".checkedAll").after(div);
                $(".toal-price").html(` 
                <p style="margin-top: 10px;text-align:center">
                <label for="" class="zonji">总计</label>
                <span class="zonjia">￥${allP}</span>
               
            </p>
            <p>
                <i class="yixuanze">已选择 <em class="shuliang">${allNum}</em> 件商品优惠： <span class="youhui">￥${allyh}.00</span></i>
            </p>`);
            

            }
            
            
        };
        macar();
        // var sp= localStorage.getItem('carlist');
        
        reload=macar;

        //更多精彩
        $('#more').hover(function(){
            $("#more").css("background","#fff").children().css({
                "border":"none",
                "color":"#cb242b"
            }).children().html("&#xe669;");
            $(".nav-1").css("display","block").hover(function(){
                $(this).css("display","block");
                $("#more").css("background","#fff").children().css({"border":"none","color":"#cb242b"}).children()
                .html("&#xe669;")  
            },function(){
                $(".nav-1").css("display","none");
                $("#more>a").css({
                    "border-left":"1px solid #a4a4a4",
                    "color":"#a4a4a4"
                }).parent().css("background","#f5f5f5").children().children().html("&#xe668;");
            });
        
        },function(){
            $("#more>a").css("border-left","1px solid #a4a4a4").parent().css("background","#f5f5f5")
            .children().children().html("&#xe668;").parent().css("color","#a4a4a4");
            $(".nav-1").css("display","none");

        });

        // 客户服务
        $('#kehu').hover(function(){
            $("#kehu").css("background","#fff").children().css({
                "border-color":"#fff",
                "color":"#cb242b"
            }).children().html("&#xe669;");
            $(".nav-2").css("display","block").hover(function(){
                $(this).css("display","block");
                $("#kehu").css("background","#fff").children().css({"border-color":"#fff","color":"#cb242b"}).children()
                .html("&#xe669;")  
            },function(){
                $(".nav-2").css("display","none");
                $("#kehu>a").css({
                    "border-left":"1px solid #a4a4a4",
                    "color":"#a4a4a4"
                }).parent().css("background","#f5f5f5").children().children().html("&#xe668;");
            });
        
        },function(){
            $("#kehu>a").css("border-left","1px solid #a4a4a4").parent().css("background","#f5f5f5")
            .children().children().html("&#xe668;").parent().css("color","#a4a4a4");
            $(".nav-2").css("display","none");

        });


        //手机端
        $("#phone").hover(function(){
            $("#phone").css("background","#fff").children().css({
                "border-color":"#fff",
                "color":"#cb242b"
            }).children().html("&#xe669;");
            $(".nav-3").css("display","block").hover(function(){
                $(this).css("display","block");
                $("#phone").css("background","#fff").children().css({"border-color":"#fff","color":"#cb242b"}).children()
                .html("&#xe669;") 
            },function(){
                $(this).css("display","none");
                $("#phone>a").css("border-left","1px solid #a4a4a4").parent().css("background","#f5f5f5")
            .children().children().html("&#xe668;").parent().css("color","#a4a4a4");

            });
        },function(){
            $(".nav-3").css("display","none");
            $("#phone>a").css("border-left","1px solid #a4a4a4").parent().css("background","#f5f5f5")
            .children().children().html("&#xe668;").parent().css("color","#a4a4a4");
        })
        
        //网址导航
        $('#wz').hover(function(){
            $("#wz").css("background","#fff").children().css({
                "border-color":"#fff",
                "color":"#cb242b"
            }).children().html("&#xe669;");
            $(".nav-4").css("display","block").hover(function(){
                $(this).css("display","block");
                $("#wz").css("background","#fff").children().css({"border-color":"#fff","color":"#cb242b"}).children()
                .html("&#xe669;")  
            },function(){
                $(".nav-4").css("display","none");
                $("#wz>a").css({
                    "border-left":"1px solid #a4a4a4",
                    "color":"#a4a4a4"
                }).parent().css("background","#f5f5f5").children().children().html("&#xe668;");
            });
        
        },function(){
            $("#wz>a").css("border-left","1px solid #a4a4a4").parent().css("background","#f5f5f5")
            .children().children().html("&#xe668;").parent().css("color","#a4a4a4");
            $(".nav-4").css("display","none");

        });

        $(".host>a:first").hover(function(){
           $("#zhu").css("color","#cb242b")
        },function(){
            $("#zhu").css("color","#777")
        });
        $(".host a:last").hover(function(){
            $("#zhu").css("color","#cb242b")
         },function(){
             $("#zhu").css("color","#777")
         });
    //


    //热销推荐
         $(".left").hover(function(){
            var left=$("#hotul").css("left")
            console.log(left);
            if(left=="0px"){
                $(this).css("opacity","1")
            }else{
                $(this).css("opacity","0.5")
               
            }
           
         },function(){

         });
         $(".left").click(function(){
           if($("#hotul").css("left")=="0px"){
            $("#hotul").animate({"left":"-220px"},500);
           }
        });
        //right

        $(".right").hover(function(){
            var right=$("#hotul").css("left")
            console.log(right);
            if(right=="-220px"){
                $(this).css("opacity","1")
            }else{
                $(this).css("cursor","url('../images/jy.png')")
               
            }
           
         },function(){

         });
         $(".right").click(function(){
           if($("#hotul").css("left")=="-220px"){
            $("#hotul").animate({"left":"0px"},500);
           }
        });

        //登录按钮
        function logining(){
            var height=document.body.offsetWidth;
            // console.log(height)
            $("#zhezhao").css({"position":"fixed","width":"100%","height":height+"px",
                "opacity":0.5,"background":"#000","left":0,'right':0,"z-index":200,"display":"block"});
                $("#logining").css({"opacity":1,"z-index":500,'display':"block"})
           
        }
        $(".btn").click(logining);
        //关闭登录框
        $(".colse").click(function(){
            $("#zhezhao").css("display","none")
            $("#logining").css("display","none")
        })

        //记住华为账号：
        var cl=1;
        $(".lab").click(function(){
            // alert(1)
            cl+=1;
            // console.log($("#jzmm").html())
            // alert(cl);
            if(cl%2==0){
                // alert(1)
                $("#jzmm").html("&#xe603;").css("color","#007dff");
            }else{
                $("#jzmm").html("&#xe604;").css("color","#ccc");
            }
        });
      
        //     全选框的点击

        $("#lab1").click(function(){
            // console.log(0)
            if(!$("#ckall").prop("checked")){
                // console.log(1)
                $(this).css("background","url(./images/ck01.png)");
                $("#lab9").css("background","url(./images/ck01.png)");
                // console.log($(".sp-p").children());
                for(var i=0;i<$(".sp-p").children().length;i++){
                    if(i%2==0){
                        $(".sp-p").children().eq(i).prop("checked",true)
                    }else{
                        $(".sp-p").children().eq(i).css("background","url(./images/ck01.png)");
                    }

                }
            }else{
                $(this).css("background","");
                $("#lab9").css("background","")
                for(var i=0;i<$(".sp-p").children().length;i++){
                    if(i%2==0){
                        $(".sp-p").children().eq(i).prop("checked",false)
                    }else{
                        $(".sp-p").children().eq(i).css("background","");
                    }

                }
            }   
            
            
        })

        // ----
        $("#lab9").click(function(){
            // console.log(0)
            if(!$("#ckall2").prop("checked")){
                // console.log(1)
                $(this).css("background","url(./images/ck01.png)")
                $("#lab1").css("background","url(./images/ck01.png)")
                for(var i=0;i<$(".sp-p").children().length;i++){
                    if(i%2==0){
                        $(".sp-p").children().eq(i).prop("checked",true)
                    }else{
                        $(".sp-p").children().eq(i).css("background","url(./images/ck01.png)");
                    }

                }
            }else{
                $(this).css("background","")
                $("#lab1").css("background","");
                for(var i=0;i<$(".sp-p").children().length;i++){
                    if(i%2==0){
                        $(".sp-p").children().eq(i).prop("checked",false)
                    }else{
                        $(".sp-p").children().eq(i).css("background","");
                    }

                }
            }
        })
        

        //*********************** */
        // 服务宝动画
        
        $(".yc-left").hover(function(){
            $(".ysmore").css("overflow",'visible');
            $(".yc-left").css({"border-color":"#ccc","background":"#fff"});
            $(".yc-none").css("border-color","#ccc")
        },function(){
            $(".ysmore").css("overflow",'hidden');
            $(".yc-left").css({"border-color":"#f5f5f5","background":"#f5f5f5"});
            $(".yc-none").css("border-color","#f5f5f5")
        });

//---------
        $(".yc-bot").hover(function(){
            $(".ysmore").css("overflow",'visible');
            $(".yc-left").css({"border-color":"#ccc","background":"#fff"});
            $(".yc-none").css("border-color","#ccc")
        },function(){
            $(".ysmore").css("overflow",'hidden');
            $(".yc-left").css({"border-color":"#f5f5f5","background":"#f5f5f5"});
            $(".yc-none").css("border-color","#f5f5f5")
        });

    // 搭配推荐
    $(".left-sp").click(function(){
        // alert(1)
        if($("#uldp").css("left")=="0px"){
            // alert(1)
            $("#uldp").animate({"left":"-224px"},500)
        }
    })

    // right
    $(".right-sp").click(function(){
        // alert(1
        if($("#uldp").css("left")=="-224px"){
            // alert(1)
            $("#uldp").animate({"left":"0px"},500)
        }
    });






    //实现购物车的添加功能
    function Car(){};
    Car.prototype.getcar=function(){
        return  JSON.parse( localStorage.getItem('cartlist') ) || [];
        //本土存在数据直接返回数据没有创建一个空数组
    };
    Car.prototype.hasgood=function(id){
        var carlist=this.getcar();
        for(var i=0;i<carlist.length;i++){
            if(carlist[i].id==id){
                // carlist[i].num+1;
                return true;
            }
        }
        return false;
    };
    Car.prototype.addCar=function(good){
        //添加购物车，先判断购物车李有没有东西；
        var carlist=this.getcar();
        //再判断是否存在相同产品；
        if(this.hasgood(good.id)){
            carlist[id].num+1;
            //有的话数量+1即可；
        }else{
            //没有的话直接push进入本地存储数组；
            carlist.push(good);
        }
        //将数组写入本地存储（更新！！！）
        localStorage.setItem("carlist",JSON.stringify(carlist));
    }


});

function macar(){
    // var sp=localStorage.getItem("carlist");     
    if(!sp){
        $(".shopCar").css("display","block");
        $(".haveCar").css("display","none");
                //没有商品的购物车
        //通过Ajax访问服务器数据用以推荐热门商品
        $.get("./json/good.json",function(res){
            // alert(1)
            console.log( $("#hotul>li").eq(1).html());
            for(var i=0;i< $("#hotul>li").length;i++){
                $("#hotul>li").eq(i).html(`<a href="">
                <img src=${res[i].url} alt="">
                <p>${res[i].title}</p>
            </a>
            <span>￥${res[i].money}</span>`)
                
            }
        
            // return res;
        },"json")
        // console.log(1)
    }else{
        $(".shopCar").css("display","none");
        $(".haveCar").css("display","block");
        // console.log(2)
        //有商品的购物车！！ 需要通过详情页点击加入购物车在本地存储添加商品信息；
        //再从购物车页面加载本地存储的信息显示再购物车页面上,
        //通过ajax访问服务端获取信息用来推荐搭配
        $.get("./json/good.json",function(res){
            // alert(1)
          
            // console.log( $("#uldp>li").eq(1).html());
            for(var i=6;i< $("#uldp>li").length+6;i++){
                // res.num=1;
                var json_str = JSON.stringify(res[i]);
                // console.log(res[i]);
                $("#uldp>li").eq(i-6).html(`
                <a href="">
                <img src=${res[i].url}>
                <p> ${res[i].title}</p>
                </a>
                <span>￥${res[i].money}</span>
                <p class="addp" onclick='dpadd(${json_str})'>加入购物车</p>`
                )
                
            }
        
            // return res;
        },"json")
        //------------------------
        // console.log(sp)
        var str=``;
        // sp = JSON.parse(sp);
        var allNum=0;
        var allP=0;
        var allyh=0;
        for(var i=0;i<sp.length;i++){
                allNum+=sp[i].num;
                allP+=sp[i].money*parseInt(sp[i].num);
                allyh+=sp[i].myh*parseInt(sp[i].num);
               str+= `<div class="sp-main">
                <div class="sp-top">
                    <p class="sp-p"><input type="checkbox" class="ck" id=${"ck"+sp[i].id}><label for=${"ck"+sp[i].id} class="label" id=${"lab"+sp[i].id} onclick='fnc(${sp[i].id})'></label></p>
                    <a href="" class="top-pic">
                        <img src=${sp[i].url} alt="${sp[i].title}">
                    </a>
                    <ul>
                        <li>
                            <a href="" class="shangpin">${sp[i].content}</a>
                        </li>   
                        <li class="danjia">
                            <p class="xianjia">¥${sp[i].money}.00</p>
                            <p class="yuanjia">¥${parseInt(sp[i].money)+parseInt(sp[i].myh)}.00</p>
                        </li>
                        <li >
                            <div class="sp-num">
                                <a  class="jian" onclick='jian(${sp[i].id})' id=${"jian"+sp[i].id}>-</a>
                                ${sp[i].num}
                                <a  class="jia" onclick='jia(${sp[i].id})' id=${"jia"+sp[i].id}>+</a>
                            </div>
                        </li>
                        <li class="xiaoji">
                            <p class="xianjia">¥${sp[i].money*parseInt(sp[i].num)}.00</p>
                            <p class="shen">省 &nbsp;¥${sp[i].myh*parseInt(sp[i].num)}.00</p>
                        </li>
                        <li>
                            <a  class="shangchu" onclick='delsp(${sp[i].id})'>删除</a>
                        </li>
                    </ul>
                </div>

                <div class="fuwu">
                    
                   
                    
                </div>
            </div>`;
            //给每个商品的选框绑定事件
            // console.log(`${"#lab"+sp[i].id}`)
           
            
        }
        var div=$(str);
        
        
        $(".checkedAll").after(div);
        $(".toal-price").html(` 
        <p style="margin-top: 10px;text-align:center">
        <label for="" class="zonji">总计</label>
        <span class="zonjia">￥${allP}</span>
       
    </p>
    <p>
        <i class="yixuanze">已选择 <em class="shuliang">${allNum}</em> 件商品优惠： <span class="youhui">￥${allyh}.00</span></i>
    </p>`);
    

    }
    
    
};


function fnc(ele,id){
    // console.log($(ele).prev());
    // console.log($(ele).prev()[0].checked);
    // alert(id);
    var z=0;
    if(!$(`${"#ck"+id}`).prop("checked")){
      
        $(`${"#lab"+id}`).css("background","url(./images/ck01.png)"); 
        var sbl=$(`${"#lab"+id}`).parent().parent().parent().siblings();
        console.log(sbl);
        for(var i=1;i<sbl.length;i++){
            // console.log(sbl.eq(i).find('input').prop('checked'));
            if(sbl.eq(i).find('input').prop('checked')){
                z++
            }

        }
        
    }else{
        $(`${"#lab"+id}`).css("background","");
    }
    
    console.log(z)
    if(z==$(".ck").length-1){
        $("#lab1").css("background","url(./images/ck01.png)");
        $("#lab9").css("background","url(./images/ck01.png)");
        $("#ckall").prop('checked',true);
        $("#ckall2").prop('checked',true);
    }else{
        $("#lab1").css("background","");
        $("#lab9").css("background","");
        $("#ckall").prop('checked',false);
        $("#ckall2").prop('checked',false);
    }
   
};
var sp=localStorage.getItem("carlist")
sp =JSON.parse(sp);
// console.log(sp)
function jian(id){
 
    for(var i=0;i<sp.length;i++){
        // alert(1)
        if(sp[i].id==id && sp[i].num>1){
            $(".sp-main").remove();
            sp[i].num=sp[i].num-1;
            macar();  
            // console.log(sp)
            localStorage.setItem("carlist",JSON.stringify(sp));
            return;
        }
    }
    
}
function jia(id){
    for(var i=0;i<sp.length;i++){
        // alert(1)
        if(sp[i].id==id && sp[i].num<5){
            $(".sp-main").remove();
            sp[i].num=sp[i].num+1;
            macar();  
            // console.log(sp)
            localStorage.setItem("carlist",JSON.stringify(sp));
            return;
        }
    }
}
var t
function delsp(id){
     t= confirm("您确认要删除该商品吗？");
    console.log(t);
    if(t){
        for(var i=0;i<sp.length;i++){
            if(sp[i].id==id){
                $(".sp-main").remove();
                // console.log(id)
                sp.splice(i,1);
                // console.log(sp)
                localStorage.setItem("carlist",JSON.stringify(sp));
                location.reload();
                if(sp.length==0){
                    localStorage.clear();
                    location.reload();
                }
                
                macar();

                return;
                
            }
        }
    }
    
}

function dpadd(ele){
     console.log(sp.length)
    for(var i=0;i<sp.length;i++){
        
        if(sp[i].id==ele.id ){
            console.log(sp[i].id)
            $(".sp-main").remove();
            sp[i].num=sp[i].num+1;
            // console.log(sp)
            localStorage.setItem("carlist",JSON.stringify(sp));
            macar();
            location.reloaad();
            return;
        }
            
        
    }
    $(".sp-main").remove();
            sp.push(ele);
            localStorage.setItem("carlist",JSON.stringify(sp));
            macar();
            location.reloaad();
            return;

    
}