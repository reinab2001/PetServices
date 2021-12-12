<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include("connection.php");
if(isset($_GET["id"]) && ($_GET["id"]!= "")){
	$id=$_GET["id"];
}else{
	die("nope try again");
}

$query ="SELECT * FROM dogwalkers WHERE id=?";
$stmt =  $connection->prepare($query);
$stmt->bind_param("i",$id);
$stmt->execute();
$results= $stmt->get_result();
$temp_array = [];
while($row = $results->fetch_assoc()){
	$temp_array[]=$row;
}
$json =json_encode($temp_array);
print $json;

$stmt->close();
$connection->close();
?>