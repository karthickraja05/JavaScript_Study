<?php 

if(isset($_GET['id'])){
	$sleep_time = $_GET['id'];
}else{
	$sleep_time = rand(3,6);
}
sleep($sleep_time);
echo $sleep_time;
