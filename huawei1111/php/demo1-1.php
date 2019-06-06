<?php
mysql_connect("127.0.0.1","root","root");
mysql_query("use sz1904");
$username=$_POST['username'];
$password=$_POST['password'];
$sql="select * from user where username='$username' and password='$password' ";
$result=mysql_query($sql);
$row=mysql_fetch_assoc($result);
if($row){
	$response=[
		"code"=>200,
		"message"=>"登陆成功"
	];
}else{
	$response=[
		"code"=>-1,
		"message"=>"查询失败"
	];
}
echo json_encode($response);
?>