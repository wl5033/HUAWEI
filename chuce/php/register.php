<?php

mysql_connect('127.0.0.1','root','root');
mysql_query('use sz1904');
$acc = $_POST['cell_phone'];
$bcc = $_POST['userpwd_ctn'];

// 查询号码是否注册
$sql = "select *from user where username = '$acc'";
$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);
if($row){
    $res = [
        "code"=>-1,
        "message"=>"号码已注册"
    ];
    echo json_encode($res);
}else{
// 没有注册过才能注册
$sql = "insert into user(username,password) values('$acc','$bcc')";

mysql_query($sql);
$num = mysql_affected_rows();
if($num>0){
    $res=[
        'code'=>200,
        'message'=>'注册成功'
    ];
}else{
    $res=[
        'code'=>-1,
        'message'=>"网络异常,请稍后重试"
    ];
}
echo json_encode($res);
}


?>