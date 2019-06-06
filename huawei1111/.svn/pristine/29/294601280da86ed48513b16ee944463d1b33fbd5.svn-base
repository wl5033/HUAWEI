$(function(){
        // console.log($("#more").html())
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
      




});