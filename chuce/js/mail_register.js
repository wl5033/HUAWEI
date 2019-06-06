$(function(){ 

	var phoneFlag = false;
	var pwdFlag = false;
	// var birthFlag = false;

    // 邮箱验证start
    $("#cell_yx").keyup(function(){ 
		var reg = /^[1-9a-zA-Z]\w{5,11}@\w{2,6}(\.[a-zA-Z]{2,3}){1,2}$/;
        if(reg.test($("#cell_yx").val())){
			$("#hint").css('display','none');
			$(".lerror").css('border','1px solid #d9d9d9');
			phoneFlag = true;
		}else{
			$("#hint").css({'color':'red','font-size':'12px'}).html('对不起，您输入的电子邮箱错误');
			$(".lerror").css('border','1px solid red');
			$("#hint").css('display','block');
			phoneFlag = false;
		}
		if($("#cell_yx").val() === ''){
			$("#hint").css('display','none');
			$(".lerror").css('border','1px solid #d9d9d9');
			phoneFlag = false;
		}
    });
    // 邮箱验证end


    // 手机号验证
    $("#cell_phone").keyup(function(){
        var reg = /^1[3-9]\d{9}$/;
        if(reg.test($("#cell_phone").val())){
            $("#bint_in").css("display",'none');
            $(".telephone").css('border','1px solid #d9d9d9');
        }else{
            $("#bint_in").css({'color':'red','font-size':'12px'}).html('手机号不正确');
			$(".telephone").css('border','1px solid red');
			$("#bint_in").css('display','block');
        }
        if($('#cell_phone').val() === ''){
            $("#bint_in").css('display','none');
            $(".telephone").css('border','1px solid #d9d9d9');

        }
    });





	// 密码验证start
    $("#userpwd_ctn").blur(function(){
		$(".reminder").css('display','none');
		var qeg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if((qeg.test($("#userpwd_ctn").val())) != ''){
			$(".mima").css('border','1px solid #d9d9d9');
            $("#userpwd").css('display','none');
			$(".reminder").css('display','none');
			pwdFlag = true;

        }else{
			$('#userpwd').css({'color':'red','font-size':'12px','display':'block'}).html('至少包含8个字符');
			$(".mima").css('border','1px solid red');
			pwdFlag = false;
		}	
	});
	// 密码验证end

		
		//密码验证提示start
	$("#userpwd_ctn").keyup(function(){

	var qeg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	var len = Number($("#userpwd_ctn").val().length);
	var ren = $("#userpwd_ctn").val();
	if(ren === ''){
		$(".not_spa1").css('color','#7f7f7f');
	}

		if(len>0){
		$(".reminder").css('display','block');
		$(".not_spa1").css('color','#41ce48');
		
		if(len >=8){
			$(".not_spa2").css('color','#41ce48');
		}else{
			$(".not_spa2").css('color','#7f7f7f');
		}if(qeg.test(ren)){
			$(".not_spa3").css('color','#41ce48');
			$("#qiang").html('强');
			$(".symbol").css('border-bottom','3px solid #41ce48');
			
		}else{
			$(".not_spa3").css('color','#7f7f7f');
			$("#qiang").html('');
			$(".symbol").css('border-bottom','3px solid #ccc');
			
		} 
		
	}
	});
    //密码验证提示end
    
    
    // 确认密码start
	$("#info_password").keyup(function(){
		if($("#userpwd_ctn").val() === $("#info_password").val() && $("#userpwd_ctn").val() != ''){
			$("#inro_password").css('display','none');
			$(".queren").css('border','1px solid #d9d9d9');
			pwdFlag = true;
		}else{
			$("#inro_password").css({'color':'red','font-size':'12px'}).html('密码与确认密码不一致');
			$(".queren").css('border','1px solid red');
			$("#inro_password").css('display','block');
			pwdFlag = false;
		}
	});
           
    // 确认密码end




    // 出生日期start
    var year = $id("year");
	var month = $id("month");
	var day = $id("day");
	for(var i = 1900 ; i<=2019;i++){
		var options = new Option(i,i);
		year.appendChild(options);
	}
	year.onchange = function(){
		month.options.length = 1;
		day.options.length = 1;
		if(this.value == 0){
			return;
		}
		
		for(var i = 1 ; i<=12;i++){
		var options = new Option(i,i);
		month.appendChild(options);
		}
	}
	month.onchange = function(){
		day.options.length = 1;
		var yVal = year.value;
		var mVal = month.value;
		switch(mVal){
			case "1":
			case "3":
			case "5":
			case "7":
			case "8":
			case "10":
			case "12":
				getDays(31);
				break;
			case "4":
			case "6":
			case "9":
			case "11":
				getDays(30);
				break;
			case "2":
				if(yVal % 4 ==0 && yVal %100!=4 ||yVal%400==0){
					getDays(29);
				}else{
					getDays(28);
				}
				break;
		}
	}
	function getDays(days){
		for(var i = 1; i<=days;i++){
			var options =new Option(i,i);
			day.appendChild(options);
		}
    }

    // 请选择生日的年月日

    // 出生日期end
	

		
	
	
	$(".register").click(function(){
		if(phoneFlag == false || pwdFlag == false){
			return false;
		}
		// ajax提交注册信息
		var data = $('#shyform').serialize();
		$(".register").attr('disabled','true').html('注册中...');
		$.post('./register.php',data,function(res){
			$(".register").attr('disabled',false).html('注册'); 
			if(res.code == 200){
				alert(res.message);
				// location.href ="./login.html";
			}else{
				alert(res.message);
			}
		},'json')

	});
	

}) ;