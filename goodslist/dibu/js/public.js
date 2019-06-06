//判断一数是否是素数
function isPrimery(num){
	for (var i = 2; i < num; i++) {
		if(num % i == 0){
			//只要执行了这里就表示 num不是素数
			return false;
		}
	}
	return true;
}
//通过id名称获取元素
function $id(idName){
	return document.getElementById(idName);
}
//获取随机整数 
function getRand(minNum,maxNum){
	return parseInt(Math.random()*(maxNum-minNum+1)) + minNum;
};
//随机获取验证码
function getYZM(num){
	//由数字，字母（分大小写）
	//以上字符由ASCII码表来
	//随机而来
	var yzm = "";
	for (var i = 0; i < num; i++) {
		//获取数字或字母（分大小写）的字符
		//随机获取ASCII码
		var rand = getRand(48,122);
		if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){
			i--;
		}else{
			yzm += String.fromCharCode(rand);
		}
	}
	return yzm;
}
function dateToString(date){//date接收一个时间对象
	//2019年04月24日 15:40:30 星期三
	var dateStr = "";
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var min = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	dateStr += y + "年" + db(m) + "月" + db(d) + "日";
	dateStr += " "+ db(h) + ":" + db(min) + ":" + db(s);
	dateStr += week[w];
	
	return dateStr;
}
function db(num){
	return num < 10 ? 0 + "" + num : num; 
}
//获取两个时间的时间差的秒数。
function diffTime(startTime,endTime){//startTime/endTime是时间对象
	return (endTime.getTime() - startTime.getTime())/1000;
}
//随机获取十六进制颜色
function getColor(){
	var color = "0123456789abcdef";
	var str = "#";
	for (var i = 0; i < 6; i++) {
		var rand = getRand(0,15);
		str += color.charAt(rand);
	}
	return str;
}
//跨浏览器兼容ie8及以下浏览器实现通过class的名称获取元素集合。
function getByClassName(cName){
	var nodeArr = [];//保存所有的以cName命名的元素。
	var ele = document.getElementsByTagName("*");
	for (var i = 0; i < ele.length; i++) {
		if(ele[i].className == cName){
		//if(ele[i].getAttribute("class") == cName){
			nodeArr.push(ele[i]);
		}
	}
	return nodeArr;
}
//跨浏览器兼容ie8实现获取所有子节点的元素节点集合。
function getChildNodes(ele){
	//跨浏览器获取ele的所有子节点的元素节点不包括注释
	var childs = ele.childNodes;
	var childNodesArr = [];
	if(childs.length > 0){//只有子元素不为0时，才需要处理
		for (var i = 0; i < childs.length; i++) {
			//遍历所有的子元素
			//判断是元素节点，需要把元素节点保存到节点数组 中
			if(childs[i].nodeType == 1){
				childNodesArr.push(childs[i]);
			}
		}
	}
	//console.log(childs.length);
	return childNodesArr;
}
//跨浏览器兼容ie8实现获取事件对象的button属性值。
function getButton(eve){
	if(eve){//这个实参存在，说明是现代浏览器
		return eve.button;
	}else{//ie8
		var but = window.event.button;
		switch(but){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}
//跨浏览器兼容ie8实现事件监听
function addEvent(ele,event,fn,flag){
	if(ele.addEventListener){//现代浏览器
		if(flag){//如果传递了flag
			ele.addEventListener(event,fn,flag);
		}else{
			ele.addEventListener(event,fn);
		}
	}else{//ie8
		ele.attachEvent("on"+event,fn);
	}
}
//跨浏览器兼容ie8获取元素外部样式
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}