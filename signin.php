<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("connection.php");

if(isset($_GET["username"]) && $_GET["username"]!=""){
$username=$_GET["username"];
}
else{
	die("nope");
}
if(isset($_GET["password"]) && $_GET["password"]!=""){
$pass=hash("sha256",$_GET["password"]);
}
else{
	die("nope");
}

$mysql="SELECT * FROM users WHERE username=? AND password=?";
$stmt=$connection->prepare($mysql);
$stmt->bind_param("ss",$username, $pass);
$stmt->execute();
$result= $stmt->get_result();
$temp_array= [];
while($row=$result->fetch_assoc()){
	$temp_array[]=$row;
}
$json=json_encode($temp_array);
print $json;
$stmt->close();
$connection->close();

?>